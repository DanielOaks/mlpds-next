<template>
  <div>
    <Body class="bg-white text-black dark:bg-zinc-900 dark:text-white">
      <TheHeader />
      <slot />
    </Body>
  </div>
</template>

<script setup lang="ts">
import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
</script>
