<script setup>
import { ref, onMounted } from "vue";
import { withBase } from "vitepress";
const items = ref([]);
onMounted(() => { try { items.value = JSON.parse(localStorage.getItem("exiles-saved-guides") || "[]"); } catch {} });
</script>
<template>
  <section v-if="items.length" class="saved-guides">
    <p class="wiki-home__eyebrow">YOUR FIELD NOTES</p>
    <h2>Saved for your next session</h2>
    <div><a v-for="item in items" :key="item.route" :href="withBase(item.route)">{{ item.title }} <span aria-hidden="true">↗</span></a></div>
    <p>Saved in this browser.</p>
  </section>
</template>
