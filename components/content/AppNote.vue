<template>
  <div
    class="my-3 rounded-xl border-2 border-b-4 border-secondary-400 bg-secondary-100 px-4 py-3"
  >
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
