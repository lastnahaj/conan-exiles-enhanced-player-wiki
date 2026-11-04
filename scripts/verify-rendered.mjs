import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, relative, join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../.vitepress/dist/", import.meta.url)));
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = process.env.GITHUB_ACTIONS === "true" && repository ? "/" + repository + "/" : "/";
const failures = [];
function walk(path) {
  return readdirSync(path, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? walk(join(path, entry.name)) : [join(path, entry.name)]);
}
const pages = walk(root).filter(path => path.endsWith(".html") && !path.endsWith("404.html"));
const htmlCache = new Map(pages.map(path => [path, readFileSync(path, "utf8")]));
function decode(value) { return decodeURIComponent(value.replaceAll("&amp;", "&")); }
let links = 0;
for (const path of pages) {
  const html = htmlCache.get(path);
  const name = relative(root, path).replaceAll("\\", "/");
  const route = base + name.replace(/index\.html$/, "").replace(/\.html$/, "");
  const pageUrl = new URL(route, "https://wiki.invalid");
  if ((html.match(/<h1\b/g) || []).length !== 1) failures.push(name + ": expected one main heading.");
  for (const match of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const raw = match[2];
    if (/^(?:https?:|data:|mailto:|tel:|javascript:)/.test(raw)) continue;
    const url = new URL(decode(raw), pageUrl);
    if (!url.pathname.startsWith(base)) { failures.push(name + ": link escapes site base: " + raw); continue; }
    const local = resolve(root, decode(url.pathname.slice(base.length)));
    const candidates = [local, local + ".html", join(local, "index.html")];
    const target = candidates.find(candidate => existsSync(candidate) && extname(candidate));
    if (!target) { failures.push(name + ": missing target " + raw); continue; }
    links++;
    if (url.hash && target.endsWith(".html")) {
      const fragment = decode(url.hash.slice(1));
      const targetHtml = htmlCache.get(target) || readFileSync(target, "utf8");
      const ids = new Set([...targetHtml.matchAll(/\bid="([^"]+)"/g)].map(item => decode(item[1])));
      if (!ids.has(fragment)) failures.push(name + ": missing section " + raw);
    }
  }
}
if (failures.length) {
  console.error([...new Set(failures)].join("\n"));
  process.exitCode = 1;
} else console.log("Rendered verification passed: " + pages.length + " pages, " + links + " local links and assets.");
