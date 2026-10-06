import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Cada caso de estudio vive en src/content/projects/<id>/index.md junto a sus imágenes.
// Los campos de texto aceptan Markdown (negritas, enlaces, listas).
const projects = defineCollection({
  loader: glob({
    pattern: "*/index.md",
    base: "./src/content/projects",
    generateId: ({ entry }) => entry.split("/")[0],
  }),
  schema: ({ image }) => {
    // Imágenes estáticas: archivo relativo (./foto.webp), optimizado por Astro.
    // GIFs y vídeos: ruta en public/ (/projects/...), se sirven tal cual.
    const media = z.discriminatedUnion("type", [
      z.object({ type: z.literal("image"), src: image() }),
      z.object({ type: z.literal("gif"), src: z.string().startsWith("/") }),
      z.object({ type: z.literal("video"), src: z.string().startsWith("/") }),
    ]);

    return z.object({
      order: z.number(),
      title: z.string(),
      category: z.string(),
      description: z.string(),
      cover: image(),
      client: z.string(),
      date: z.string(),
      context: z.string(),
      challenge: z.string(),
      role: z.string(),
      solution: z.string(),
      process: z.array(
        z.object({
          title: z.string(),
          media,
          description: z.string(),
        }),
      ),
      // Opcional. Si existe, se muestra la sección "Resultados" y el primer
      // resultado con métrica se destaca en la tarjeta del proyecto.
      results: z
        .array(
          z.object({
            metric: z.string().optional(), // p. ej. "−40%", "3×", "+120"
            description: z.string(),
          }),
        )
        .optional(),
      learnings: z.array(z.string()),
    });
  },
});

export const collections = { projects };
