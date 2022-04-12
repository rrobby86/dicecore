<template lang="pug">
ModalOverlay(:open="active")
  .reset-root.flex-col.flex-gap-m
    button(@click="scores.clearScores();active=false") Reset scores
    button(@click="scores.clearAll();active=false") Reset all
    button(@click="active=false") Cancel
</template>

<script setup>
import { ref } from 'vue'
import { useScoresStore } from '../stores/scores'
import ModalOverlay from './ModalOverlay.vue'

const scores = useScoresStore()

const active = ref(false)

function open() {
  active.value = true
}

defineExpose({ open })
</script>
