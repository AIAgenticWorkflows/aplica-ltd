import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logo from "@/assets/aplica-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Our Work" },
  { to: "/about", label: "About" },
] as const;

const footerNav = [...nav, { to: "/collaborate", label: "Collaborate" }] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:h-20 md:py-0">
          <Link to="/" className="flex items-center gap-3" aria-label="Aplica home">
            <img
              src={logo}
              alt="Aplica logo"
              width={44}
              height={44}
              className="h-10 w-10 md:h-11 md:w-11"
            />
            <span className="font-display text-2xl font-bold tracking-tight text-deep">APLICA</span>
          </Link>

          <nav
            aria-label="Main"
            className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wider md:flex"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="border-b-2 border-transparent pb-1 text-deep transition-colors hover:text-primary [&.active]:border-primary [&.active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/collaborate"
              className="rounded-full bg-deep px-5 py-2.5 text-primary-foreground transition-colors hover:bg-primary"
            >
              Collaborate
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
            {footerNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-sm font-semibold text-deep hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-16 bg-deep text-secondary md:mt-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-3 md:py-16">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" width={36} height={36} className="h-9 w-9" />
              <span className="font-display text-xl font-bold text-white">APLICA</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary/70">
              A multi-service technology firm delivering product, engineering and AI capability to
              organisations that need it done properly.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-white">Explore</h2>
            <ul className="mt-4 space-y-2 text-sm text-secondary/70">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-white">Connect</h2>
            <ul className="mt-4 space-y-2 text-sm text-secondary/70">
              <li>
                <a
                  href="https://www.linkedin.com/company/aplica-ltd/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:info@aplica.biz" className="transition-colors hover:text-white">
                  info@aplica.biz
                </a>
              </li>
              <li>
                <a href="tel:+23059420144" className="transition-colors hover:text-white">
                  +230 5942 0144
                </a>
              </li>
              <li className="text-secondary/70">
                15, Issackhan Lane, Coromandel
              </li>
              <li>
                <Link to="/collaborate" className="transition-colors hover:text-white">
                  Work with us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-secondary/60">
          © {new Date().getFullYear()} Aplica Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
