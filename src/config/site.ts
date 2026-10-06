// Datos de contacto y enlaces del sitio. Cambia aquí y se actualiza en todas partes.
export const site = {
  name: "Cristian Narváez",
  url: "https://uxcristian.site",
  email: "cristian08nc@gmail.com",
  linkedin: "https://www.linkedin.com/in/ux-cristian/",
  behance: "https://www.behance.net/cristianarvez",
  github: "https://github.com/ux-cristian",
  cv: "/cv_cristian_narvaez.pdf",
  // Enlace de agenda (Cal.com, Calendly…). Si lo rellenas, el CTA principal
  // pasa a ser "Agenda una llamada". Ej.: "https://cal.com/ux-cristian/30min"
  bookingUrl: "",
};

// Empresas con las que he trabajado. `logo` es un SVG en public/logos/ que se
// pinta en un solo color para adaptarse al tema; sin logo se muestra el nombre.
export const clients: { name: string; url: string; logo?: string; ratio?: number }[] = [
  { name: "Eccocar", url: "https://eccocar.com", logo: "/logos/eccocar.svg", ratio: 1249 / 403 },
  { name: "Atix Digital", url: "https://atixdigital.com/es/", logo: "/logos/atix.svg", ratio: 127 / 49 },
  { name: "Reval", url: "https://www.reval.com.co/" },
];
