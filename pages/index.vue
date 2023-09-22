<template>
  <nuxt-layout>
    <div class="mb-10">
      <img class="mx-auto my-6 w-40 max-w-full" src="/logo.png" />
      <hgroup class="text-center">
        <h1 class="mb-2 text-3xl font-bold">MLP Drawing School</h1>
        <p class="text-xl">We're a supportive and nurturing art community.</p>
      </hgroup>
      <div class="flex justify-center">
        <a
          class="block px-4 py-2"
          target="_blank"
          href="https://www.reddit.com/r/MLPdrawingschool/"
          >Reddit</a
        >
        <a
          class="block px-4 py-2"
          target="_blank"
          href="https://discord.gg/PhtDzZwbBR"
          >Discord</a
        >
        <a
          class="block px-4 py-2"
          target="_blank"
          href="https://www.youtube.com/channel/UCgwjWwwYwrgnNZX6VegUMWQ"
          >Youtube</a
        >
      </div>
      <FinelineGallery />
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
useHead({
  title: "",
});
</script>
