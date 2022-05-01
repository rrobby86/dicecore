# DiceCore

A minimalistic scoreboard webapp for [Tumblin-Dice](https://boardgamegeek.com/boardgame/16747/tumblin-dice)

Available at [https://rrobby86.github.io/dicecore](https://rrobby86.github.io/dicecore)

## Usage

- Click <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/user-plus.svg" width="24" height="24"> to add a player and select their name and color
- Click on a round score to set it
  - Click on one of the four areas (1x to 4x) to select it, then click on dice on the left to add them to selected area
  - Click on a die inside an area to remove it
  - Total scores for each round and for each player are computed automatically
- Click <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/pencil.svg" width="24" height="24"> next to a player to change their name or color
- Click <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/user-minus.svg" width="24" height="24"> next to a player to remove them (scores are lost, can't be undone!)
- Click <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/arrow-down-wide-short.svg" width="24" height="24"> to sort players by descending score
- Click <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/shuffle.svg" width="24" height="24"> to sort players randomly (e.g. to determine turn order)
- Click <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/eraser.svg" width="24" height="24"> to clear all scores keeping the same players or to clear everything (can't be undone!)

### Data

All data is saved using local storage on your browser and persisted across visits.

## Next steps

_(in rough priority order)_

- HTML improvements for proper navigation
- dark theme and overall CSS improvement
- selectable number of rounds
- keep history of games and players

## Development

Based on [Vue.js](https://vuejs.org/) with [Vite](https://vitejs.dev/); using [Pug](https://pugjs.org/) for compactness

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
