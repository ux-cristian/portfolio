# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

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

- `public/` — Archivos estáticos (imágenes, multimedia, favicon, etc.).
- `src/` — Código fuente del sitio:
	- `src/components/` — Componentes Astro organizados en `atoms/`, `molecules/` y `organisms/`.
	- `src/pages/` — Páginas del sitio (`index.astro`, rutas de proyecto en `src/pages/project/[id].astro`).
	- `src/data/` — Datos en formato JS (por ejemplo `projects.js`, `works.js`) que alimentan las páginas.
	- `src/assets/` — Iconos y vectores usados en el sitio.
- `astro.config.mjs` — Configuración de Astro.
- `package.json` — Dependencias y scripts.

## Añadir o editar proyectos

Los proyectos mostrados en la web se encuentran en `src/data/projects.js`. Para agregar o editar una entrada:

1. Añade o actualiza el objeto correspondiente en `src/data/projects.js` siguiendo la estructura existente.
2. Sube los recursos multimedia (imágenes/videos) en `public/projects/` o en la carpeta apropiada dentro de `public/`.
3. Verifica en desarrollo con `npm run dev`.

## Despliegue

1. Genera la build de producción: `npm run build`.
2. Sube el contenido de `./dist` a tu proveedor de hosting estático (Vercel, Netlify, GitHub Pages, etc.).

Notas:
- Vercel y Netlify detectan automáticamente proyectos basados en Astro. En Vercel, configura como comando de build `npm run build` y carpeta de salida `dist`.

## Contribuciones y contacto

Si quieres sugerir mejoras o corregir algo, abre un issue o un PR. Para contacto directo, revisa la sección de contacto en la web del portafolio.

---
