<template>
  <div
    :class="{
      ponymote: true,
      floating: $slots.default === undefined && space === false,
      right: right,
    }"
  >
    <img :src="'/ponymotes/' + fix(mote) + '.png'" />
    <span v-if="$slots.default !== undefined">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  mote: String,
  right: Boolean,
  space: Boolean,
});

const fixedMotes: { [key: string]: string } = {
  a00: "ajlie",
  a03: "ajhappy",
  a05: "ajsup",
  a27: "scootaplease",
  b01: "ajcower",
  b05: "ajugh",
  b07: "ajwut",
  b24: "squintyjack",
  b39: "ppseesyou",
  c02: "ohhi",
  c04: "ajfrown",
  c05: "raritysad",
  c14: "hmmm",
  c17: "loveme",
  c23: "derpyhappy",
  c28: "angel",
  e07: "ajconfused",
  e25: "rdsalute",
  e26: "cheerilee",
  rb11: "ajsly",
};

function fix(mote?: string) {
  if (mote) {
    // >.>
    mote = mote.replace("cadance", "cadence");
  }
  if (mote && mote in fixedMotes) {
    return fixedMotes[mote];
  }
  return mote;
}
</script>

<style>
p + .ponymote {
  margin-top: 1em;
}
.ponymote {
  display: flex;
  align-items: center;
  margin-bottom: 0.3em;
  &.floating {
    display: block;
    float: left;
    margin-top: 10px;
    margin-right: 1em;
  }
  &.right img {
    transform: scaleX(-1);
  }
  img {
    height: 70px;
  }
  span {
    display: block;
    margin-left: 0.7em;
    opacity: 0.66;
  }
  + .ponymote {
    margin-top: 0.6em;
  }
}
</style>
