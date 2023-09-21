<template>
  <div class="max-w-screen-md mx-auto mt-5">
    <h2 class="text-4xl font-bold mt-6 mb-6" v-text="guideLists[list].name"/>
    <template v-for="section in guideLists[list].pages">
      <h3 class="text-2xl font-bold mt-5" v-text="section.name" v-if="titles !== 'none'"/>
      <div class="guideLink mb-1" v-for="p in section.pages">
        <NuxtLink class="text-blue-700 mr-2 underline" :to="g(p).link || '/guides/'+p" v-text="g(p).name"/>
        <span class="opacity-70" v-text="g(p).author"/>
      </div>
    </template>
  </div>
</template>

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

<script setup lang="ts">
const props = defineProps({
  list: String,
  titles: String,
})

import { guides, guideLists } from '@/guideData'

function g(page: string) {
  return guides[page];
}
</script>