import type { Dictionary } from "./es";

// English UI copy. Must have exactly the same shape as es.ts.
export const en: Dictionary = {
  meta: {
    title: "Cristian Narváez — Freelance UX Designer",
    description:
      "Freelance UX design for startups and product teams: usability audits, product design and redesign, design systems and developer-ready prototypes.",
    locale: "en_US",
    imageAlt: "Profile photo of Cristian Narváez",
  },

  a11y: {
    skip: "Skip to content",
    newTab: "(opens in a new tab)",
    backToTop: "Back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle light and dark mode",
    home: "Cristian Narváez, go to home page",
    mainNav: "Main",
  },

  nav: {
    services: "Services",
    projects: "Work",
    process: "Process",
    about: "About",
    cta: "Let's talk",
    switchLang: "Español",
    switchLangLabel: "Ver esta página en español",
  },

  hero: {
    badge: "Available for freelance projects",
    title: "I design clear products, ready to build.",
    lead: "UX Designer and Systems Engineer. I help startups and product teams create experiences that are easy to use and easy to build.",
    primaryCta: "Let's talk about your project",
    secondaryCta: "See case studies",
    role: "UX Designer · Systems Engineer",
    photoAlt: "Photo of Cristian Narváez",
    chips: ["Research", "Design systems", "Developer-ready"],
    stats: [
      { value: "2+ years", label: "designing products" },
      { value: "3", label: "product companies" },
      { value: "3", label: "documented case studies" },
    ],
  },

  clients: {
    title: "I've designed alongside the teams at",
  },

  services: {
    eyebrow: "Services",
    title: "How I can help",
    lead:
      "Design with a process: I research before I sketch, validate before I deliver, and document so developers never have to guess.",
    items: [
      {
        icon: "audit",
        title: "UX audit",
        description:
          "I review your product with usability heuristics and usage data to find the friction points that are costing you users, and prioritize them by impact.",
        deliverables: ["Prioritized report", "Quick wins", "Roadmap"],
      },
      {
        icon: "product",
        title: "Product design & redesign",
        description:
          "From research to prototype: I understand your users, define the flows, design the interface and validate it before it reaches code.",
        deliverables: ["Flows", "Wireframes", "UI", "Prototype"],
      },
      {
        icon: "system",
        title: "Design systems",
        description:
          "Components, tokens and documentation in Figma so your product stays consistent and scales to new screens, brands or themes without redoing work.",
        deliverables: ["Tokens", "Components", "Documentation"],
      },
      {
        icon: "handoff",
        title: "Developer handoff",
        description:
          "As a Systems Engineer I speak your tech team's language: tidy files, clear specs and support throughout implementation.",
        deliverables: ["Specs", "Auto layout", "Support"],
      },
    ],
  },

  projects: {
    eyebrow: "Case studies",
    title: "Real problems, thoughtful decisions",
    lead: "How I approach a project end to end: the context, the process, the results and what I learned.",
    view: "View case study",
    coverAlt: "Cover of the project",
  },

  process: {
    eyebrow: "Process",
    title: "How we work together",
    lead: "A clear process, so you always know where your project stands.",
    steps: [
      {
        title: "Discovery",
        description:
          "We talk about your business, your users and the problem. Then I send you a proposal with scope, timeline and budget.",
      },
      {
        title: "Research & definition",
        description:
          "I analyze your product, your users and your competitors so we can decide together what to solve first.",
      },
      {
        title: "Design & iteration",
        description:
          "Wireframes, interface and prototype. We review every stage and I refine based on your feedback and your users'.",
      },
      {
        title: "Delivery & support",
        description:
          "A well-organized Figma file, documentation and support for your development team during implementation.",
      },
    ],
  },

  about: {
    eyebrow: "About me",
    title: "A designer with an engineer's mindset",
    paragraphs: [
      "I'm a Systems Engineer with more than two years of experience designing digital products: mobility platforms, apps for distributing subsidies and AI-powered data extraction software.",
      "That dual background is what sets me apart: I understand technical constraints from the very first sketch, so what I design can actually be built and your team gets files they don't have to interpret.",
      "I consider myself a lifelong learner: I read, listen to podcasts and talk to people with genuine curiosity. That's how I learned to play the guitar, and how I keep learning to design.",
    ],
    photoAlt: "Cristian Narváez smiling outdoors by a wetland",
    skillsTitle: "Skills",
    skills: [
      "Design thinking",
      "User research",
      "User flows",
      "Wireframes",
      "Prototyping",
      "Design systems",
      "UI kits",
      "Figma",
      "Scrum",
    ],
    experienceTitle: "Experience",
    cv: "Download CV",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Before we start",
    items: [
      {
        q: "What kind of clients do you work with?",
        a: "Startups, small businesses and product teams that need to design something new or improve an existing product. I work remotely with teams in any country.",
      },
      {
        q: "How much does a project cost?",
        a: "It depends on the scope. After a first conversation I send you a proposal with deliverables, timeline and budget, so you know exactly what you'll get.",
      },
      {
        q: "What do I get at the end?",
        a: "An organized Figma file with components, an interactive prototype and the documentation your team needs to build it. If the project includes research, you also get the findings and the prioritization.",
      },
      {
        q: "Can you work with my development team?",
        a: "Yes. As a Systems Engineer I adapt to your team's tech stack and support the implementation so the final product matches the design.",
      },
      {
        q: "Which tools do you use?",
        a: "Figma for design, prototypes and design systems; FigJam and Notion for research and documentation; Hotjar to analyze real user behavior.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Got a product that needs to get better?",
    lead: "Tell me what you're working on and I'll get back to you with next steps.",
    book: "Book a call",
    email: "Email me",
    emailSubject: "UX project",
    or: "or write to",
  },

  footer: {
    tagline: "Freelance UX design. Made with care in Colombia.",
  },

  project: {
    back: "All projects",
    client: "Client",
    date: "Date",
    category: "Type",
    context: "Context",
    challenge: "The challenge",
    role: "My role",
    solution: "The solution",
    process: "Process",
    results: "Results",
    learnings: "Learnings",
    others: "More case studies",
    empty: "No process steps available for this project.",
    ctaTitle: "Want results like these for your product?",
    ctaLead: "Tell me what you're building and let's see how I can help.",
  },

  notFound: {
    title: "This page doesn't exist",
    text: "The link may be broken or the page may have moved.",
    back: "Back to home",
  },
};
