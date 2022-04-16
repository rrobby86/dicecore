<template lang="pug">
mixin pip(x,y,g)
  circle.pip(cx=x cy=y r=8 v-if=g)

button.die
  svg(viewBox="0 0 100 100")
    path(:style="{fill:color}" d="M20 20h80v80h-80Z")
    path(:style="{fill:color}" d="M0 4l16 16v76l-16 -16Z")
    path(:style="{fill:color}" d="M4 0h76l16 16h-76Z")
    +pip(40,40,"pc")
    +pip(60,40,"ps")
    +pip(80,40,"po")
    +pip(60,60,"pm")
    +pip(40,80,"po")
    +pip(60,80,"ps")
    +pip(80,80,"pc")
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(["value", "color"])

const pc = computed(() => props.value >= 2)
const pm = computed(() => props.value % 2)
const po = computed(() => props.value >= 4)
const ps = computed(() => props.value === 6)
</script>

<style>
.die {
  width: var(--die-size);
  height: var(--die-size);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
}

.pip {
  fill: white;
}
</style>
