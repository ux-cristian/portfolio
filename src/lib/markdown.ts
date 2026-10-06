import { Marked } from "marked";

const marked = new Marked({
  hooks: {
    // Los enlaces externos se abren en otra pestaña.
    postprocess: (html) =>
      html.replace(/<a href="(https?:|mailto:)/g, '<a target="_blank" rel="noopener noreferrer" href="$1'),
  },
});

export function renderMarkdown(source: string): string {
  return marked.parse(source, { async: false });
}
