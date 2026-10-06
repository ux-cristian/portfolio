import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n";

export type Project = CollectionEntry<"projects"> & { slug: string };

/** Casos de estudio de un idioma, ordenados por `order`. `slug` es el nombre de la carpeta. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const entries = await getCollection("projects", ({ id }) => id.endsWith(`/${lang}`));
  return entries
    .map((entry) => ({ ...entry, slug: entry.id.split("/")[0] }))
    .sort((a, b) => a.data.order - b.data.order);
}

/** Rutas estáticas de los casos de estudio de un idioma. */
export async function getProjectPaths(lang: Lang) {
  const projects = await getProjects(lang);
  return projects.map((project) => ({
    params: { id: project.slug },
    props: { project, otherProjects: projects.filter((p) => p.slug !== project.slug) },
  }));
}
