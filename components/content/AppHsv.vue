<template>
  <span
    :class="{ HSV: true, big: big }"
    :style="`background-color: hsl(${h}, ${s}, ${v});`"
  ></span>
</template>

<script setup lang="ts">
defineProps({
  h: {
    type: Number,
    default: 0,
  },
  s: {
    type: String,
    default: "100%",
  },
  v: {
    type: String,
    default: "50%",
  },
  big: Boolean,
});
</script>

<style>
span.HSV {
  @apply mx-1 inline-block h-5 w-5 rounded border border-black align-[-4px];
  + span.HSV {
    @apply -ml-0.5;
  }
}
span.HSV.big {
  @apply w-9;
}
</style>
