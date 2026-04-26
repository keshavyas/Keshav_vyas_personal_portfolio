import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", handle: "github.com/keshavyas", href: "https://github.com/keshavyas" },
  { icon: Linkedin, label: "LinkedIn", handle: "linkedin.com/in/keshav-vyas-010011311", href: "https://www.linkedin.com/in/keshav-vyas-010011311/" },
  { icon: Mail, label: "Email", handle: "keshavdeepakvyas@gmail.com", href: "mailto:keshavdeepakvyas@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 md:py-40 px-5 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10 sm:mb-16">
          <span className="h-px w-8 sm:w-10 bg-border" />
          <span>04 — Contact</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.03em] leading-[1] text-foreground">
              Have a project in
              <br />
              <span className="font-serif text-muted-foreground">mind</span>? Let's
              <br />
              talk.
            </h2>

            <a
              href="mailto:keshavdeepakvyas@gmail.com"
              className="group mt-8 sm:mt-12 inline-flex items-center gap-3 sm:gap-4 text-lg sm:text-2xl md:text-3xl font-light tracking-tight text-foreground break-all"
            >
              <span className="link-underline">keshavdeepakvyas@gmail.com</span>
              <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5 sm:mb-6">
              Elsewhere
            </div>
            <ul className="border-t border-border">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 sm:py-5 border-b border-border transition-colors duration-500 gap-3"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <s.icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-500 group-hover:text-foreground" />
                      <span className="text-sm sm:text-base text-foreground">{s.label}</span>
                      <span className="hidden md:inline text-xs font-mono text-muted-foreground truncate">
                        {s.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-500 group-hover:text-foreground group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 sm:mt-32 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} — Keshav Vyas</p>
          <p>Designed & built with care</p>
        </div>
      </div>
    </section>
  );
}
