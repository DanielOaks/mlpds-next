<template>
  <nav class="bg-primary-500 dark:bg-primary-600 sticky w-full z-20 top-0 left-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center">
          <img src="/logo.png" class="h-8 mr-3" alt="MLP Drawing School logo">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">MLPDS</span>
      </a>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <a href="/guides/" class="block py-2 pl-3 pr-4 text-primary-100 rounded md:bg-transparent md:p-0" aria-current="page">Guides</a>
          </li>
          <li>
            <a href="https://www.reddit.com/r/MLPdrawingschool/wiki/biweekly" target="_blank" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0">Challenges</a>
          </li>
          <li>
            <a href="/prompts" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0">Prompt Generator</a>
          </li>
        </ul>
      </div>
      <div class="flex">
        <select
          v-model="colorMode.preference"
          class="pt-1 pb-2 px-2 rounded-xl dark:bg-gray-900 dark:text-white dark:border-gray-700"
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
const colorMode = useColorMode()
</script>