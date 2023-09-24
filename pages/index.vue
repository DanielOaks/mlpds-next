<template>
  <nuxt-layout>
    <div class="mb-10">
      <img
        class="mx-auto my-6 w-40 max-w-full rounded-xl"
        :src="finelineImage"
      />
      <hgroup class="text-center">
        <h1 class="mb-2 text-3xl font-bold">MLP Drawing School</h1>
        <p class="text-xl">We're a supportive and nurturing art community.</p>
      </hgroup>
      <div class="flex justify-center">
        <a
          class="block px-4 py-2"
          target="_blank"
          href="https://www.reddit.com/r/MLPdrawingschool/"
          >Reddit</a
        >
        <a
          class="block px-4 py-2"
          target="_blank"
          href="https://discord.gg/PhtDzZwbBR"
          >Discord</a
        >
        <a
          class="block px-4 py-2"
          target="_blank"
          href="https://www.youtube.com/channel/UCgwjWwwYwrgnNZX6VegUMWQ"
          >Youtube</a
        >
      </div>
      <FinelineGallery />
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
const icons = [
  {
    month: 1,
    day: 1,
    src: "/icons/default.png",
  },
  {
    month: 1,
    day: 3,
    src: "/icons/12-01-winter-len.png",
  },
  {
    month: 2,
    day: 16,
    src: "/icons/02-16-german-carnival-bfc.png",
  },
  {
    month: 3,
    day: 1,
    src: "/icons/03-01-spring-len.png",
  },
  {
    month: 6,
    day: 1,
    src: "/icons/06-01-pride-cpc.png",
  },
  {
    month: 7,
    day: 1,
    src: "/icons/07-01-summer-len.png",
  },
  {
    month: 9,
    day: 1,
    src: "/icons/09-01-fall-len.png",
  },
  {
    month: 10,
    day: 1,
    src: "/icons/10-01-halloween-cpc.png",
  },
  {
    month: 11,
    day: 5,
    src: "/icons/09-01-fall-len.png",
  },
  {
    month: 12,
    day: 1,
    src: "/icons/12-01-winter-len.png",
  },
];

const finelineImage = ref(icons[0].src);

const today = new Date();

for (const entry of icons) {
  const monthMatches = today.getMonth() + 1 >= entry.month;
  const dayMatches =
    today.getMonth() + 1 > entry.month || today.getDate() >= entry.day;

  if (monthMatches && dayMatches) {
    finelineImage.value = entry.src;
  }
}

if (today.getMonth() === 3 && today.getDate() < 3) {
  finelineImage.value = "/icons/april1st-bluey-cpc.jpg";
}

useHead({
  title: "",
});

definePageMeta({
  documentDriven: {
    page: false,
    surround: false,
  },
});
</script>
