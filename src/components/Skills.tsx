const categories = [
  {
    no: "01",
    title: "Frontend & Web",
    description: "Production interfaces with attention to typography, motion, and accessibility.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js", "Framer Motion"],
  },
  {
    no: "02",
    title: "Backend & APIs",
    description: "Resilient services that scale — from monoliths to event-driven architectures.",
    skills: ["Node.js", "Fastify", "Express", "GraphQL", "REST", "WebSockets"],
  },
  {
    no: "03",
    title: "Databases",
    description: "Considered data models, indexing, and query design for both SQL and document stores.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose"],
  },
  {
    no: "04",
    title: "Mobile",
    description: "Cross-platform apps that feel native — built with care for performance and offline use.",
    skills: ["React Native", "Expo", "iOS", "Android", "PWA"],
  },
  {
    no: "05",
    title: "AI / ML",
    description: "Applied machine learning, RAG pipelines, and LLM tooling for real product surfaces.",
    skills: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Hugging Face"],
  },
  {
    no: "06",
    title: "Infrastructure",
    description: "Pragmatic DevOps — containers, CI/CD, observability, and predictable deploys.",
    skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux", "Nginx"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 md:py-40 px-5 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10 sm:mb-16">
          <span className="h-px w-8 sm:w-10 bg-border" />
          <span>02 — Expertise</span>
        </div>

        <div className="max-w-3xl mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.08] text-foreground">
            A complete toolkit, applied with
            <span className="font-serif text-muted-foreground"> intention</span>.
          </h2>
        </div>

        <div className="border-t border-border">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group grid grid-cols-12 gap-3 sm:gap-6 py-7 sm:py-10 border-b border-border hover-fade opacity-80 hover:opacity-100"
            >
              <div className="col-span-12 sm:col-span-1 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {cat.no}
              </div>
              <div className="col-span-12 sm:col-span-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-foreground transition-transform duration-500 sm:group-hover:translate-x-2">
                  {cat.title}
                </h3>
              </div>
              <div className="col-span-12 sm:col-span-4 text-sm text-muted-foreground leading-relaxed mt-1 sm:mt-0">
                {cat.description}
              </div>
              <div className="col-span-12 sm:col-span-3 flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1.5 text-[11px] sm:text-xs font-mono text-muted-foreground sm:justify-end mt-2 sm:mt-0">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
