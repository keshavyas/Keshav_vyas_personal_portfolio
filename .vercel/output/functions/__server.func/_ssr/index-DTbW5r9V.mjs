import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { G as Github, L as Linkedin, M as Mail, A as ArrowDown, a as ArrowUpRight } from "../_libs/lucide-react.mjs";
const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#hero", className: "flex items-center gap-2 group shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground/80 transition-all duration-500 group-hover:bg-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-foreground", children: "Keshav Vyas" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            className: "link-underline text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors duration-500",
            children: l.label
          },
          l.href
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contact",
            className: "group inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-foreground shrink-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "link-underline hidden xs:inline sm:inline", children: "Get in touch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "link-underline xs:hidden sm:hidden", children: "Contact" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform duration-500 group-hover:translate-x-1", children: "→" })
            ]
          }
        )
      ] })
    }
  );
}
const portrait = "/assets/keshav_pic_1-CXzEVo2Z.jpeg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative min-h-screen w-full overflow-hidden grain flex flex-col",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto max-w-7xl px-5 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-16 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 sm:mt-12 grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 order-1 lg:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-40 sm:w-52 md:w-60 lg:w-full lg:max-w-sm mx-auto lg:mx-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-sm border border-border group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: portrait,
                    alt: "Portrait of Keshav Vyas",
                    width: 1024,
                    height: 1280,
                    className: "h-full w-full object-cover grayscale-[20%] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 sm:mt-4 flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Indore, IN ⟶ Remote" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Indore, IN ⟶ Remote" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 order-2 lg:order-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6 text-center lg:text-left", children: "Hi, I'm —" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[clamp(2.5rem,11vw,7rem)] font-light leading-[0.95] tracking-[-0.04em] text-foreground text-center lg:text-left", children: [
                "Keshav",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-muted-foreground", children: "Vyas" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 sm:mt-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left", children: [
                "A full-stack software engineer crafting considered web platforms, mobile apps, and machine-learning systems. I work across",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " MERN stack" }),
                ",",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " Fastify" }),
                ",",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " PostgreSQL" }),
                ",",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " MongoDB" }),
                ", and applied",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " AI/ML" }),
                ". I also build with",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " Python" }),
                ", ship",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " app development" }),
                ", train",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " ML models" }),
                ", and handle",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " DevOps" }),
                " — building things that feel quiet, fast, and well-made."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#projects",
                    className: "group inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-foreground text-background text-[11px] sm:text-xs uppercase tracking-[0.18em] font-medium hover:bg-foreground/90 transition-colors duration-500",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Work" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform duration-500 group-hover:translate-x-1", children: "→" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "link-underline text-[11px] sm:text-xs uppercase tracking-[0.18em] text-foreground",
                    children: "Get in touch"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 sm:mt-auto pt-10 sm:pt-16 flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcon, { href: "https://github.com/keshavyas", label: "GitHub", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcon, { href: "https://www.linkedin.com/in/keshav-vyas-010011311/", label: "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcon, { href: "mailto:keshavdeepakvyas@gmail.com", label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scroll" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-3 w-3 animate-pulse" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function SocialIcon({
  href,
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": label,
      className: "h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-500",
      children
    }
  );
}
const stats = [
  { label: "Years of practice", value: "01" },
  { label: "Projects shipped", value: "15" },
  { label: "ML models in prod", value: "10" },
  { label: "Apps deployed", value: "8" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-20 sm:py-32 md:py-40 px-5 sm:px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10 sm:mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 sm:w-10 bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "01 — About" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.08] text-foreground", children: [
          "I build software with the patience of a craftsperson and the",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-muted-foreground", children: " rigour " }),
          "of an engineer."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 sm:mt-10 space-y-5 sm:space-y-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For the past one year I've partnered with founders, agencies, and product teams to ship considered digital products — from bespoke marketing sites to high-throughput APIs and machine learning systems running in production." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "My practice spans the full stack: React and TypeScript on the surface, Node, Fastify, MongoDB and PostgreSQL underneath, with React Native and applied AI/ML where the work calls for it." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-px bg-border border border-border", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-background p-5 sm:p-8 hover-lift cursor-default",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground leading-tight", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground", children: [
              s.value,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "+" })
            ] })
          ]
        },
        s.label
      )) }) })
    ] })
  ] }) });
}
const categories = [
  {
    no: "01",
    title: "Frontend & Web",
    description: "Production interfaces with attention to typography, motion, and accessibility.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js", "Framer Motion"]
  },
  {
    no: "02",
    title: "Backend & APIs",
    description: "Resilient services that scale — from monoliths to event-driven architectures.",
    skills: ["Node.js", "Fastify", "Express", "GraphQL", "REST", "WebSockets"]
  },
  {
    no: "03",
    title: "Databases",
    description: "Considered data models, indexing, and query design for both SQL and document stores.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose"]
  },
  {
    no: "04",
    title: "Mobile",
    description: "Cross-platform apps that feel native — built with care for performance and offline use.",
    skills: ["React Native", "Expo", "iOS", "Android", "PWA"]
  },
  {
    no: "05",
    title: "AI / ML",
    description: "Applied machine learning, RAG pipelines, and LLM tooling for real product surfaces.",
    skills: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Hugging Face"]
  },
  {
    no: "06",
    title: "Infrastructure",
    description: "Pragmatic DevOps — containers, CI/CD, observability, and predictable deploys.",
    skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux", "Nginx"]
  }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "relative py-20 sm:py-32 md:py-40 px-5 sm:px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10 sm:mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 sm:w-10 bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "02 — Expertise" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mb-12 sm:mb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.08] text-foreground", children: [
      "A complete toolkit, applied with",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-muted-foreground", children: " intention" }),
      "."
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group grid grid-cols-12 gap-3 sm:gap-6 py-7 sm:py-10 border-b border-border hover-fade opacity-80 hover:opacity-100",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 sm:col-span-1 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground", children: cat.no }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 sm:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-foreground transition-transform duration-500 sm:group-hover:translate-x-2", children: cat.title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 sm:col-span-4 text-sm text-muted-foreground leading-relaxed mt-1 sm:mt-0", children: cat.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 sm:col-span-3 flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1.5 text-[11px] sm:text-xs font-mono text-muted-foreground sm:justify-end mt-2 sm:mt-0", children: cat.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "hover:text-foreground transition-colors duration-300",
              children: s
            },
            s
          )) })
        ]
      },
      cat.title
    )) })
  ] }) });
}
const projects = [
  {
    no: "01",
    title: "Law-Firm website",
    tag: "Web Development",
    year: "2026",
    description: "A website for a law firm built with React and Tailwind CSS with AI integration for legal research and writing , LLM , Ollama , Hugging face ai models. ",
    tech: ["React", "Node", "MongoDB", "PyTorch", "LangChain"]
    // href: "13.61.174.37",
  },
  {
    no: "02",
    title: "Fashion Search Engine",
    tag: "Machine Learning",
    year: " 2025-2026",
    description: "Built AI-powered MERN fashion search engine using personal LLM, smart recommendations, ML-based 3D body mapping, body-dimension fitting, and full-body virtual cloth try-on, delivering personalized, interactive shopping experience.",
    tech: ["Fastify", "PostgreSQL", "Redis", "Docker", "Stripe"]
    // href: "https://example.com",
  },
  {
    no: "03",
    title: "Pulse",
    tag: "Mobile / Health",
    year: "2025",
    description: "An offline-first fitness companion with HealthKit integration and on-device ML for personalised workout suggestions.",
    tech: ["React Native", "Expo", "MongoDB", "TensorFlow Lite"]
    // href: "https://example.com",
  },
  {
    no: "04",
    title: "Vision Studio",
    tag: "AI / Computer Vision",
    year: "2025",
    description: "End-to-end computer vision platform — annotate, train, and deploy object detection models with one click. YOLOv8 powered.",
    tech: ["Python", "PyTorch", "FastAPI", "Next.js", "AWS"]
    // href: "https://example.com",
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative py-20 sm:py-32 md:py-40 px-5 sm:px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10 sm:mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 sm:w-10 bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "03 — Selected work" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12 sm:mb-20 gap-4 sm:gap-6 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.08] text-foreground max-w-2xl", children: [
        "A short list of recent",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-muted-foreground", children: " collaborations" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "2024 — 2026" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border", children: p.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: p.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group block py-7 sm:py-10 transition-colors duration-500 hover:bg-card/40",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectRow, { p })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group block py-7 sm:py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectRow, { p }) }) }, p.no)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 sm:mt-14 text-sm text-muted-foreground max-w-2xl", children: [
      "And many more projects are available on my",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/keshavyas",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "link-underline text-foreground",
          children: "GitHub"
        }
      ),
      "."
    ] })
  ] }) });
}
function ProjectRow({ p }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-3 sm:gap-6 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 sm:col-span-1 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground pt-2", children: p.no }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-8 sm:col-span-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl md:text-4xl font-light tracking-[-0.02em] text-foreground transition-transform duration-500 sm:group-hover:translate-x-3", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
        p.tag,
        " · ",
        p.year
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 sm:hidden flex justify-end items-start pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-500 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 sm:col-span-5 text-sm text-muted-foreground leading-relaxed mt-2 sm:mt-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: p.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 sm:mt-4 flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs font-mono", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t }, t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:flex col-span-2 sm:justify-end items-start pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-500 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) }) })
  ] });
}
const socials = [
  { icon: Github, label: "GitHub", handle: "github.com/keshavyas", href: "https://github.com/keshavyas" },
  { icon: Linkedin, label: "LinkedIn", handle: "linkedin.com/in/keshav-vyas-010011311", href: "https://www.linkedin.com/in/keshav-vyas-010011311/" },
  { icon: Mail, label: "Email", handle: "keshavdeepakvyas@gmail.com", href: "mailto:keshavdeepakvyas@gmail.com" }
];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-20 sm:py-32 md:py-40 px-5 sm:px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10 sm:mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 sm:w-10 bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "04 — Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.03em] leading-[1] text-foreground", children: [
          "Have a project in",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-muted-foreground", children: "mind" }),
          "? Let's",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "talk."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "mailto:keshavdeepakvyas@gmail.com",
            className: "group mt-8 sm:mt-12 inline-flex items-center gap-3 sm:gap-4 text-lg sm:text-2xl md:text-3xl font-light tracking-tight text-foreground break-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "link-underline", children: "keshavdeepakvyas@gmail.com" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform duration-500 group-hover:rotate-45" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5 sm:mb-6", children: "Elsewhere" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "border-t border-border", children: socials.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: s.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group flex items-center justify-between py-4 sm:py-5 border-b border-border transition-colors duration-500 gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 sm:gap-4 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-500 group-hover:text-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm sm:text-base text-foreground", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-xs font-mono text-muted-foreground truncate", children: s.handle })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-all duration-500 group-hover:text-foreground group-hover:rotate-45" })
            ]
          }
        ) }, s.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 sm:mt-32 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " — Keshav Vyas"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Designed & built with care" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  Index as component
};
