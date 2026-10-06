// Interacción del sitio. Con <ClientRouter /> las páginas se cambian sin recargar,
// así que los listeners globales se registran una sola vez y lo que depende del
// DOM de cada página se inicializa en "astro:page-load".

// --- Tema -------------------------------------------------------------------
function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  const apply = () => {
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  // Transición suave entre temas donde el navegador la soporta
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("startViewTransition" in document && !reduceMotion) {
    document.startViewTransition(apply);
  } else {
    apply();
  }
}

// --- Menú móvil ---------------------------------------------------------------
function setMenuOpen(open: boolean) {
  const nav = document.getElementById("main-nav");
  const toggle = document.getElementById("menu-toggle");
  if (!nav || !toggle) return;
  nav.toggleAttribute("data-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", (open ? toggle.dataset.labelClose : toggle.dataset.labelOpen) ?? "");
}

const isMenuOpen = () => document.getElementById("main-nav")?.hasAttribute("data-open") ?? false;

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;

  if (target.closest("[data-theme-toggle]")) {
    toggleTheme();
    return;
  }

  if (target.closest("#menu-toggle")) {
    setMenuOpen(!isMenuOpen());
    return;
  }

  if (target.closest("#back-to-top")) {
    window.scrollTo({ top: 0 });
    return;
  }

  // Cerrar el menú al elegir una opción o al hacer clic fuera
  if (isMenuOpen() && (target.closest("#main-menu a") || !target.closest("#main-nav"))) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isMenuOpen()) {
    setMenuOpen(false);
    document.getElementById("menu-toggle")?.focus();
  }
});

// --- Scroll: header, volver arriba, barra de lectura ---------------------------
let lastScroll = 0;
let ticking = false;

function onScroll() {
  const current = window.scrollY;
  const header = document.getElementById("site-header");

  if (header) {
    header.classList.toggle("header-hidden", !isMenuOpen() && current > lastScroll && current > 120);
    header.toggleAttribute("data-scrolled", current > 16);
  }

  document.getElementById("back-to-top")?.classList.toggle("show", current > 600);

  const progress = document.getElementById("reading-progress");
  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(current / max, 1) : 0})`;
  }

  lastScroll = Math.max(0, current);
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  },
  { passive: true },
);

// --- Cada página ---------------------------------------------------------------
document.addEventListener("astro:page-load", () => {
  setMenuOpen(false);
  lastScroll = window.scrollY;
  onScroll();
});
