<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import { data } from "../guides.data.js";
const { page } = useData();
const route = computed(() => "/" + page.value.relativePath.replace(/index\.md$/, "").replace(/\.md$/, ""));
const guide = computed(() => data.find(item => item.url === route.value));
</script>
<template>
  <div v-if="guide?.headings?.length > 2" class="article-intro">
    <div class="article-intro__label"><span>IN THIS GUIDE</span><span>{{ guide.minutes }} min read</span></div>
    <nav aria-label="Guide shortcuts"><a v-for="heading in guide.headings.slice(0, 4)" :key="heading.anchor" :href="'#' + heading.anchor">{{ heading.text }} <span aria-hidden="true">↓</span></a></nav>
  </div>
</template>
