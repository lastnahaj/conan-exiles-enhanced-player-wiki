<script setup>
import { withBase } from "vitepress";
const guides = [
  { number: "01", title: "Begin your journey", text: "Connection details, required mods, and your first steps.", link: "/getting-started/", tag: "START HERE" },
  { number: "02", title: "Build your character", text: "Professions, recipe unlocks, classes, and progression.", link: "/progression/", tag: "PROGRESSION" },
  { number: "03", title: "Master combat", text: "Weapon families, armor, spell schools, and casting.", link: "/combat/", tag: "COMBAT & MAGIC" },
  { number: "04", title: "Command your followers", text: "Valkyrie comparisons, companions, breeding, and management.", link: "/followers/", tag: "FOLLOWERS" },
  { number: "05", title: "Establish your base", text: "Building placement, inventory handling, and storage.", link: "/building/", tag: "BUILDING" },
  { number: "06", title: "Explore the world", text: "Travel systems, bounties, encounters, and resources.", link: "/travel/", tag: "EXPLORATION" },
];
const shortcuts = [
  ["Required mods", "/getting-started/required-mods"],
  ["Player controls", "/reference/player-controls"],
  ["Valkyrie stats", "/followers/wov-valkyrie-stats"],
  ["Spell guide", "/magic/domain-magic"],
  ["Troubleshooting", "/getting-started/mod-troubleshooting"],
];
</script>

<template>
  <div class="wiki-home">
    <section class="wiki-home__hero">
      <div class="wiki-home__intro">
        <p class="wiki-home__eyebrow">CONAN EXILES ENHANCED / PLAYER WIKI</p>
        <h1>Know the world.<br /><em>Survive the Exile.</em></h1>
        <p class="wiki-home__lead">Your guide to progression, combat, magic, and life on the server.</p>
        <div class="wiki-home__tags"><span>5× RATES</span><span>HARDCORE FULL PVP</span></div>
        <div class="wiki-home__actions">
          <a class="wiki-home__primary" :href="withBase('/getting-started/')">Start playing <span aria-hidden="true">↗</span></a>
          <a :href="withBase('/getting-started/required-mods')">View required mods <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <aside class="wiki-home__connection">
        <p class="wiki-home__eyebrow">THE SERVER</p>
        <h2>Enter the Exiled Lands</h2>
        <p>Connect through the in-game server browser.</p>
        <code>15.204.96.41:7785</code>
        <a :href="withBase('/server-status/')">Check status and players <span aria-hidden="true">→</span></a>
        <div class="wiki-home__connection-note">Enhanced edition · Required mod stack</div>
      </aside>
    </section>
    <nav class="wiki-home__quick" aria-label="Frequently used guides">
      <span>QUICK ACCESS</span>
      <a v-for="[title, link] in shortcuts" :key="link" :href="withBase(link)">{{ title }}</a>
    </nav>
    <section class="wiki-home__browse">
      <div class="wiki-home__section-title"><div><p class="wiki-home__eyebrow">THE FIELD GUIDE</p><h2>Choose your path</h2></div><p>Find what you need. Get back to the game.</p></div>
      <div class="wiki-home__grid">
        <a v-for="guide in guides" :key="guide.number" class="wiki-home__card" :href="withBase(guide.link)">
          <div class="wiki-home__card-top"><span>{{ guide.tag }}</span><span>{{ guide.number }}</span></div>
          <h3>{{ guide.title }}</h3><p>{{ guide.text }}</p><span class="wiki-home__card-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
    <section class="wiki-home__feature">
      <div><p class="wiki-home__eyebrow">WINGS OF VALHALLA</p><h2>A deeper progression path.</h2><p>Explore professions, equipment, companions, and the systems that connect them.</p></div>
      <a :href="withBase('/progression/wings-of-valhalla')">Open the WoV guide <span aria-hidden="true">→</span></a>
    </section>
  </div>
</template>
