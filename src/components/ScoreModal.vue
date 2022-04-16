<template lang="pug">
ModalOverlay(:open="target !== null")
  .scoremod-root.flex-col.flex-gap-m
    .scoremod-main.flex-row.flex-gap-m
      .scoremod-dice.flex-col.flex-gap-m
        Die(v-for="v in 6" :key="v" :value="v" v-bind="diceProps" @click="addDie(v)")
      .scoremod-slots.flex-grow.flex-col.flex-gap-m
        .scoremod-slot(v-for="m in [3, 2, 1, 0]" :class="{selected:selectedSlot===m}" @click="selectedSlot=m")
          .scoremod-slot-label {{ m+1 }}x
          Die(v-for="(d, i) in slotScores()[m]" :key="i" :value="d" v-bind="diceProps" @click="removeDie(m, i)")
    .scoremod-footer.flex-row.flex-gap-m
      button.scoremod-ok(@click="target=null") OK
      .scoremod-total.flex-grow {{ totalScore }}
</template>

<script setup>
import { computed, ref } from 'vue'
import { useScoresStore } from '../stores/scores'
import { colors } from '../consts'
import ModalOverlay from './ModalOverlay.vue'
import Die from './Die.vue'

defineEmits(["close"])
const props = defineProps(["target"])

const scores = useScoresStore()
const slotScores = () => scores.scores[props.target.player].scores[props.target.round]
const diceProps = computed(() => ({
  color: colors[scores.scores[props.target.player].color].main,
  pips: colors[scores.scores[props.target.player].color].fg
}))
const dieColor = computed(
  () => scores.scores[props.target.player].color.main
)
const totalScore = computed(
  () => scores.roundScores[props.target.player][props.target.round]
)

const selectedSlot = ref(null)

function addDie(value) {
  if (selectedSlot.value !== null) {
    slotScores()[selectedSlot.value].push(value)
  }
}

function removeDie(slot, index) {
  slotScores()[slot].splice(index, 1)
}
</script>

<style>
.scoremod-slot {
  background-color: white;
  border: 1px solid #aaaaaa;
  border-radius: 8px;
  box-shadow: 1px 1px 4px 1px #999999 inset;
  padding: 8px;
  height: 4rem;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  position: relative;
}

.selected {
  background-color: #ddddbb;
}

.scoremod-slot-label {
  position: absolute;
  left: 0.5rem;
  top: 0.3rem;
}

.scoremod-ok {
  font-size: var(--score-text-size);
}

.scoremod-total {
  font-size: var(--score-text-size);
  text-align: right;
}
</style>
