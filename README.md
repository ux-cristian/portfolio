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

Algunos archivos y carpetas relevantes:

- `public/` — Archivos estáticos servidos tal cual (CV, favicon, GIFs y vídeos de los proyectos).
- `src/` — Código fuente del sitio:
	- `src/components/` — Componentes Astro organizados en `atoms/`, `molecules/` y `organisms/`.
	- `src/templates/` — `Layout` (HTML base y SEO), `Section` y `Container` (estructura de las secciones).
	- `src/pages/` — Páginas del sitio (`index.astro`, `404.astro` y los casos de estudio en `src/pages/project/[id].astro`).
	- `src/content/projects/` — Un caso de estudio por carpeta (`index.md` + sus imágenes).
	- `src/content.config.ts` — Esquema que valida los campos de cada caso de estudio.
	- `src/data/works.js` — Experiencia laboral.
	- `src/assets/` — Iconos, vectores y fotos.
- `astro.config.mjs` — Configuración de Astro.
- `package.json` — Dependencias y scripts.

## Añadir o editar proyectos

Cada caso de estudio vive en `src/content/projects/<id>/index.md`; el nombre de la carpeta es la URL (`/project/<id>/`). Para añadir uno:

1. Copia una carpeta existente, renómbrala y edita el frontmatter de `index.md`. El campo `order` define la posición en la home.
2. Los textos (`context`, `challenge`, `role`, `solution`, `description` de cada paso y `learnings`) aceptan Markdown: `**negrita**`, `*cursiva*`, `[enlace](https://...)` y listas con `- `. Los enlaces externos se abren solos en otra pestaña.
3. Multimedia de cada paso del proceso (`media`):
	- `type: image` — la imagen va dentro de la carpeta del proyecto (`src: ./imagen.webp`). Astro la optimiza y genera tamaños para móvil.
	- `type: gif` o `type: video` — el archivo va en `public/projects/<id>/` (`src: /projects/<id>/archivo.gif`).
4. Resultados (opcional): añade `results` con una lista de `metric` (p. ej. `"−40%"`) y `description`. Aparece la sección "Resultados" en el caso de estudio y el primer resultado con métrica se destaca en la tarjeta de la home:

	```yaml
	results:
	  - metric: "−40%"
	    description: Tiempo de configuración de una nueva marca.
	```

5. Verifica en desarrollo con `npm run dev`. Si falta un campo o una imagen no existe, la build lo indica con un error.

## Despliegue

1. Genera la build de producción: `npm run build`.
2. Sube el contenido de `./dist` a tu proveedor de hosting estático (Vercel, Netlify, GitHub Pages, etc.).

Notas:
- Vercel y Netlify detectan automáticamente proyectos basados en Astro. En Vercel, configura como comando de build `npm run build` y carpeta de salida `dist`.

## Contribuciones y contacto

Si quieres sugerir mejoras o corregir algo, abre un issue o un PR. Para contacto directo, revisa la sección de contacto en la web del portafolio.

---
