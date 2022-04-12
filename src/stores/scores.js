import { defineStore } from "pinia";

function initPlayerScores(rounds) {
  return [...Array(rounds)].map(r => [...Array(4)].map(s => []))
}

export const useScoresStore = defineStore('scores', {
  state: () => ({
    nextId: 0,
    rounds: 3,
    scores: []
  }),
  getters: {
    roundScores: (state) => {
      const result = []
      for (const player of state.scores) {
        const sums = []
        for (const round of player.scores) {
          var total = 0
          for (const [row, dice] of round.entries()) {
            for (const die of dice) {
              total += (row + 1) * die
            }
          }
          sums.push(total)
        }
        result.push(sums)
      }
      return result
    },
    totalScores: (state) => {
      const result = []
      for (const scores of state.roundScores) {
        var total = 0
        for (const score of scores) {
          total += score
        }
        result.push(total)
      }
      return result
    }
  },
  actions: {
    addPlayer(data) {
      this.scores.push({
        id: this.nextId,
        ...data,
        scores: initPlayerScores(this.rounds)
      })
      var maxId = 0
      for (var player of this.scores) {
        if (player.id > maxId) {
          maxId = player.id
        }
      }
      this.nextId = maxId + 1
    },
    updatePlayer(index, data) {
      this.scores[index].name = data.name
      this.scores[index].color = data.color
    },
    removePlayer(index) {
      this.nextId = this.scores[index].id
      this.scores.splice(index, 1)
    },
    shuffle() {
      for (let i = this.scores.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = this.scores[i]
        this.scores[i] = this.scores[j]
        this.scores[j] = temp
      }
    },
    rank() {
      const entries = [...Array(this.scores.length)].map((_, index) => ({ index, score: this.totalScores[index] }))
      entries.sort((a, b) => b.score - a.score)
      const sorted = entries.map((e) => this.scores[e.index])
      this.scores.splice(0, sorted.length, ...sorted)
    },
    clearScores() {
      for (var player of this.scores) {
        for (var round of player.scores) {
          for (var slot of round) {
            slot.splice(0)
          }
        }
      }
    },
    clearAll() {
      this.scores.splice(0)
      this.nextId = 0
    }
  },
  persist: true
})
