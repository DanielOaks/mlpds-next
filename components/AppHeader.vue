<template>
  <nav
    class="sticky left-0 top-0 z-20 w-full bg-primary-500 dark:bg-primary-600"
  >
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"
    >
      <a href="/" class="flex items-center">
        <img src="/logo.png" class="mr-3 h-8" alt="MLP Drawing School logo" />
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold text-white"
          >MLPDS</span
        >
      </a>
      <div
        id="navbar-sticky"
        class="hidden w-full items-center justify-between md:flex md:w-auto"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0"
        >
          <li>
            <a
              href="/guides/"
              class="block rounded py-2 pl-3 pr-4 text-primary-100 md:bg-transparent md:p-0"
              aria-current="page"
              >Guides</a
            >
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/MLPdrawingschool/wiki/biweekly"
              target="_blank"
              class="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0"
              >Challenges</a
            >
          </li>
          <li>
            <a
              href="/prompts"
              class="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0"
              >Prompt Generator</a
            >
          </li>
        </ul>
      </div>
      <div class="flex">
        <select
          v-model="colorMode.preference"
          class="rounded-xl px-2 pb-2 pt-1 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
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
