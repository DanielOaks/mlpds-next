<template>
  <a class="guideFullWidthImage" :href="href ? href : src">
    <figure>
      <img :src="src" />
      <figcaption v-if="artist" v-text="'art by ' + artist" />
      <figcaption v-if="photographer" v-text="'photo by ' + photographer" />
      <figcaption v-if="$slots.default !== undefined">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </figcaption>
    </figure>
  </a>
</template>

<script setup lang="ts">
defineProps({
  src: String,
  href: String,
  artist: String,
  photographer: String,
});
</script>

<style>
.guideFullWidthImage {
  display: block;
  margin: 0.5em 0;
  text-decoration: none;
  text-align: center;
  figure {
    padding: 0.5em;
    border-radius: 0.5em;
    border: rgba(169, 169, 169, 0.399) solid 2px;
    margin: 0 auto;
    display: inline-block;
  }
  img {
    max-width: 100%;
  }
  figcaption {
    display: block;
    text-align: center;
    color: rgb(var(--v-theme-on-background));
    opacity: 0.7;
    font-size: 0.9em;
  }
}
</style>
