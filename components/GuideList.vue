<template>
  <div class="mx-auto mt-5 max-w-screen-md">
    <h2 class="mb-6 mt-6 text-4xl font-bold" v-text="guideLists[list].name" />
    <template v-for="(section, i) in guideLists[list].pages" :key="i">
      <h3
        v-if="titles === true"
        class="mt-5 text-2xl font-bold"
        v-text="section.name"
      />
      <div v-for="(p, j) in section.pages" :key="j" class="guideLink mb-1">
        <NuxtLink
          class="text-link-light dark:text-link-dark mr-2 underline"
          :to="g(p).link || '/guides/' + p"
        >
          {{ g(p).name }}
        </NuxtLink>
        <span class="opacity-70" v-text="g(p).author" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { guides, guideLists } from "@/guideData";

defineProps<{ list: string; titles: boolean }>();

function g(page: string) {
  return guides[page];
}
</script>
