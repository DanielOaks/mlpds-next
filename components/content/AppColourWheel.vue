<template>
  <div :class="{ colourChart: true, smol: small }"></div>
</template>

<script setup lang="ts">
defineProps({
  small: Boolean,
});
</script>

<style>
.colourChart {
  @apply mx-auto my-6 h-96 w-96 max-w-full rounded-full border-4 border-white bg-blend-screen shadow-xl;
  background: radial-gradient(
      circle closest-side,
      hsl(0, 0%, 100%),
      hsl(0, 0%, 0%) 90%
    ),
    conic-gradient(
      hsl(0, 100%, 50%),
      hsl(10, 100%, 50%),
      hsl(20, 100%, 50%),
      hsl(30, 100%, 50%),
      hsl(40, 100%, 50%),
      hsl(50, 100%, 50%),
      hsl(60, 100%, 50%),
      hsl(70, 100%, 50%),
      hsl(80, 100%, 50%),
      hsl(90, 100%, 50%),
      hsl(100, 100%, 50%),
      hsl(110, 100%, 50%),
      hsl(120, 100%, 50%),
      hsl(130, 100%, 50%),
      hsl(140, 100%, 50%),
      hsl(150, 100%, 50%),
      hsl(160, 100%, 50%),
      hsl(170, 100%, 50%),
      hsl(180, 100%, 50%),
      hsl(190, 100%, 50%),
      hsl(200, 100%, 50%),
      hsl(210, 100%, 50%),
      hsl(220, 100%, 50%),
      hsl(230, 100%, 50%),
      hsl(240, 100%, 50%),
      hsl(250, 100%, 50%),
      hsl(260, 100%, 50%),
      hsl(270, 100%, 50%),
      hsl(280, 100%, 50%),
      hsl(290, 100%, 50%),
      hsl(300, 100%, 50%),
      hsl(310, 100%, 50%),
      hsl(320, 100%, 50%),
      hsl(330, 100%, 50%),
      hsl(340, 100%, 50%),
      hsl(350, 100%, 50%),
      hsl(0, 100%, 50%)
    );
}
.colourChart.smol {
  @apply h-40 w-40 border-2;
}

/*
$stops: ();
$totalStops: 36;
$radius: 0.9;

@for $i from 0 through $totalStops {
  $stops: append(
    $stops,
    hsl($i * calc(360deg / $totalStops), 100%, 50%),
    comma
  );
}

.colourChart {
  margin: 1.5em auto;
  width: 25em;
  height: 25em;
  max-width: 100%;
  &.smol {
    width: 10em;
    height: 10em;
    border: 2px solid #fff;
  }

  background: #000;
  background: radial-gradient(
      circle closest-side,
      hsl(0, 0%, 100%),
      hsl(0, 0%, 0%) 90%
    ),
    conic-gradient($stops);
  border: 5px solid #fff;
  box-shadow: 0px 5px 10px rgba(#000, 0.5);
  background-blend-mode: screen;
  border-radius: 50%;
}*/
</style>
