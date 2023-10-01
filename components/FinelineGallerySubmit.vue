<template>
  <div v-if="runtimeConfig.public.finelineSubmitUrl !== ''" class="mt-4 flex">
    <div
      class="fineline-submit flex flex-col overflow-hidden rounded-2xl border-2 border-solid border-secondary-400 px-1 py-2 shadow-lg dark:border-secondary-700"
    >
      <h3 class="mx-5 text-center text-lg font-bold">Add your own Fineline</h3>
      <input
        v-if="state === 'condensed'"
        class="-mx-1 -mb-2 cursor-pointer pb-2 pt-1"
        type="button"
        value="See more"
        @click="state = 'expanded'"
      />
      <div v-if="loading === true" class="mx-3 text-center">Loading...</div>
      <div v-if="state === 'success'" class="mx-3 text-center">
        Submitted, thank you!
      </div>
      <div
        v-if="state === 'failed'"
        class="mx-3 text-center"
        v-text="errorMessage"
      />
      <FormKit
        v-if="state === 'expanded' && loading === false"
        class="flex flex-col"
        type="form"
        @submit="submitFineline"
      >
        <FormKit
          type="url"
          name="image"
          prefix-icon="fileImage"
          label="Image link"
          help="Preferrably a high-res link"
          placeholder="..."
          validation="required|url"
          validation-visibility="live"
        />
        <FormKit
          type="text"
          name="name"
          prefix-icon="tag"
          label="Your name"
          help="So we can credit you"
          placeholder="Fine Line"
          validation="required|length:1"
          validation-visibility="live"
        />
        <FormKit
          type="url"
          name="homepage"
          prefix-icon="link"
          label="Your homepage / social"
          help="Linked alongside your image"
          placeholder="..."
          validation="url"
          validation-visibility="live"
        />
      </FormKit>
    </div>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const state = ref("condensed");
const errorMessage = ref("");
const loading = ref(false);

type Fields = {
  image: string;
  name: string;
  homepage?: string;
};

const submitFineline = async (fields: Fields) => {
  loading.value = true;

  try {
    const results = await fetch(runtimeConfig.public.finelineSubmitUrl, {
      method: "POST",
      body: JSON.stringify({
        image: fields.image,
        artistName: fields.name,
        artistLink: fields.homepage,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const finalResult = await results.json();

    if (finalResult.succeeded) {
      state.value = "success";
    } else {
      // hmm
    }
  } catch (error) {
    state.value = "failed";
    errorMessage.value = String(error);
  }

  loading.value = false;
};
</script>

<style>
.fineline-submit {
  .formkit-outer {
    @apply mx-2 mt-2;
  }
  .formkit-outer[data-prefix-icon] {
    input[type="url"],
    input[type="text"] {
      @apply rounded-l-none;
    }
  }
  .formkit-inner {
    @apply flex items-center items-stretch;
  }
  .formkit-icon {
    @apply flex w-10 rounded-l-lg border border-r-0 border-zinc-600 bg-zinc-100 px-2 dark:border-black dark:bg-zinc-800;
  }
  .formkit-label {
    @apply font-bold;
  }
  input[type="url"],
  input[type="text"] {
    @apply rounded-lg dark:border-black dark:bg-zinc-900;
  }
  .formkit-help {
    @apply mt-1 text-sm;
  }
  .formkit-messages {
    @apply text-sm;
  }

  form > .formkit-messages {
    @apply mx-2 mt-2;
  }
  .formkit-actions button {
    @apply w-full;
  }

  [data-invalid] .formkit-messages {
    @apply text-red-500;
  }
}
</style>
