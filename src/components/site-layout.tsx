import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logo from "@/assets/aplica-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/collaborate", label: "Collaborate" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-3" aria-label="Aplica home">
            <img src={logo} alt="Aplica logo" width={40} height={40} className="h-10 w-10" />
            <span className="font-display text-2xl tracking-tight text-deep">Aplica</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground [&.active]:bg-accent [&.active]:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/collaborate" className="btn-primary ml-3 px-5 py-2 text-sm">
              Start a Conversation
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 md:hidden"
          >
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          </button>
        </div>

        {open && (
          <nav aria-label="Mobile" className="border-t border-border bg-card px-5 py-3 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-12 border-t md:mt-20 border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 md:py-12 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" width={32} height={32} className="h-8 w-8" />
              <span className="font-display text-xl text-deep">Aplica</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Thoughtful AI tools that make everyday decisions easier.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">Explore</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">Connect</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.linkedin.com/company/aplica-ltd/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link to="/collaborate" className="hover:text-primary">
                  Work with us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aplica Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
