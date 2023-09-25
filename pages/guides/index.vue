<template>
  <nuxt-layout>
    <TheHeadTags :title="metaTitle" :desc="metaDesc" :image="metaImage" />

    <div class="flex w-full bg-secondary-100 dark:bg-secondary-600">
      <img class="mx-auto max-h-60" src="/banner-1.jpg" />
      <h1
        class="absolute left-1/2 top-40 -translate-x-1/2 text-5xl font-bold text-white"
        style="
          text-shadow:
            -1px 1px 2px #000,
            1px 1px 2px #000,
            1px -1px 0 #000,
            -1px -1px 0 #000,
            0 0 30px #fff;
        "
      >
        Guides
      </h1>
    </div>

    <guide-list list="default" :titles="true" />

    <br /><br />

    <guide-list list="chumpys" :titles="false" />

    <br /><br /><br /><br />
  </nuxt-layout>
</template>

<script setup lang="ts">
const metaTitle = "Art Guides - MLP Drawing School";
const metaDesc = "Here's a set of art guides to help you draw ponies!";
const metaImage = "/preview.png";

definePageMeta({
  documentDriven: {
    page: false,
    surround: false,
  },
});
</script>
