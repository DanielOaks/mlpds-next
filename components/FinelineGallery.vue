<template>
  <div class="mx-auto mt-6 flex max-w-screen-md flex-col items-center">
    <h2 class="text-2xl font-bold">Fineline</h2>
    <span class="mx-4 text-lg">
      Fineline is our community's mascot. Look at her go!
    </span>
    <div class="mx-4 mt-4 flex flex-wrap justify-center gap-4">
      <div
        v-for="(image, i) in finelineImages"
        :key="i"
        class="rounded-2xl border-2 border-solid border-secondary-400 px-1 py-2 shadow-lg dark:border-secondary-700"
      >
        <a
          :href="image.img"
          target="_blank"
          class="flex h-80 w-80 max-w-[75vw] items-center justify-center overflow-hidden rounded bg-white"
        >
          <img class="max-h-full max-w-full" :src="image.img" />
        </a>
        <a
          v-if="image.twitter"
          :href="`https://twitter.com/${image.twitter}`"
          target="_blank"
          class="block pt-2 text-center"
        >
          @{{ image.twitter }}
        </a>
        <span v-if="image.name" class="block pt-2 text-center">
          {{ image.name }}
        </span>
      </div>
    </div>
    <FinelineGallerySubmit />
  </div>
</template>

<script setup lang="ts">
const finelineImages = [
  {
    img: "/fineline/fluffyxai-fineline-1.png",
    twitter: "FluffyXai",
  },
  {
    img: "/fineline/vex-fineline-1.jpg",
    twitter: "terminal_vex",
  },
  {
    img: "/fineline/dino-fineline-1.png",
    name: "Strangersaurus",
  },
];
</script>

<style></style>
