<template>
  <div>
    <nav
      class="sticky left-0 top-0 z-20 w-full bg-primary-500 dark:bg-primary-600"
    >
      <div
        class="mx-auto flex max-w-screen-xl items-center justify-between p-4"
      >
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
        <div class="hidden w-auto items-center justify-center md:flex">
          <TheHeaderLinks />
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
        <a
          href="#"
          class="-my-1 block py-2 pl-3 text-lg text-white md:hidden"
          @click.prevent="toggleHamburgerMenu()"
        >
          <font-awesome-icon :icon="['fa', 'bars']"
        /></a>
      </div>
    </nav>
    <div
      v-if="showHamburgerMenu"
      class="hamburger-menu fixed left-0 top-0 z-10 box-border flex h-screen w-screen cursor-default select-none items-center justify-center bg-black bg-opacity-60 pt-20 backdrop-blur md:hidden"
    >
      <TheHeaderLinks />
    </div>
  </div>
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

const showHamburgerMenu = ref(false);

function toggleHamburgerMenu() {
  showHamburgerMenu.value = !showHamburgerMenu.value;
}
</script>

<style>
.header-link {
  @apply hidden items-center rounded bg-transparent p-0 text-white transition-all md:flex;
  &:hover,
  &.router-link-exact-active {
    @apply text-primary-100;
  }
}
.hamburger-menu {
  ul {
    @apply flex-col;
  }
  .header-link {
    @apply flex px-3 py-2;
  }
}
.header-small-icon {
  @apply relative py-1.5 pl-2.5 pr-1.5;
}
</style>
