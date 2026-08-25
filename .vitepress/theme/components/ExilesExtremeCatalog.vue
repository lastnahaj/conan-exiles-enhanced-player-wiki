<script setup>
import { computed, ref, watch } from "vue";
import catalog from "../../../data/catalogs/exiles-extreme.json";

const query = ref("");
const category = ref("All");
const visibleCount = ref(40);
const categories = ["All", ...catalog.categories];

const filteredItems = computed(() => {
  const needle = query.value.trim().toLowerCase();
  return catalog.items.filter((item) => {
    const matchesCategory = category.value === "All" || item.category === category.value;
    if (!matchesCategory) return false;
    if (!needle) return true;
    return [item.name, item.category, item.subcategory, item.rarity, item.summary, item.details]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(needle);
  });
});

const visibleItems = computed(() => filteredItems.value.slice(0, visibleCount.value));
watch([query, category], () => {
  visibleCount.value = 40;
});
</script>

<template>
  <section class="catalog-browser" aria-label="ExilesExtreme player catalog">
    <div class="catalog-browser__controls">
      <label>
        <span>Search catalog</span>
        <input v-model="query" type="search" placeholder="Search names and descriptions" />
      </label>
      <label>
        <span>Category</span>
        <select v-model="category">
          <option v-for="option in categories" :key="option" :value="option">{{ option }}</option>
        </select>
      </label>
    </div>

    <p class="catalog-browser__count">
      Showing {{ Math.min(visibleCount, filteredItems.length) }} of {{ filteredItems.length }} matching entries
      from {{ catalog.item_count }} local catalog records.
    </p>

    <div v-if="visibleItems.length" class="catalog-browser__grid">
      <article v-for="item in visibleItems" :key="`${item.category}:${item.name}`">
        <div class="catalog-browser__tags">
          <span>{{ item.category }}</span>
          <span>{{ item.subcategory }}</span>
          <span v-if="item.rarity !== 'Common'">{{ item.rarity }}</span>
        </div>
        <h3>{{ item.name }}</h3>
        <p v-if="item.summary">{{ item.summary }}</p>
        <p v-if="item.details && item.details !== item.summary" class="catalog-browser__details">
          {{ item.details }}
        </p>
      </article>
    </div>
    <p v-else class="catalog-browser__empty">No catalog entries match those filters.</p>

    <button
      v-if="visibleCount < filteredItems.length"
      class="catalog-browser__more"
      type="button"
      @click="visibleCount += 40"
    >
      Show 40 more
    </button>
  </section>
</template>

<style scoped>
.catalog-browser {
  margin: 1.5rem 0;
}

.catalog-browser__controls {
  display: grid;
  grid-template-columns: minmax(14rem, 2fr) minmax(11rem, 1fr);
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.75rem;
  background: var(--vp-c-bg-soft);
}

.catalog-browser label span {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--vp-c-text-2);
  font-size: 0.78rem;
  font-weight: 700;
}

.catalog-browser input,
.catalog-browser select {
  width: 100%;
  min-height: 2.5rem;
  padding: 0.55rem 0.65rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.45rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
}

.catalog-browser__count {
  margin: 0.7rem 0 1rem;
  color: var(--vp-c-text-3);
  font-size: 0.82rem;
}

.catalog-browser__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.catalog-browser article {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.7rem;
  background: linear-gradient(145deg, var(--vp-c-bg-soft), transparent);
}

.catalog-browser article h3 {
  margin: 0.55rem 0 0.35rem;
  font-size: 1rem;
}

.catalog-browser article p {
  margin: 0.25rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.88rem;
}

.catalog-browser__details {
  color: var(--vp-c-text-3) !important;
}

.catalog-browser__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.catalog-browser__tags span {
  padding: 0.2rem 0.4rem;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.68rem;
  font-weight: 700;
}

.catalog-browser__more {
  display: block;
  margin: 1rem auto 0;
  padding: 0.55rem 0.85rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.45rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

.catalog-browser__empty {
  padding: 1.5rem;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 0.7rem;
  color: var(--vp-c-text-2);
  text-align: center;
}

@media (max-width: 700px) {
  .catalog-browser__controls,
  .catalog-browser__grid {
    grid-template-columns: 1fr;
  }
}
</style>
