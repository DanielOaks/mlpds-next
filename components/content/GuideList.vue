<template>
  <div class="mx-auto mt-5 max-w-screen-md">
    <h2 class="mb-6 mt-6 text-4xl font-bold" v-text="guideLists[list].name" />
    <template v-for="section in guideLists[list].pages">
      <h3
        v-if="titles !== 'none'"
        class="mt-5 text-2xl font-bold"
        v-text="section.name"
      />
      <div v-for="p in section.pages" class="guideLink mb-1">
        <NuxtLink
          class="mr-2 text-blue-700 underline"
          :to="g(p).link || '/guides/' + p"
          v-text="g(p).name"
        />
        <span class="opacity-70" v-text="g(p).author" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { guides, guideLists } from "@/guideData";

const props = defineProps({
  list: String,
  titles: String,
});

function g(page: string) {
  return guides[page];
}
</script>

<style>
/* h1 + .guideList {
  margin-top: -1.1em;
}
.guideList {
  .guideLink {
    + .guideLink {
      margin-top: .2em;
    }
    .author {
      font-size: .9em;
      margin-left: .4em;
      opacity: .7;
    }
  }
  + hr {
    margin: 2.5em 0 2em 0 !important;
  }
} */
</style>
