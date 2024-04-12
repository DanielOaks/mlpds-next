<template>
  <nuxt-layout>
    <TheHeadTags :title="metaTitle" :desc="metaDesc" :image="metaImage" />

    <div class="mb-20">
      <div class="px-4">
        <img
          class="mx-auto mb-5 mt-12 w-40 max-w-full rounded-xl"
          :src="finelineImage"
        />
        <hgroup class="text-center">
          <h1 class="mb-2 text-3xl font-bold">MLP Drawing School</h1>
          <p class="text-xl">We're a supportive and nurturing art community.</p>
        </hgroup>
        <div class="mt-1 flex justify-center text-4xl">
          <a
            class="block px-2 py-2 text-[#ff5700]"
            target="_blank"
            title="MLPDS Reddit"
            href="https://www.reddit.com/r/MLPdrawingschool/"
          >
            <font-awesome-icon :icon="['fab', 'reddit']" />
          </a>
          <a
            class="block px-3 py-2 text-[#5865f2]"
            target="_blank"
            title="MLPDS Discord"
            href="https://discord.gg/PhtDzZwbBR"
          >
            <font-awesome-icon :icon="['fab', 'discord']" />
          </a>
          <a
            class="block px-2 py-2 text-[#ff0000]"
            target="_blank"
            title="MLPDS YouTube"
            href="https://www.youtube.com/channel/UCgwjWwwYwrgnNZX6VegUMWQ"
          >
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
        </div>
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
    day: 11,
    src: "/icons/02-14-valentines-ally.png",
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

const metaTitle = "MLP Drawing School";
const metaDesc = "We're a supportive and nurturing art community.";
const metaImage = "/preview.png";

definePageMeta({
  documentDriven: {
    page: false,
    surround: false,
  },
});
</script>
