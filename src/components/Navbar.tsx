import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-2 group shrink-0">
          <span className="h-2 w-2 rounded-full bg-foreground/80 transition-all duration-500 group-hover:bg-foreground" />
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-foreground">
            Keshav Vyas
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-foreground shrink-0"
        >
          <span className="link-underline hidden xs:inline sm:inline">Get in touch</span>
          <span className="link-underline xs:hidden sm:hidden">Contact</span>
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </nav>
  );
}
