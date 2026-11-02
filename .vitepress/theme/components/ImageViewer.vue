<script setup>
import { nextTick, onMounted, onUnmounted, ref } from "vue";
const dialog = ref(null), selected = ref(null);
let opener;
async function openImage(event) {
  const image = event.target.closest(".vp-doc img");
  if (!image || event.ctrlKey || event.metaKey || event.shiftKey) return;
  const anchor = image.closest("a");
  if (anchor && !/\.(png|jpe?g|webp)(?:[?#].*)?$/i.test(anchor.href)) return;
  event.preventDefault();
  opener = document.activeElement;
  selected.value = { src: image.currentSrc || image.src, alt: image.alt };
  await nextTick();
  dialog.value.showModal();
}
function close() { dialog.value?.close(); if (opener instanceof HTMLElement) opener.focus(); }
onMounted(() => document.addEventListener("click", openImage));
onUnmounted(() => document.removeEventListener("click", openImage));
</script>
<template>
  <dialog ref="dialog" class="image-viewer" aria-label="Full image preview" @click="event => { if (event.target === dialog) close(); }" @close="selected = null">
    <div v-if="selected" class="image-viewer__content">
      <header><span>{{ selected.alt || 'Image preview' }}</span><button autofocus @click="close" aria-label="Close image preview">Close ×</button></header>
      <img :src="selected.src" :alt="selected.alt" />
      <a :href="selected.src" target="_blank" rel="noopener">Open original image ↗</a>
    </div>
  </dialog>
</template>
