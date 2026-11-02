<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import registry from "../../../data/verification.json";
const { page, frontmatter } = useData();
const record = computed(() => {
  const path = "/" + page.value.relativePath.replace(/index\.md$/, "").replace(/\.md$/, "");
  return registry.pages[path];
});
const label = computed(() => {
  if (/Legacy/.test(frontmatter.value.title ?? "")) return "Legacy reference";
  if (record.value?.source_urls?.some(url => url.startsWith("owner-supplied:"))) return "Server observed example";
  if (record.value?.source_urls?.length) return "Mod documented";
  return "Server information";
});
</script>

<template>
  <aside v-if="record" class="guide-evidence">
    <strong>{{ label }}</strong>
    <span> · Checked {{ record.verified_at }}</span>
    <details v-if="record.status === 'server-verification-required'">
      <summary>About these values</summary>
      <p>Published mod behavior; server availability and tuning may differ. Legacy references describe historical systems.</p>
    </details>
  </aside>
</template>

<style scoped>
.guide-evidence { margin-bottom: 1.5rem; padding: .75rem 1rem; border-left: 3px solid var(--vp-c-brand-1); background: var(--vp-c-bg-soft); font-size: .85rem; color: var(--vp-c-text-2); }
.guide-evidence p { margin: .3rem 0 0; }
</style>
