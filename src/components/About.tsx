const stats = [
  { label: "Years of practice", value: "01" },
  { label: "Projects shipped", value: "15" },
  { label: "ML models in prod", value: "10" },
  { label: "Apps deployed", value: "8" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 md:py-40 px-5 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10 sm:mb-16">
          <span className="h-px w-8 sm:w-10 bg-border" />
          <span>01 — About</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.08] text-foreground">
              I build software with the patience of a craftsperson and the
              <span className="font-serif text-muted-foreground"> rigour </span>
              of an engineer.
            </h2>

            <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                For the past one year I've partnered with founders, agencies,
                and product teams to ship considered digital products — from
                bespoke marketing sites to high-throughput APIs and machine
                learning systems running in production.
              </p>
              <p>
                My practice spans the full stack: React and TypeScript on the
                surface, Node, Fastify, MongoDB and PostgreSQL underneath, with
                React Native and applied AI/ML where the work calls for it.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-border border border-border">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-background p-5 sm:p-8 hover-lift cursor-default"
                >
                  <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground leading-tight">
                    {s.label}
                  </div>
                  <div className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
                    {s.value}
                    <span className="text-muted-foreground">+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
