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
      <AppHeader />
      <slot />
      <AppFooter />
    </Body>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - MLP Drawing School`
      : "MLP Drawing School";
  },
});
</script>
