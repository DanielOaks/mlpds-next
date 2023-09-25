<template>
  <nuxt-layout>
    <TheHeadTags :title="metaTitle" :desc="metaDesc" :image="metaImage" />

    <div class="mx-auto mt-12 max-w-screen-lg px-4">
      <hgroup class="text-center">
        <h1 class="mb-2 text-4xl font-bold">Prompt generator</h1>
        <div class="text-xl opacity-80">
          Need something to draw? Click below!
        </div>
      </hgroup>
      <div class="my-5 flex flex-wrap gap-x-16 gap-y-2">
        <div class="flex items-center gap-2">
          <input
            id="requireImages"
            v-model="requireCharacterImages"
            class="rounded"
            type="checkbox"
            name="requireImages"
          />
          <label class="text-lg" for="requireImages">Require images</label>
        </div>

        <div class="flex items-center gap-2">
          <input
            id="allowUnnamed"
            v-model="allowUnnamed"
            class="rounded"
            type="checkbox"
            name="allowUnnamed"
          />
          <label class="text-lg" for="allowUnnamed">
            Allow unnamed characters
          </label>
        </div>
      </div>
      <div class="my-5 flex items-center gap-10">
        <label class="text-lg"> Include: </label>
        <Multiselect
          v-model="includeKinds"
          :multiple="true"
          :options="
            ['All'].concat(
              Object.keys(characterKindGroups).map(
                (key) => key.charAt(0).toUpperCase() + key.slice(1),
              ),
              Object.keys(characterKindMap).map(
                (key) => key.charAt(0).toUpperCase() + key.slice(1),
              ),
            )
          "
        />
      </div>
      <div class="my-5 flex flex-wrap gap-x-16 gap-y-2">
        <div class="flex items-center gap-2">
          <input
            id="gen4"
            v-model="includeFiM"
            class="rounded"
            type="checkbox"
            name="gen4"
          />
          <label class="text-lg" for="gen4">
            Friendship is Magic (Gen 4)
          </label>
        </div>

        <div class="flex items-center gap-2">
          <input
            id="gen5"
            v-model="includeANG"
            class="rounded"
            type="checkbox"
            name="gen5"
          />
          <label class="text-lg" for="gen5"> A New Generation (Gen 5) </label>
        </div>
      </div>
      <input
        class="mx-auto mb-10 block cursor-pointer rounded-xl bg-primary-400 px-4 py-3 text-xl text-white shadow transition-colors hover:bg-primary-600 active:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-800 dark:active:bg-primary-900"
        type="button"
        value="Generate"
        @click="generate()"
      />
      <div class="items-top my-6 flex flex-wrap justify-center gap-5">
        <div
          v-for="(char, i) in resultChars"
          :key="i"
          class="flex flex-col items-center rounded-xl bg-secondary-100 px-2 py-2 text-center dark:bg-secondary-900"
        >
          <div class="flex h-52 w-52 items-center justify-center">
            <img
              v-if="char.image !== undefined"
              class="max-h-full max-w-full rounded"
              :src="'/characters/' + char.image"
            />
          </div>
          <span class="mx-2 mt-1">{{ char.name }}</span>
        </div>
      </div>
      <div class="items-top my-6 flex justify-center gap-5">
        <div
          v-for="(location, i) in resultLocations"
          :key="i"
          class="flex flex-col text-center"
        >
          <div v-if="location.image !== undefined" class="image-bg">
            <img :src="'/locations/' + location.image" />
          </div>
          <span class="text-2xl font-bold">{{ location.subPlace }}</span>
          <span class="text-lg">{{ location.place }}</span>
        </div>
      </div>
      <div class="mt-10 text-center text-sm opacity-90">
        Includes content from
        <a
          class="text-link-light dark:text-link-dark"
          href="https://mlp.fandom.com/"
          >mlp.fandom.com</a
        >
        and
        <a
          class="text-link-light dark:text-link-dark"
          href="https://g5mlp.fandom.com/"
          >g5mlp.fandom.com</a
        >
        used under CC-BY-SA
      </div>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";
import characters from "@/assets/characters.json";
import locations from "@/assets/locations.json";

const metaTitle = "Drawing prompt generator";
const metaDesc = "Need something to draw? Generate characters and a location!";
const metaImage = "/preview.png";

definePageMeta({
  documentDriven: {
    page: false,
    surround: false,
  },
});

//
// characters
//

type Character = {
  slug: string;
  name: string;
  image?: string;
};

const resultChars: Character[] = reactive([]);

