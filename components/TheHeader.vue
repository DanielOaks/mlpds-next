<template>
  <nav
    class="sticky left-0 top-0 z-20 w-full bg-primary-500 dark:bg-primary-600"
  >
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"
    >
      <nuxt-link to="/" class="flex items-center">
        <img src="/logo.png" class="mr-3 h-8" alt="MLP Drawing School logo" />
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold text-white"
        >
          MLPDS
        </span>
      </nuxt-link>
      <div
        id="navbar-sticky"
        class="hidden w-full items-center justify-between md:flex md:w-auto"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0"
        >
          <li>
            <nuxt-link to="/guides/" class="header-link" aria-current="page">
              Guides
            </nuxt-link>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/MLPdrawingschool/wiki/biweekly"
              target="_blank"
              class="header-link"
            >
              Challenges
            </a>
          </li>
          <li>
            <nuxt-link to="/prompts" class="header-link">
              Prompt Generator
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="flex">
        <select
          v-model="colorMode.preference"
          class="rounded-xl px-2 py-1.5 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        >
          <option value="system">System</option>
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
        </select>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<style>
.header-link {
  @apply block rounded py-2 pl-3 pr-4 text-white transition-all md:bg-transparent md:p-0;
  &:hover,
  &.router-link-exact-active {
    @apply text-primary-100;
  }
}
</style>
