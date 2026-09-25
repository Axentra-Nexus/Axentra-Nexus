import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import axentraLogo from "@/assets/axentra-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-max flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <img src={axentraLogo} alt="Axentra Nexus logo" width={64} height={64} className="h-16 w-16 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-extrabold tracking-tight text-brand-blue">
              Axentra<sup className="ml-0.5 text-[10px] font-semibold align-super">™</sup>
            </span>
            <span className="-mt-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">Nexus</span>
            <span className="mt-0.5 text-[9px] font-medium italic text-muted-foreground">(a unit of Dharitha Nexus LLP)</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex h-10 items-center rounded-full gradient-brand px-6 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03]"
          >
            Partner With Us
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-md px-4 py-3 text-sm font-medium ${
                location.pathname === link.to ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-full gradient-brand px-6 text-sm font-semibold text-primary-foreground"
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  );
}
