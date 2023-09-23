<template>
  <div>
    <Head>
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3d97e" />
      <Meta name="apple-mobile-web-app-title" content="MLPDS" />
      <Meta name="application-name" content="MLPDS" />
      <Meta name="msapplication-TileColor" content="#fce38d" />
      <Meta name="theme-color" content="#fff8e0" />
    </Head>

    <Body class="bg-white text-black dark:bg-zinc-900 dark:text-white">
      <TheHeader />
      <div class="mx-auto mt-5 max-w-screen-md">
        <hgroup>
          <div class="mt-8 flex content-center items-center">
            <h1 class="text-3xl font-bold" v-text="title" />

            <div v-if="author === undefined" class="ml-4 inline-block">
              <span class="author-name" v-text="authorKey" />
            </div>
            <div v-if="author !== undefined" class="ml-4 flex items-center">
              <img
                v-if="author.icon"
                class="h-14 rounded-full"
                :src="author.icon"
              />
              <span class="author-name" v-text="author.name" />
              <a
                v-if="author.youtube"
                class="author-link"
                :href="author.youtube"
                ><span color="#FF0000">YouTube</span></a
              >
              <a
                v-if="author.twitter"
                class="author-link"
                :href="`https://twitter.com/${author.twitter}`"
                ><span color="#1DA1F2">Twitter</span></a
              >
              <a
                v-if="author.reddit"
                class="author-link"
                :href="`https://reddit.com/u/${author.reddit}`"
                ><span color="#FF5700">Reddit</span></a
              >
              <a
                v-if="author.homepage"
                class="author-link"
                :href="author.homepage"
                ><span color="indigo">Link</span></a
              >
            </div>
          </div>
          <div v-if="subtitle" class="text-xl opacity-70" v-text="subtitle" />
        </hgroup>
        <div
          v-if="prevPage || home || nextPage"
          class="sticky top-16 mb-4 mt-1 flex justify-center gap-3 border-b-2 border-primary-100 bg-white dark:border-primary-800 dark:bg-zinc-900"
        >
          <nuxt-link
            v-if="prevPage"
            class="guide-top-link"
            :to="guidesPrefix + prevPage"
            >Previous Guide</nuxt-link
          >
          <span v-if="!prevPage" class="guide-top-link">Previous Guide</span>
          <nuxt-link class="guide-top-link" :to="guidesPrefix + home"
            >Home</nuxt-link
          >
          <nuxt-link
            v-if="nextPage"
            class="guide-top-link"
            :to="guidesPrefix + nextPage"
            >Next Guide</nuxt-link
          >
          <span v-if="!nextPage" class="guide-top-link">Next Guide</span>
        </div>
        <div class="guide-content">
          <slot />
        </div>
      </div>
    </Body>
  </div>
</template>

<script setup lang="ts">
import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
import { authors, guideLists } from "@/guideData";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - MLP Drawing School`
      : "MLP Drawing School";
  },
});

const { page } = useContent();

const { title, author: authorKey, subtitle } = page.value;
const author = authors[authorKey];

// get this guide's path
const guidesPrefix = "/guides/";
let home = "";
let prevPage = "";
let nextPage = "";
const guidePath = useRoute().path.replace(/^(\/guides\/)/, "");

const list =
  page.value.list === undefined ? "default" : String(page.value.list);

if (guideLists[list]) {
  home = guideLists[list].home;
  let found = false;
  for (const section of guideLists[list].pages) {
    for (const page of section.pages) {
      if (found && nextPage === "") {
        nextPage = page;
      }
      if (!found && page !== guidePath) {
        prevPage = page;
      }
      if (page === guidePath) {
        found = true;
      }
    }
  }
}
</script>

<style>
html,
body {
  @apply scroll-pt-32;
}
.author-name {
  @apply relative top-1.5 mx-2 text-2xl opacity-50;
}
.author-link {
  @apply relative top-2.5 mx-2;
}
.guide-top-link {
  @apply px-5 py-2 opacity-50;
}
a.guide-top-link {
  @apply opacity-100;
}
.guide-content {
  font-size: 1.05em;
  @apply mb-12;

  h2 a,
  h3 a,
  h4 a {
    @apply text-current no-underline dark:text-current;
  }
  h2 {
    @apply mb-3 mt-10 text-2xl font-bold;
  }
  h3 {
    @apply mb-1 mt-5 text-xl font-bold;
  }
  h4 {
    @apply mb-1 mt-4 text-lg font-bold;
  }
  p + p {
    @apply mt-3;
  }
  a {
    @apply text-link-light underline dark:text-link-dark;
  }
  hr {
    @apply my-5 h-[2px] rounded-full border-none bg-primary-100 dark:bg-primary-800;
  }
  ul,
  ol {
    @apply my-5 ml-4 list-outside;
  }
  ul {
    @apply list-disc;
  }
  ol {
    @apply list-decimal;
  }
  li + li {
    @apply mt-3;
  }
}
</style>
