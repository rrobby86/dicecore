<template lang="pug">
ModalOverlay(:open="active")
  .aboutroot.flex-col.flex-gap-m
    p.title DiceCore
    p A minimalistic scoreboard for #[a(href="https://boardgamegeek.com/boardgame/16747/tumblin-dice" target="_blank") Tumblin-Dice]
    p by rrobby86 / "barbap"
    a(href="https://github.com/rrobby86/dicecore" target="_blank") Help and source code
    button(@click="active=false") OK
</template>

<script setup>
import { ref } from 'vue'
import ModalOverlay from './ModalOverlay.vue'

const active = ref(false)

function open() {
  active.value = true
}

defineExpose({ open })
</script>

<style>
.aboutroot {
  text-align: center;
}

.aboutroot .title {
  font-size: 150%;
}

.aboutroot a {
  color: #0000dd;
  text-decoration: underline;
}
</style>
