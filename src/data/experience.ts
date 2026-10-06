import type { Lang } from "../i18n";

type Localized = Record<Lang, string>;

export const experience: {
  company: string;
  url: string;
  title: Localized;
  start: Localized;
  end: Localized;
  description: Localized;
}[] = [
  {
    company: "Eccocar",
    url: "https://eccocar.com",
    title: { es: "Diseñador UX/UI", en: "UX/UI Designer" },
    start: { es: "Jun 2024", en: "Jun 2024" },
    end: { es: "Feb 2025", en: "Feb 2025" },
    description: {
      es: "Diseñé productos digitales de movilidad para empresas líderes del sector turístico. Prototipos en Figma con tokens, autolayout y documentación adaptada a Scrum.",
      en: "Designed digital mobility products for leading companies in the travel industry. Figma prototypes with tokens, auto layout and documentation adapted to Scrum.",
    },
  },
  {
    company: "Reval SAS",
    url: "https://www.reval.com.co/",
    title: { es: "Diseñador UX/UI", en: "UX/UI Designer" },
    start: { es: "Jun 2023", en: "Jun 2023" },
    end: { es: "Abr 2024", en: "Apr 2024" },
    description: {
      es: "Junto a otros diseñadores ideamos una aplicación móvil para la entrega de subsidios. En proyectos internos documenté los diseños en Figma y definí un UI Kit para facilitar su implementación.",
      en: "Together with other designers, we created a mobile app for distributing subsidies. On internal projects I documented designs in Figma and defined a UI kit to ease implementation.",
    },
  },
  {
    company: "Atix Digital",
    url: "https://atixdigital.com/es/",
    title: { es: "Diseñador UX/UI", en: "UX/UI Designer" },
    start: { es: "Ene 2023", en: "Jan 2023" },
    end: { es: "May 2023", en: "May 2023" },
    description: {
      es: "Creé un UI Kit en Figma para la aplicación Notery y diseñé presentaciones comerciales. Como freelance, en 2024 rediseñé la UX de la aplicación SEIZ para un cliente.",
      en: "Built a Figma UI kit for the Notery app and designed sales presentations. As a freelancer in 2024, I redesigned the UX of the SEIZ app for a client.",
    },
  },
];
