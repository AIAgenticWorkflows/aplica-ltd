import { describe, expect, test, beforeEach, afterEach, mock } from "bun:test";
import { contactSchema, sendNotificationEmail } from "./contact.functions";

describe("contactSchema", () => {
  test("validates valid payload", () => {
    const valid = {
      name: "Jane Doe",
      email: "jane@example.com",
      company: "Aplica Inc",
      message: "Hello, I would like to learn more about your services.",
    };
    expect(() => contactSchema.parse(valid)).not.toThrow();
  });

  test("rejects invalid email address", () => {
    const invalidEmail = {
      name: "Jane Doe",
      email: "invalid-email",
      message: "Hello, I would like to learn more about your services.",
    };
    expect(() => contactSchema.parse(invalidEmail)).toThrow();
  });

  test("rejects message shorter than 10 characters", () => {
    const shortMsg = {
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Too short",
    };
    expect(() => contactSchema.parse(shortMsg)).toThrow();
  });
});

describe("sendNotificationEmail", () => {
  const originalEnv = process.env;
  const originalFetch = global.fetch;

  beforeEach(() => {
    process.env = { ...originalEnv };
    delete process.env.LOVABLE_API_KEY;
    delete process.env.RESEND_API_KEY;
    delete process.env.NOTIFICATION_EMAIL;
    delete process.env.RESEND_FROM_EMAIL;
  });

  afterEach(() => {
    process.env = originalEnv;
    global.fetch = originalFetch;
  });

  test("returns sent: false with reason when no API keys are set", async () => {
    const result = await sendNotificationEmail({
      name: "Test User",
      email: "test@example.com",
      message: "This is a test notification message.",
    });

    expect(result.sent).toBe(false);
    expect(result.reason).toContain("Neither LOVABLE_API_KEY nor RESEND_API_KEY");
  });

  test("sends email via Lovable API when LOVABLE_API_KEY is configured", async () => {
    process.env.LOVABLE_API_KEY = "test-lovable-key";
    process.env.NOTIFICATION_EMAIL = "info@aplica.biz";

    let capturedUrl = "";
    let capturedBody: Record<string, unknown> = {};

    global.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
      capturedUrl = String(url);
      capturedBody = JSON.parse(String(init?.body || "{}"));
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }) as typeof fetch;

    const result = await sendNotificationEmail({
      name: "Alice Smith",
      email: "alice@example.com",
      company: "Tech Co",
      message: "Testing Lovable API contact form integration.",
    });

    expect(result.sent).toBe(true);
    expect(capturedUrl).toBe("https://api.lovable.dev/v1/email/send");
    expect(capturedBody.to).toBe("info@aplica.biz");
    expect(capturedBody.replyTo).toBe("alice@example.com");
    expect(capturedBody.subject).toContain("Alice Smith");
  });

  test("handles failure response from Lovable API", async () => {
    process.env.LOVABLE_API_KEY = "test-lovable-key";

    global.fetch = (async () => {
      return new Response("Unauthorized", { status: 401 });
    }) as typeof fetch;

    const result = await sendNotificationEmail({
      name: "Alice Smith",
      email: "alice@example.com",
      message: "Testing failed Lovable API send.",
    });

    expect(result.sent).toBe(false);
    expect(result.reason).toContain("Lovable API status 401");
  });

  test("sends email via Resend API when RESEND_API_KEY is configured", async () => {
    process.env.RESEND_API_KEY = "re_test_key_123";
    process.env.NOTIFICATION_EMAIL = "info@aplica.biz";

    let capturedUrl = "";
    let capturedHeaders: HeadersInit | undefined;
    let capturedBody: Record<string, unknown> = {};

    global.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
      capturedUrl = String(url);
      capturedHeaders = init?.headers;
      capturedBody = JSON.parse(String(init?.body || "{}"));
      return new Response(JSON.stringify({ id: "email_123" }), { status: 200 });
    }) as typeof fetch;

    const result = await sendNotificationEmail({
      name: "Bob Jones",
      email: "bob@example.com",
      message: "Testing Resend API notification delivery.",
    });

    expect(result.sent).toBe(true);
    expect(capturedUrl).toBe("https://api.resend.com/emails");
    expect((capturedHeaders as Record<string, string>)["Authorization"]).toBe(
      "Bearer re_test_key_123",
    );
    expect(capturedBody.to).toEqual(["info@aplica.biz"]);
    expect(capturedBody.reply_to).toBe("bob@example.com");
  });

  test("handles failure response from Resend API (e.g., onboarding domain error)", async () => {
    process.env.RESEND_API_KEY = "re_test_key_123";

    global.fetch = (async () => {
      return new Response(
        JSON.stringify({ message: "You can only send testing emails to your own email address." }),
        { status: 403 },
      );
    }) as typeof fetch;

    const result = await sendNotificationEmail({
      name: "Bob Jones",
      email: "bob@example.com",
      message: "Testing Resend domain restriction error.",
    });

    expect(result.sent).toBe(false);
    expect(result.reason).toContain("Resend API status 403");
  });
});
