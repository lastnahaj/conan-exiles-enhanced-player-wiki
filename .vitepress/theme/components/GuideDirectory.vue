<script setup>
import { computed, ref, watch } from "vue";
import { withBase } from "vitepress";
import { data } from "../guides.data.js";
const query = ref(""), section = ref("all"), edition = ref("current");
const limit = ref(12);
watch([query, section, edition], () => { limit.value = 12; });
const names = { "getting-started": "Getting started", progression: "Progression", combat: "Combat & equipment", magic: "Magic", followers: "Followers", crafting: "Crafting", building: "Building", travel: "Travel", quests: "Quests", economy: "Economy", qol: "Quality of life", creatures: "Creatures", reference: "Reference", "server-status": "Server status", "server-rules": "Server settings" };
const sections = computed(() => [...new Set(data.map(page => page.section))].sort());
const matches = computed(() => data.filter(page =>
  (section.value === "all" || page.section === section.value) &&
  (edition.value === "all" || (edition.value === "legacy" ? page.legacy : !page.legacy)) &&
  (page.title + " " + page.description).toLowerCase().includes(query.value.toLowerCase().trim())
));
function reset() { query.value = ""; section.value = "all"; edition.value = "current"; }
</script>
<template>
  <section class="guide-directory" aria-label="Guide library">
    <div class="directory-filters">
      <label>Find a guide<input v-model="query" type="search" placeholder="Search spells, followers, crafting…" /></label>
      <label>Category<select v-model="section"><option value="all">All categories</option><option v-for="value in sections" :value="value" :key="value">{{ names[value] || value }}</option></select></label>
      <label>Edition<select v-model="edition"><option value="current">Current guides</option><option value="legacy">Legacy archive</option><option value="all">All guides</option></select></label>
    </div>
    <p class="directory-count" role="status">{{ matches.length }} guides <button @click="reset">Reset filters</button></p>
    <div class="directory-results">
      <a v-for="page in matches.slice(0, limit)" :key="page.url" :href="withBase(page.url)" class="directory-result">
        <span class="directory-category">{{ names[page.section] || page.section }}<span v-if="page.legacy"> · Legacy</span></span>
        <h2>{{ page.title }}</h2><p>{{ page.description }}</p><span aria-hidden="true" class="directory-arrow">→</span>
      </a>
    </div>
    <button v-if="limit < matches.length" class="directory-more" @click="limit += 12">Show more guides · {{ matches.length - limit }} remaining</button>
    <p v-if="!matches.length">No guides match these filters. Try a broader term or reset the filters.</p>
  </section>
</template>
