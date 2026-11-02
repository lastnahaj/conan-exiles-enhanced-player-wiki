<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useData, withBase } from "vitepress";
const { page } = useData();
const saved = ref(false), copied = ref(false), progress = ref(0);
const route = computed(() => "/" + page.value.relativePath.replace(/index\.md$/, "").replace(/\.md$/, ""));
function readSaved() { try { return JSON.parse(localStorage.getItem("exiles-saved-guides") || "[]"); } catch { return []; } }
function sync() { saved.value = readSaved().some(item => item.route === route.value); }
function toggle() {
  const items = readSaved().filter(item => item.route !== route.value);
  if (!saved.value) items.push({ route: route.value, title: page.value.title });
  try { localStorage.setItem("exiles-saved-guides", JSON.stringify(items)); sync(); } catch {}
}
async function copy() { try { await navigator.clipboard.writeText(location.href); copied.value = true; setTimeout(() => copied.value = false, 2000); } catch {} }
function scroll() { const height = document.documentElement.scrollHeight - innerHeight; progress.value = height > 0 ? Math.min(100, scrollY / height * 100) : 100; }
onMounted(() => { sync(); scroll(); window.addEventListener("scroll", scroll, { passive: true }); });
onUnmounted(() => { if (typeof window !== "undefined") window.removeEventListener("scroll", scroll); });
watch(route, () => { if (typeof window !== "undefined") { sync(); progress.value = 0; } });
</script>
<template>
  <div class="reading-progress" :style="{ width: progress + '%' }" aria-hidden="true"></div>
  <div class="guide-tools">
    <a :href="withBase('/')">FIELD GUIDE</a><span class="guide-tools__divider">/</span><span>{{ page.title }}</span>
    <div class="guide-tools__buttons">
      <button @click="toggle" :aria-pressed="saved">{{ saved ? '✓ Saved' : '＋ Save guide' }}</button>
      <button @click="copy">{{ copied ? 'Link copied' : 'Copy link' }}</button>
    </div>
  </div>
</template>
