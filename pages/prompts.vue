<template>
  <nuxt-layout>
    <div class="my-10 text-center text-lg">Prompts go here</div>
  </nuxt-layout>
</template>

<script setup lang="ts">
useHead({
  title: "Drawing prompt generator",
});

definePageMeta({
  documentDriven: {
    page: false,
    surround: false,
  },
});
</script>
