<script setup>
import { withBase } from "vitepress";

const entries = [
  {
    name: "Asagarth",
    file: "/media/wov-valkyries/wov-valkyrie-asagarth-stats.png",
    alt: "Level 0 Asagarth Chosen Valkyrie attributes, growth chances, bonuses, and health",
  },
  {
    name: "Mountain",
    file: "/media/wov-valkyries/wov-valkyrie-mountain-stats.png",
    alt: "Level 0 Mountain Chosen Valkyrie attributes, growth chances, bonuses, and health",
  },
  {
    name: "Lava",
    file: "/media/wov-valkyries/wov-valkyrie-lava-stats.png",
    alt: "Level 0 Lava Chosen Valkyrie attributes, growth chances, bonuses, and health",
  },
  {
    name: "Blood — Sema the Blood Primarch",
    file: "/media/wov-valkyries/wov-valkyrie-blood-primarch-stats.png",
    alt: "Level 0 Sema the Blood Primarch attributes, growth chances, bonuses, and health",
  },
  {
    name: "Desert",
    file: "/media/wov-valkyries/wov-valkyrie-desert-stats.png",
    alt: "Level 0 Desert Chosen Valkyrie attributes, growth chances, bonuses, and health",
  },
  {
    name: "Jungle",
    file: "/media/wov-valkyries/wov-valkyrie-jungle-stats.png",
    alt: "Level 0 Jungle Chosen Valkyrie attributes, growth chances, bonuses, and health",
  },
  {
    name: "Fallen",
    file: "/media/wov-valkyries/wov-valkyrie-fallen-stats.png",
    alt: "Level 0 Fallen Chosen Valkyrie attributes, growth chances, bonuses, and health",
  },
];
</script>

<template>
  <div class="valkyrie-stat-gallery">
    <figure v-for="entry in entries" :key="entry.file" class="valkyrie-stat-card">
      <a :href="withBase(entry.file)" :aria-label="`Open full-resolution ${entry.name} stat image`">
        <img :src="withBase(entry.file)" :alt="entry.alt" loading="lazy" />
      </a>
      <figcaption>{{ entry.name }}</figcaption>
    </figure>
  </div>
</template>

<style scoped>
.valkyrie-stat-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}

.valkyrie-stat-card {
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.75rem;
  background: var(--vp-c-bg-soft);
}

.valkyrie-stat-card a {
  display: block;
}

.valkyrie-stat-card img {
  display: block;
  width: 100%;
  aspect-ratio: 1.09;
  object-fit: contain;
  background: #11191d;
}

.valkyrie-stat-card figcaption {
  padding: 0.75rem 0.9rem;
  color: var(--vp-c-text-1);
  font-weight: 700;
}

@media (max-width: 720px) {
  .valkyrie-stat-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
