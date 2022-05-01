<template lang="pug">
.main.flex-col.flex-gap-m
  .main-topbar.flex-row.flex-gap-m
    .main-title.flex-grow(@click="aboutModal.open") DiceCore
    .main-buttons.flex-row.flex-gap-m
      button.custom-btn(@click="playerModal.open(-1)")
        FAIcon(icon="user-plus" title="Add player")
      button.custom-btn(@click="scores.rank")
        FAIcon(icon="arrow-down-wide-short" title="Rank players by score")
      button.custom-btn(@click="scores.shuffle")
        FAIcon(icon="shuffle" title="Shuffle players")
      button.custom-btn(@click="resetModal.open")
        FAIcon(icon="eraser" title="Reset")
  .main-table.flex-grow
    table.scoretable
      TransitionGroup(name="player-rows")
        tr(v-for="player, pi in scores.scores" :key="player.id")
          td.player-cell(:style="playerStyle(player)")
            .player-root.flex-row.flex-gap-m
              .player-name.flex-grow {{ player.name }}
              .player-buttons.flex-row.flex-gap-m
                button.custom-btn(@click="playerModal.open(pi, player)")
                  FAIcon(icon="pencil" title="Edit" :color="colors[player.color].fg")
                button.custom-btn(@click="scores.removePlayer(pi)")
                  FAIcon(icon="user-minus" title="Remove" :color="colors[player.color].fg")
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
}

.main-topbar {
  align-items: flex-start;
  font-size: var(--text-size);
}

.main-title {
  font-size: 125%;
  cursor: pointer;
}

.main-buttons button {
  font-size: 150%;
  border: 1px dotted transparent;
}

.main-buttons button:focus {
  border-color: red;
}

.main-table {
  height: 100%;
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
  font-size: var(--text-size);
}

.player-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.player-buttons button {
  font-size: 100%;
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
