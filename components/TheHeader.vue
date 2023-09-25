<template>
  <nav
    class="sticky left-0 top-0 z-20 w-full bg-primary-500 dark:bg-primary-600"
  >
    <div class="mx-auto flex max-w-screen-xl items-center justify-between p-4">
      <nuxt-link to="/" class="flex items-center">
        <img
          src="/logo.png"
          class="relative bottom-1 mr-3 h-8"
          alt="MLP Drawing School logo"
        />
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold text-white"
        >
          MLPDS
        </span>
      </nuxt-link>
      <div class="flex w-auto items-center justify-center">
        <ul
          class="mx-4 flex flex-row items-center justify-center gap-1 rounded-lg border-0 font-medium md:gap-4"
        >
          <li>
            <nuxt-link
              to="/guides/"
              class="header-link"
              aria-current="page"
              title="Drawing guides"
            >
              <div class="hidden md:block">Guides</div>
              <div class="px-3 py-1.5 md:hidden">
                <font-awesome-icon :icon="['fa', 'book']" />
              </div>
            </nuxt-link>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/MLPdrawingschool/wiki/biweekly"
              target="_blank"
              class="header-link"
              title="Drawing challanges"
            >
              <div class="hidden md:block">Challenges</div>
              <div class="px-3 py-1.5 md:hidden">
                <font-awesome-icon :icon="['fa', 'hat-cowboy-side']" />
              </div>
            </a>
          </li>
          <li>
            <nuxt-link
              to="/prompts"
              class="header-link"
              title="Drawing prompt generator"
            >
              <div class="hidden md:block">Prompt Generator</div>
              <div class="px-3 py-1.5 md:hidden">
                <font-awesome-icon :icon="['fa', 'dice']" />
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <select
        v-model="colorMode.preference"
        class="hidden rounded-xl px-2 py-1.5 pr-8 dark:border-gray-700 dark:bg-gray-900 dark:text-white sm:block"
      >
        <option value="system">System</option>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
      </select>
      <a
        href="#"
        class="block py-1 pl-3 text-lg text-white sm:hidden"
        @click.prevent="nextColorMode()"
      >
        <font-awesome-icon :icon="['fa', faColorIcon]" />
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const faColorIcon = computed(() => {
  if (colorMode.preference === "system") {
    return "desktop";
  } else if (colorMode.preference === "light") {
    return "sun";
  }
  return "moon";
});

const nextColorModeMap = new Map<string, string>();
nextColorModeMap.set("system", "light");
nextColorModeMap.set("light", "dark");
nextColorModeMap.set("dark", "system");

function nextColorMode() {
  const next = nextColorModeMap.get(colorMode.preference) || "light";
  colorMode.preference = next;
}
</script>

<style>
.header-link {
  @apply block rounded bg-transparent p-0 text-white transition-all;
  &:hover,
  &.router-link-exact-active {
    @apply text-primary-100;
  }
}
</style>
