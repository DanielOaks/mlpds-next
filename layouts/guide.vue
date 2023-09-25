<template>
  <div>
    <TheHeadTags :title="metaTitle" :desc="metaDesc" :image="metaImage" />

    <Body class="bg-white text-black dark:bg-zinc-900 dark:text-white">
      <TheHeader />
      <div class="mt-5 flex justify-center">
        <div class="max-w-screen-md">
          <div class="mx-4 flex flex-wrap items-center">
            <hgroup>
              <h1 class="text-3xl font-bold" v-text="title" />
              <div
                v-if="subtitle"
                class="text-xl opacity-70"
                v-text="subtitle"
              />
            </hgroup>
            <div class="flex content-center items-center">
              <div v-if="author === undefined" class="ml-4 inline-block">
                <span class="author-name" v-text="authorKey" />
              </div>
              <div v-if="author !== undefined" class="ml-4 flex items-center">
                <img
                  v-if="author.icon"
                  class="h-12 rounded-full"
                  :src="author.icon"
                />
                <span class="author-name" v-text="author.name" />
                <a
                  v-if="author.youtube"
                  class="author-link text-2xl text-[#ff0000]"
                  :href="author.youtube"
                  title="Author's YouTube"
                >
                  <font-awesome-icon :icon="['fab', 'youtube']" />
                </a>
                <a
                  v-if="author.twitter"
                  class="author-link text-2xl text-[#1da1f2]"
                  :href="`https://twitter.com/${author.twitter}`"
                  title="Author's Twitter"
                >
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
                <a
                  v-if="author.reddit"
                  class="author-link text-2xl text-[#ff5700]"
                  :href="`https://reddit.com/u/${author.reddit}`"
                  title="Author's Reddit"
                >
                  <font-awesome-icon :icon="['fab', 'reddit']" />
                </a>
                <a
                  v-if="author.homepage"
                  class="author-link text-2xl text-link-light dark:text-link-dark"
                  :href="author.homepage"
                  title="Author's Homepage"
                >
                  <font-awesome-icon :icon="['fa', 'link']" />
                </a>
              </div>
            </div>
          </div>
          <div
            v-if="prevPage || home || nextPage"
            class="sticky top-16 z-10 mx-5 mb-4 flex justify-center gap-3 border-b-2 border-primary-100 bg-white pt-1 dark:border-primary-800 dark:bg-zinc-900"
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
          <div class="guide-content mx-5">
            <slot />
          </div>
        </div>
        <div
          :class="{
            'hidden w-40': true,
            'lg:block': false && nopagenav !== true,
          }"
        >
          <div class="sticky top-24 text-sm">test</div>
        </div>
      </div>
    </Body>
  </div>
</template>

<script setup lang="ts">
import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
import { authors, guideLists } from "@/guideData";

const { page } = useContent();

const {
  title,
  author: authorKey,
  subtitle,
  description,
  image,
  nopagenav,
} = page.value;

// page meta info
const metaTitle = title ? `${title} - Drawing Guide` : "MLPDS Drawing Guide";
let metaDesc = "Find tips and tricks about how to draw here!";
if (description) {
  metaDesc = description;
} else if (subtitle) {
  metaDesc = subtitle;
}
const metaImage = image || "/preview.png";

// author info
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
  @apply relative top-1.5 mx-2 text-xl opacity-50;
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
  blockquote {
    @apply my-3 rounded border-l-4 border-primary-200 py-1 pl-4 dark:border-primary-700;
  }
}
</style>
