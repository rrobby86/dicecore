<template lang="pug">
.main
  .main-topbar
    .main-title(@click="aboutModal.open") DiceCore
    .main-buttons
      button(@click="playerModal.open(-1)") Add
      button(@click="scores.shuffle") Shuffle
      button(@click="scores.rank") Rank
      button(@click="resetModal.open") Reset
  .main-table
    table.scoretable
      TransitionGroup(name="player-rows")
        tr(v-for="player, pi in scores.scores" :key="player.id")
          td.player-cell(:style="playerStyle(player)")
            .player-root
              .player-name {{ player.name }}
              .player-buttons
                button(@click="playerModal.open(pi, player)") M
                button(@click="scores.removePlayer(pi)") X
          td.score-cell(v-for="score, ri in scores.roundScores[pi]" @click="openScoreModal(pi,ri)") {{ score }}
          td.total-cell(:style="playerStyle(player)") {{ scores.totalScores[pi] }}
  ScoreModal(:target="shownScore" @close="shownScore=null")
  PlayerModal(ref="playerModal" @confirmed="playerModalConfirmed")
  ResetModal(ref="resetModal")
  AboutModal(ref="aboutModal")
</template>

<script setup>
import { ref } from 'vue'
import { useScoresStore } from '../stores/scores'
import { colors } from '../consts'
import ScoreModal from './ScoreModal.vue'
import PlayerModal from './PlayerModal.vue'
import ResetModal from './ResetModal.vue'
import AboutModal from './AboutModal.vue'

const scores = useScoresStore()

const shownScore = ref(null)
const playerModal = ref()
const resetModal = ref()
const aboutModal = ref()

const playerStyle = (player) => ({
  backgroundColor: colors[player.color].main,
  color: colors[player.color].fg,
})

function openScoreModal(player, round) {
  shownScore.value = { player, round }
}

function playerModalConfirmed(id, data) {
  if (id === -1) {
    scores.addPlayer(data)
  } else {
    scores.updatePlayer(id, data)
  }
}
</script>

<style>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.main-topbar {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.main-title {
  flex-grow: 1;
  font-size: 125%;
  cursor: pointer;
}

.main-buttons {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.main-table {
  height: 100%;
  flex-grow: 1;
  overflow-y: auto;
}

.scoretable {
  /* table-layout: fixed; */
  width: 100%;
  /* height: 100%; */
}

/* .scoretable div {
  min-height: 50px;
  max-height: 100px;
  overflow: hidden;
} */

.player-cell {
  background-color: #888888;
  padding: 8px;
}

.player-root {
  overflow: hidden;
  display: flex;
  flex-direction: row;
}

.player-name {
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.score-cell {
  width: 2rem;
  padding: 8px var(--large-hspace);
  text-align: center;
  font-size: var(--score-text-size);
  cursor: pointer;
}

.score-cell:hover {
  background-color: #dddddd;
}

.total-cell {
  width: 2.5rem;
  padding: 8px var(--large-hspace);
  text-align: center;
  font-size: var(--score-text-size);
}

.player-rows-move,
.player-rows-enter-active,
.player-rows-leave-active {
  transition: all 0.5s ease;
}

.player-rows-enter-from,
.player-rows-leave-to {
  opacity: 0;
}

.player-rows-leave-active {
  position: absolute;
}
</style>
