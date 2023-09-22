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
          <h1 class="mb-3 mt-8 text-3xl font-semibold" v-text="title" />

          <div v-if="author === undefined" class="author">
            <span class="name" v-text="authorKey" />
          </div>
          <div v-if="author !== undefined" class="author">
            <img v-if="author.icon" class="avatar" :src="author.icon" />
            <span class="name" v-text="author.name" />
            <a v-if="author.youtube" :href="author.youtube"
              ><span color="#FF0000">mdi-youtube</span></a
            >
            <a
              v-if="author.twitter"
              :href="`https://twitter.com/${author.twitter}`"
              ><span color="#1DA1F2">mdi-twitter</span></a
            >
            <a
              v-if="author.reddit"
              :href="`https://reddit.com/u/${author.reddit}`"
              ><span color="#FF5700">mdi-reddit</span></a
            >
            <a v-if="author.homepage" :href="author.homepage"
              ><span color="indigo">mdi-link-variant</span></a
            >
          </div>
          <div v-if="subtitle" class="italic" v-text="subtitle" />
        </hgroup>
        <div class="guide-content">
          <slot />
        </div>
      </div>
    </Body>
  </div>
</template>

<script setup lang="ts">
import { authors } from "@/guideData";

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
</script>

<style>
.guide-content {
  p + p {
    margin-top: 1em;
  }
}
</style>
