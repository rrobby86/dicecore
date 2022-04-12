<template lang="pug">
button.die(:style="{backgroundColor:color}") {{ value }}
</template>

<script setup>
defineProps(["value", "color"])
</script>

<style>
.die {
  border: 0;
  width: var(--die-size);
  height: var(--die-size);
  font-size: var(--score-text-size);
  text-align: center;
  cursor: pointer;
}
</style>
