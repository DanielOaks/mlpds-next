<template>
  <Head>
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <Link rel="manifest" href="/site.webmanifest" />
    <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3d97e" />
    <Meta name="apple-mobile-web-app-title" content="MLPDS" />
    <Meta name="application-name" content="MLPDS" />
    <Meta name="msapplication-TileColor" content="#fce38d" />
    <Meta name="theme-color" content="#fff8e0" />
  </Head>
</template>

<script setup lang="ts">
const props = defineProps<{ title: String; desc: String; image: String }>();

useSeoMeta({
  title: String(props.title),
  description: String(props.desc),
  ogTitle: String(props.title),
  ogDescription: String(props.desc),
  ogImage: String(props.image),
  twitterCard: "summary_large_image",
});
</script>
