<template>
  <GuideList :list="list" :titles="false" />
</template>

<script setup lang="ts">
defineProps<{ list: string }>();
</script>
