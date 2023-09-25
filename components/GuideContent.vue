<template>
  <div class="guide-content"><slot /></div>
</template>

<style>
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
