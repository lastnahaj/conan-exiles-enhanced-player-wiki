<script setup>
import { computed } from "vue";
import { useData, withBase } from "vitepress";
import { data } from "../guides.data.js";
const { page, frontmatter } = useData();
const route = computed(() => "/" + page.value.relativePath.replace(/index\.md$/, "").replace(/\.md$/, ""));
const isIndex = computed(() => page.value.relativePath.endsWith("index.md"));
const guides = computed(() => {
  const section = route.value.split("/")[1];
  const legacy = /Legacy/.test(frontmatter.value.title || "");
  return data.filter(item => item.section === section && item.url !== route.value && item.legacy === legacy && (isIndex.value ? !item.url.endsWith("/") : true)).slice(0, isIndex.value ? 8 : 3);
});
</script>
<template>
  <section v-if="guides.length" class="related-guides">
    <p class="related-guides__eyebrow">{{ isIndex ? 'EXPLORE THIS SECTION' : 'CONTINUE READING' }}</p>
    <div class="related-guides__grid"><a v-for="guide in guides" :key="guide.url" :href="withBase(guide.url)"><strong>{{ guide.title }}</strong><p>{{ guide.description }}</p><span>{{ guide.minutes }} min read <span aria-hidden="true">→</span></span></a></div>
  </section>
</template>
