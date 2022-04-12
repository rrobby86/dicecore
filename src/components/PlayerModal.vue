<template lang="pug">
ModalOverlay(:open="active")
  .playermod-root.flex-col.flex-gap-m
    input(v-model="data.name").playermod-name
    .playermod-palette
      button.playermod-color(
        v-for="col in COLORS"
        :key="col"
        :class="{selected:data.color===col}"
        :style="{backgroundColor:col}"
        @click="data.color=col"
      )
    button(@click="confirm") OK
    button(@click="active=false") Cancel
</template>

<script setup>
import { computed, ref, reactive } from 'vue'
import ModalOverlay from './ModalOverlay.vue'

const COLORS = ['#ff0000', '#ff8800', '#ffff00', '#00ff00', '#8888ff', '#2222ff', '#ff22ff', '#880088']

const emit = defineEmits(['confirmed'])

const active = ref(false)
const backref = ref(null)
const data = reactive({ name: '', color: null })

function open(id, initData={ name: '', color: null }) {
  active.value = true
  backref.value = id
  data.name = initData.name
  data.color = initData.color
}

function confirm() {
  active.value = false
  emit('confirmed', backref.value, data)
}

defineExpose({ open })
</script>

<style>
.playermod-palette {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.playermod-color {
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
}

.playermod-color.selected {
  border: 4px dashed black;
}
</style>
