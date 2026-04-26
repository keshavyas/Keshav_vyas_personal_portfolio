import { ArrowUpRight } from "lucide-react";

const projects: Array<{
  no: string;
  title: string;
  tag: string;
  year: string;
  description: string;
  tech: string[];
  href?: string;
}> = [
  {
    no: "01",
    title: "Law-Firm website",
    tag: "Web Development",
    year: "2026",
    description:
      "A website for a law firm built with React and Tailwind CSS with AI integration for legal research and writing , LLM , Ollama , Hugging face ai models. ",
    tech: ["React", "Node", "MongoDB", "PyTorch", "LangChain"],
    // href: "13.61.174.37",
  },
  {
    no: "02",
    title: "Fashion Search Engine",
    tag: "Machine Learning",
    year: " 2025-2026",
    description:
      "Built AI-powered MERN fashion search engine using personal LLM, smart recommendations, ML-based 3D body mapping, body-dimension fitting, and full-body virtual cloth try-on, delivering personalized, interactive shopping experience.",
    tech: ["Fastify", "PostgreSQL", "Redis", "Docker", "Stripe"],
    // href: "https://example.com",
  },
  {
    no: "03",
    title: "Pulse",
    tag: "Mobile / Health",
    year: "2025",
    description:
      "An offline-first fitness companion with HealthKit integration and on-device ML for personalised workout suggestions.",
    tech: ["React Native", "Expo", "MongoDB", "TensorFlow Lite"],
    // href: "https://example.com",
  },
  {
    no: "04",
    title: "Vision Studio",
    tag: "AI / Computer Vision",
    year: "2025",
    description:
      "End-to-end computer vision platform — annotate, train, and deploy object detection models with one click. YOLOv8 powered.",
    tech: ["Python", "PyTorch", "FastAPI", "Next.js", "AWS"],
    // href: "https://example.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 md:py-40 px-5 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10 sm:mb-16">
          <span className="h-px w-8 sm:w-10 bg-border" />
          <span>03 — Selected work</span>
        </div>

        <div className="flex items-end justify-between mb-12 sm:mb-20 gap-4 sm:gap-6 flex-wrap">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.08] text-foreground max-w-2xl">
            A short list of recent
            <span className="font-serif text-muted-foreground"> collaborations</span>.
          </h2>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            2024 — 2026
          </p>
        </div>

        <div className="border-t border-border">
          {projects.map((p) => (
            <div key={p.no} className="border-b border-border">
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block py-7 sm:py-10 transition-colors duration-500 hover:bg-card/40"
                >
                  <ProjectRow p={p} />
                </a>
              ) : (
                <div className="group block py-7 sm:py-10">
                  <ProjectRow p={p} />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 sm:mt-14 text-sm text-muted-foreground max-w-2xl">
          And many more projects are available on my{" "}
          <a
            href="https://github.com/keshavyas"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function ProjectRow({ p }: { p: (typeof projects)[number] }) {
  return (
              <div className="grid grid-cols-12 gap-3 sm:gap-6 items-start">
                <div className="col-span-2 sm:col-span-1 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground pt-2">
                  {p.no}
                </div>
                <div className="col-span-8 sm:col-span-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[-0.02em] text-foreground transition-transform duration-500 sm:group-hover:translate-x-3">
                    {p.title}
                  </h3>
                  <div className="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {p.tag} · {p.year}
                  </div>
                </div>
                <div className="col-span-2 sm:hidden flex justify-end items-start pt-1">
                  <span className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-500 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-5 text-sm text-muted-foreground leading-relaxed mt-2 sm:mt-0">
                  <p>{p.description}</p>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs font-mono">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:flex col-span-2 sm:justify-end items-start pt-2">
                  <span className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-500 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
  );
}
