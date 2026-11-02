<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import RelatedGuides from "./RelatedGuides.vue";
const { page } = useData();
const repository = "https://github.com/lastnahaj/conan-exiles-enhanced-player-wiki";
const history = computed(() => repository + "/commits/main/docs/" + page.value.relativePath);
const report = computed(() => repository + "/issues/new?title=" + encodeURIComponent("Guide correction: " + page.value.title) + "&body=" + encodeURIComponent("Page: " + page.value.relativePath + "\n\nWhat needs correcting?\n\nWhat did you observe in game?\n"));
</script>
<template>
  <RelatedGuides />
  <aside class="guide-contribute">
    <div><strong>Help keep this guide accurate</strong><p>Found a changed recipe, outdated stat, or missing step?</p></div>
    <div><a :href="report" target="_blank" rel="noopener">Report a correction ↗</a><a :href="history" target="_blank" rel="noopener">Page history ↗</a></div>
  </aside>
</template>