const characterKindGroups: { [key: string]: string[] } = {
  pony: ["earth", "pegasus", "unicorn", "alicorn"],
  pet: [
    "cat",
    "dog",
    "kelpie",
    "snapping turtle",
    "rabbit",
    "owl",
    "phoenix",
    "chicken",
    "pomeranian",
    "bunny",
    "tortoise",
  ],
};
const characterKindMap: { [key: string]: boolean } = {
  breezie: true,
  changeling: true,
  deer: true,
  "diamond dog": true,
  donkey: true,
  draconequus: true,
  dragon: true,
  griffon: true,
  hippogriff: true,
  kirin: true,
  minotaur: true,
  yak: true,
  zebra: true,
};

const requireCharacterImages = ref(true);
const allowUnnamed = ref(true);
const includeKinds = ref(["All"]);
const includeFiM = ref(true);
const includeANG = ref(true);

const kinds: string[] = [];
const firstSeasons: string[] = [];

for (const [key, value] of Object.entries(characters)) {
  // list of all possible first seasons
  if (!firstSeasons.includes(value.firstSeason)) {
    firstSeasons.push(value.firstSeason);
  }

  // find the series they are from
  characters[key].series = "fim";
  if (value.firstSeason === "ANG") {
    characters[key].series = "ang";
  }

  // list of all possible kinds
  if (value.kind !== "" && !kinds.includes(value.kind)) {
    kinds.push(value.kind);
  }

  // take the base kind and create list of applicable ones based on the above
  characters[key].kinds = []; // todo: tackle when typing characters above
  let assigned = characterKindMap[value.kind];
  if (value.kind !== "") {
    characters[key].kinds.push(value.kind);
  }
  for (const [groupName, groupEntries] of Object.entries(characterKindGroups)) {
    if (groupEntries.includes(value.kind)) {
      characters[key].kinds.push(groupName);
      assigned = true;
    }
  }
  if (!assigned) {
    characters[key].kinds.push("other");
  }
}

//
// locations
//

type Location = {
  slug: string;
  place: string;
  subPlace: string;
  image?: string;
};

const resultLocations: Location[] = reactive([]);

//
// generation
//

const generate = () => {
  // generate location
  const potentialLocations: string[] = [];

  for (const [key, value] of Object.entries(locations)) {
    if (value.series === "fim" && !includeFiM.value) {
      continue;
    }
    if (value.series === "ang" && !includeANG.value) {
      continue;
    }

    potentialLocations.push(key);
  }

  const resultLocationName =
    potentialLocations[Math.floor(Math.random() * potentialLocations.length)];

  // set resulting locations
  while (resultLocations.length > 0) {
    resultLocations.pop();
  }

  resultLocations.push({
    slug: resultLocationName,
    place: locations[resultLocationName].place,
    subPlace: locations[resultLocationName].subPlace,
  });

  // generate characters
  const potentialChars: string[] = [];
  const resultCharNames: string[] = [];

  const desiredKinds = includeKinds.value.map((name) => name.toLowerCase());

  for (const [key, value] of Object.entries(characters)) {
    if (value.name.toLowerCase().includes("unnamed") && !allowUnnamed.value) {
      continue;
    }
    if (value.imageName === undefined && requireCharacterImages.value) {
      continue;
    }

    if (value.series === "fim" && !includeFiM.value) {
      continue;
    }
    if (value.series === "ang" && !includeANG.value) {
      continue;
    }

    let includedInSelection =
      desiredKinds.length === 1 ? desiredKinds.includes("all") : false;
    if (!includedInSelection) {
      desiredKinds.forEach((kind) => {
        if (value.kinds.includes(kind)) {
          includedInSelection = true;
        }
      });
    }
    if (!includedInSelection) {
      continue;
    }

    potentialChars.push(key);
  }

  // assume 3 chars for now
  let i = 3;
  if (potentialChars.length <= i) {
    // shuffle results
    potentialChars
      .sort(() => Math.random() - 0.5)
      .forEach((name) => {
        resultCharNames.push(name);
      });
  } else {
    while (i > 0) {
      const newName =
        potentialChars[Math.floor(Math.random() * potentialChars.length)];
      if (!resultCharNames.includes(newName)) {
        resultCharNames.push(newName);
        i -= 1;
      }
    }
  }

  // set resulting characters
  while (resultChars.length > 0) {
    resultChars.pop();
  }

  resultCharNames.forEach((slug) => {
    resultChars.push({
      slug,
      name: characters[slug].name,
      image: characters[slug].imageName,
    });
  });
};
</script>
