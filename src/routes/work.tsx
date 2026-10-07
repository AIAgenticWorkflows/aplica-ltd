import { createFileRoute, redirect } from "@tanstack/react-router";

// "Our Work" is now "Our Services". Links and search results that still point
// at /work are sent on to /services with a permanent redirect.
export const Route = createFileRoute("/work")({
  beforeLoad: () => {
    throw redirect({ to: "/services", statusCode: 301 });
  },
});
