import { createContentLoader } from "vitepress";

export default createContentLoader("**/*.md", {
  includeSrc: true,
  render: true,
  transform(pages) {
    return pages
      .filter(page => page.frontmatter.title && page.url !== "/guides/" && page.url !== "/")
      .map(page => ({
        title: page.frontmatter.title,
        description: page.frontmatter.description || "",
        url: page.url,
        section: page.url.split("/").filter(Boolean)[0] || "home",
        legacy: /Legacy/.test(page.frontmatter.title),
        minutes: Math.max(1, Math.ceil((page.src || "").split(/\s+/).length / 220)),
        headings: [...(page.html || "").matchAll(/<h2 id="([^"]+)"[^>]*>(.*?)<a class="header-anchor"/g)]
          .map(match => ({ anchor: match[1], text: match[2].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim() }))
          .filter(heading => !/workshop|sources/i.test(heading.text)),
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  },
});
