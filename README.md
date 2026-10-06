# Portafolio de Cristian Narváez

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
# Portafolio — Cristian Narváez

Este repositorio contiene el sitio estático del portafolio personal construido con Astro y TailwindCSS. Incluye la estructura del sitio, los componentes reutilizables y los datos de los proyectos que se muestran en la web.

## Descripción

Proyecto: sitio web tipo portafolio para mostrar proyectos, experiencia y contacto.

- Framework: Astro
- Estilos: Tailwind CSS
- Contenido estático y multimedia en `public/` y `src/assets/`

## Requisitos

- Node.js (recomendado >= 18)
- npm o pnpm como gestor de paquetes

## Instalación y desarrollo

Clona el repositorio, instala dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

Por defecto Astro levantará el servidor de desarrollo y lo hará accesible en `http://localhost:4321` (u otro puerto si está ocupado).

## Scripts disponibles

Los scripts definidos en `package.json` son:

- `npm run dev` — Inicia el servidor de desarrollo con Astro.
- `npm run build` — Genera la versión de producción en `./dist`.
- `npm run preview` — Sirve la carpeta de build para previsualizar el sitio.
- `npm run astro` — Ejecuta comandos de la CLI de Astro (ej.: `npm run astro -- --help`).

## Estructura principal del proyecto

- `src/config/site.ts` — Correo, redes, CV, enlace de agenda (`bookingUrl`) y logos de clientes.
- `src/i18n/` — Textos de la interfaz: `es.ts` (español) y `en.ts` (inglés), con la misma estructura.
- `src/content/projects/<id>/` — Un caso de estudio por carpeta: `es.md`, `en.md` y sus imágenes.
- `src/data/experience.ts` — Experiencia laboral en ambos idiomas.
- `src/views/` — Las páginas completas (`HomeView`, `ProjectView`); `src/pages/` solo define las rutas de cada idioma.
- `src/components/` — Componentes en `atoms/`, `molecules/` y `organisms/`.
- `src/templates/` — `Layout` (HTML base, SEO, tema y transiciones), `Section` y `Container`.
- `src/styles/global.css` — Sistema visual: tokens de color (azul rey), temas claro/oscuro, superficies *liquid glass* y animaciones.
- `src/scripts/app.ts` — Interacción: tema, menú móvil, header y barra de lectura.
- `public/` — Archivos servidos tal cual (CV, logos de clientes, GIFs y vídeos de proyectos).

## Idiomas y tema

- Español en `/` e inglés en `/en/`. El selector de idioma del menú lleva a la misma página en el otro idioma.
- Para cambiar un texto de la interfaz, edítalo en `src/i18n/es.ts` y en `src/i18n/en.ts`.
- El sitio arranca en modo oscuro; el botón del menú alterna a claro y la preferencia se guarda en el navegador.

## Añadir o editar proyectos

Cada caso de estudio vive en `src/content/projects/<id>/`, con un archivo por idioma (`es.md` y `en.md`). El nombre de la carpeta es la URL (`/project/<id>/` y `/en/project/<id>/`). Para añadir uno:

1. Copia una carpeta existente, renómbrala y edita el frontmatter de `es.md` y `en.md`. El campo `order` define la posición en la home (el 1 aparece destacado).
2. Los textos (`context`, `challenge`, `role`, `solution`, `description` de cada paso, `results` y `learnings`) aceptan Markdown: `**negrita**`, `*cursiva*`, `[enlace](https://...)` y listas con `- `. Si un texto contiene `: ` (dos puntos y espacio), ponlo entre comillas.
3. Multimedia de cada paso del proceso (`media`):
	- `type: image` — la imagen va dentro de la carpeta del proyecto (`src: ./imagen.webp`). Astro la optimiza y genera tamaños para móvil.
	- `type: gif` o `type: video` — el archivo va en `public/projects/<id>/` (`src: /projects/<id>/archivo.gif`).
4. Resultados (opcional): una lista de `metric` y `description`. Aparece la sección "Resultados" y el primer resultado con métrica se destaca en la tarjeta de la home:

	```yaml
	results:
	  - metric: "−40%"
	    description: tiempo para lanzar una marca nueva.
	```

5. Verifica con `npm run dev`. Si falta un campo o una imagen no existe, la build lo indica con un error.

## Despliegue

1. Genera la build de producción: `npm run build`.
2. Sube el contenido de `./dist` a tu proveedor de hosting estático (Vercel, Netlify, GitHub Pages, etc.).

Notas:
- Vercel y Netlify detectan automáticamente proyectos basados en Astro. En Vercel, configura como comando de build `npm run build` y carpeta de salida `dist`.

## Contribuciones y contacto

Si quieres sugerir mejoras o corregir algo, abre un issue o un PR. Para contacto directo, revisa la sección de contacto en la web del portafolio.

---
