<template>
  <div>
    <TheHeadTags :title="metaTitle" :desc="metaDesc" :image="metaImage" />

    <Body class="bg-white text-black dark:bg-zinc-900 dark:text-white">
      <TheHeader />
      <div class="mx-auto mt-5 flex max-w-screen-md flex-col justify-center">
        <hgroup class="mx-5 mt-4">
          <h1 class="text-3xl font-bold" v-text="title" />
          <div v-if="subtitle" class="text-xl opacity-70" v-text="subtitle" />
        </hgroup>
        <div class="mx-5">
          <GuideContent>
            <hr />
            <slot />
          </GuideContent>
        </div>
      </div>
    </Body>
  </div>
</template>

<script setup lang="ts">
import "@fontsource/roboto";
import "@fontsource/roboto/700.css";

const { page } = useContent();

const { title, subtitle, description, image } = page.value;

// page meta info
const metaTitle = title
  ? `${title} - MLP Drawing School`
  : "MLP Drawing School";
let metaDesc = "We're a supportive and nurturing art community.";
if (description) {
  metaDesc = description;
} else if (subtitle) {
  metaDesc = subtitle;
}
const metaImage = image || "/preview.png";
</script>
