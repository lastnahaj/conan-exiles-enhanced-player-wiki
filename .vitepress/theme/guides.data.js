import { createContentLoader } from "vitepress";

export default createContentLoader("**/*.md", {
  transform(pages) {
    return pages
      .filter(page => page.frontmatter.title && page.url !== "/guides/" && page.url !== "/")
      .map(page => ({
        title: page.frontmatter.title,
        description: page.frontmatter.description || "",
        url: page.url,
        section: page.url.split("/").filter(Boolean)[0] || "home",
        legacy: /Legacy/.test(page.frontmatter.title),
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  },
});
