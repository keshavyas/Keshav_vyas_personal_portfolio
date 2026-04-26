import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/keshav_pic_1.jpeg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden grain flex flex-col"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-7xl px-5 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-16 flex-1 flex flex-col">
        {/* <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 sm:w-10 bg-border" />
          <span>Portfolio · Est. 2019</span>
        </div> */}

        <div className="mt-10 sm:mt-12 grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Portrait — small on mobile, larger on desktop */}
          <div className="lg:col-span-4 order-1 lg:order-1">
            <div className="relative w-40 sm:w-52 md:w-60 lg:w-full lg:max-w-sm mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border group">
                <img
                  src={portrait}
                  alt="Portrait of Keshav Vyas"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="mt-3 sm:mt-4 flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span></span>
                <span className="hidden sm:inline">Indore, IN ⟶ Remote</span>
                <span className="sm:hidden">Indore, IN ⟶ Remote</span>
              </div>
            </div>
          </div>

          {/* Intro copy */}
          <div className="lg:col-span-8 order-2 lg:order-2">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6 text-center lg:text-left">
              Hi, I'm —
            </p>
            <h1 className="text-[clamp(2.5rem,11vw,7rem)] font-light leading-[0.95] tracking-[-0.04em] text-foreground text-center lg:text-left">
              Keshav
              <br />
              <span className="font-serif text-muted-foreground">Vyas</span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              A full-stack software engineer crafting considered web platforms,
              mobile apps, and machine-learning systems. I work across
              <span className="text-foreground"> MERN stack</span>,
              <span className="text-foreground"> Fastify</span>,
              <span className="text-foreground"> PostgreSQL</span>,
              <span className="text-foreground"> MongoDB</span>, and applied
              <span className="text-foreground"> AI/ML</span>. I also build with
              <span className="text-foreground"> Python</span>, ship
              <span className="text-foreground"> app development</span>, train
              <span className="text-foreground"> ML models</span>, and handle
              <span className="text-foreground"> DevOps</span> — building things
              that feel quiet, fast, and well-made.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-foreground text-background text-[11px] sm:text-xs uppercase tracking-[0.18em] font-medium hover:bg-foreground/90 transition-colors duration-500"
              >
                <span>View Work</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="link-underline text-[11px] sm:text-xs uppercase tracking-[0.18em] text-foreground"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-auto pt-10 sm:pt-16 flex items-end justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <SocialIcon href="https://github.com/keshavyas" label="GitHub">
              <Github className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/keshav-vyas-010011311/" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="mailto:keshavdeepakvyas@gmail.com" label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
            <span>Scroll</span>
            <ArrowDown className="h-3 w-3 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-500"
    >
      {children}
    </a>
  );
}
