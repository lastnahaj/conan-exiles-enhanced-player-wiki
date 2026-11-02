const base = process.argv[2];
if (!base || !base.startsWith("https://")) throw new Error("Provide the deployed HTTPS site URL.");
const root = base.replace(/\/$/, "") + "/";
const checks = [
  ["", "wiki-home__hero"],
  ["guides/", "directory-filters"],
  ["magic/domain-magic", "article-intro"],
  ["followers/wov-valkyrie-stats", "valkyrie-stat-gallery"],
];
async function check(path, marker) {
  const url = new URL(path, root);
  const response = await fetch(url, { signal: AbortSignal.timeout(20000), cache: "no-store" });
  if (!response.ok) throw new Error(url + " returned " + response.status);
  const html = await response.text();
  if (!html.includes(marker)) throw new Error(url + " is missing expected content.");
  const assets = [...html.matchAll(/(?:src|href)="([^"]+\.(?:css|jpg|png)(?:\?[^"]*)?)"/g)]
    .map(match => new URL(match[1], url).href).filter(asset => asset.startsWith(root));
  for (const asset of new Set(assets)) {
    const result = await fetch(asset, { method: "HEAD", signal: AbortSignal.timeout(15000) });
    if (!result.ok) throw new Error("Missing published asset: " + asset);
  }
  console.log("Verified " + url + " and " + new Set(assets).size + " assets.");
}
for (const [path, marker] of checks) {
  let failure;
  for (let attempt = 0; attempt < 4; attempt++) {
    try { await check(path, marker); failure = null; break; }
    catch (error) { failure = error; if (attempt < 3) await new Promise(resolve => setTimeout(resolve, 10000)); }
  }
  if (failure) throw failure;
}
