<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import { data } from "../guides.data.js";
const { page, frontmatter } = useData();
const route = computed(() => "/" + page.value.relativePath.replace(/index\.md$/, "").replace(/\.md$/, ""));
const guide = computed(() => data.find(item => item.url === route.value));
</script>
<template>
  <section v-if="frontmatter.guide" class="guide-brief" aria-label="Guide overview">
    <p class="guide-brief__goal">{{ frontmatter.guide.goal }}</p>
    <div class="guide-brief__grid">
      <div><span>BEFORE YOU START</span><p>{{ frontmatter.guide.before }}</p></div>
      <div><span>WHAT YOU'LL LEARN</span><p>{{ frontmatter.guide.result }}</p></div>
    </div>
  </section>
  <div v-if="guide?.headings?.length > 2" class="article-intro">
    <div class="article-intro__label"><span>IN THIS GUIDE</span><span>{{ guide.minutes }} min read</span></div>
    <nav aria-label="Guide shortcuts"><a v-for="heading in guide.headings.filter(item => item.text !== 'Mod identity').slice(0, 6)" :key="heading.anchor" :href="'#' + heading.anchor">{{ heading.text }} <span aria-hidden="true">↓</span></a></nav>
  </div>
</template>
