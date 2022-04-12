<template lang="pug">
Teleport(to="#modals")
  .modal-overlay(v-if="open")
    .modal-container
      slot
</template>

<script setup>
const props = defineProps(["open"])
</script>

<style>
.modal-overlay {
  width: 100%;
  height: 100%;
  padding: 64px;
  box-sizing: border-box;
}

.modal-overlay:first-child {
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-container {
  margin: 0 auto;
  width: 100%;
  max-width: 480px;
  box-sizing: border-box;
  background-color: #dddddd;
  padding: 16px;
  border: 4px solid #333333;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 1px #666666 inset;;
}
</style>
