import { writeFileSync } from "node:fs";

const itemSource = "https://exee.site/listofitems/ItemTable.json";
const craftableSource = "https://exee.site/listofitems/CraftableItems.json";
const output = new URL("../data/catalogs/exiles-extreme.json", import.meta.url);

const accessorySlots = new Map([
  [43, "Horns"],
  [17, "Wings"],
  [30, "Crowns"],
  [19, "Tails"],
  [45, "Special Trinkets"],
  [46, "Trinkets"],
  [42, "Particles"],
  [35, "Halos"],
  [47, "Shapeshifting"],
  [44, "Body Effects"],
  [25, "Masks"],
  [36, "Hats"],
  [39, "Extras"],
  [40, "Light Sources"],
  [21, "Ears"],
  [29, "Beards"],
  [24, "Eyes"],
  [18, "Collars"],
  [38, "Protection Stones"],
  [49, "Eyewear"],
  [48, "Backpacks"],
]);

const unsafePattern =
  /\b(?:futanari|futas?|genitali\w*|nipple\w*|penis|vagina|dildo|sex toy|nude|naked|bondage|bdsm|butt plug|golden shower|ball gag|womb|no underwear|obedience bench|wooden pony|wall shackles|torture chair|torture wheel|pillory|orgy|orgies|necrophilia|bestiality|pleasure hanging|josh's cock)\b/i;

function extractText(value) {
  if (!value || typeof value !== "string") return "";
  if (!value.includes("NSLOCTEXT")) return repairMojibake(value.trim());
  const match = value.match(/NSLOCTEXT\([^,]*,[^,]*,\s*"((?:[^"\\]|\\.)*)"\)/);
  if (!match) return "";
  return repairMojibake(
    match[1]
    .replaceAll("\\'", "'")
    .replaceAll('\\"', '"')
    .replaceAll("\\n", " ")
    .replaceAll("\\\\", "\\")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim(),
  );
}

function repairMojibake(value) {
  if (!/[Ãâ]/.test(value)) return value;
  const repaired = Buffer.from(value, "latin1").toString("utf8");
  return repaired.includes("�") ? value : repaired;
}

function localDate() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function rarityFor(item) {
  const layers = Array.isArray(item.IconLayers) ? item.IconLayers.join(" ").toLowerCase() : "";
  if (layers.includes("legendary_icon_border")) return "Legendary";
  if (layers.includes("epic_icon_border")) return "Epic";
  if (layers.includes("perfect_icon_border")) return "Perfect";
  if (layers.includes("unique_icon_border")) return "Unique";
  return "Common";
}

function categoryFor(item) {
  const itemClass = String(item.ItemClass ?? "");
  const slot = Number(item.EquipLocation);
  if (itemClass.includes("BuildingItem")) return ["Placeables", "Building and decoration"];
  if (accessorySlots.has(slot)) return ["Accessories", accessorySlots.get(slot)];
  if (itemClass.includes("Warpaint")) return ["Appearance", "Warpaints"];
  if (itemClass.includes("Saddle")) return ["Companions", "Saddles"];
  if (/Shapeshift|Transmog/i.test(itemClass)) return ["Appearance", "Shapeshifting"];
  if (/Weapon|Weap|Katana|Sword|Bow|Shield|Maul|Projectile/i.test(itemClass)) {
    return ["Weapons", "Weapons and combat items"];
  }
  const armorType = Number(item.ArmorType);
  if (armorType === 10) return ["Armor", "Light armor"];
  if (armorType === 75) return ["Armor", "Medium armor"];
  if (armorType === 1000) return ["Armor", "Heavy armor"];
  return ["Utility", "Other craftable items"];
}

const [itemResponse, craftableResponse] = await Promise.all([
  fetch(itemSource),
  fetch(craftableSource),
]);
if (!itemResponse.ok || !craftableResponse.ok) {
  throw new Error("The official ExilesExtreme catalog could not be downloaded.");
}

const rawItems = JSON.parse((await itemResponse.text()).replace(/^\uFEFF/, ""));
const craftableIds = new Set((await craftableResponse.json()).map(String));
const items = rawItems
  .filter((item) => craftableIds.has(String(item.RowName)) && item.bHidden !== true)
  .map((item) => {
    const name = extractText(item.Name);
    const summary = extractText(item.ShortDesc);
    const details = extractText(item.LongDesc);
    const [category, subcategory] = categoryFor(item);
    return {
      name,
      category,
      subcategory,
      rarity: rarityFor(item),
      ...(summary && summary.toLowerCase() !== name.toLowerCase() ? { summary } : {}),
      ...(details && details.toLowerCase() !== summary.toLowerCase() ? { details } : {}),
    };
  })
  .filter((item) => item.name && !unsafePattern.test(`${item.name} ${item.summary ?? ""} ${item.details ?? ""}`))
  .sort((a, b) => a.name.localeCompare(b.name));

const categories = [...new Set(items.map((item) => item.category))].sort();
const catalog = {
  schema_version: 1,
  source_mod: "ExilesExtreme - v2.0.7",
  edition_scope: "enhanced-current-catalog",
  imported_at: localDate(),
  scope:
    "Publicly craftable, non-hidden, player-safe entries from the official catalog. Internal identifiers and adult-only content are excluded.",
  categories,
  item_count: items.length,
  items,
};

writeFileSync(output, `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`Imported ${items.length} player-safe ExilesExtreme catalog entries.`);
