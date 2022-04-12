# DiceCore

A minimalistic scoreboard webapp for [Tumblin-Dice](https://boardgamegeek.com/boardgame/16747/tumblin-dice)

Available at [https://rrobby86.github.io/dicecore](https://rrobby86.github.io/dicecore)

## Usage

- Click _Add_ to add a player and select their name and color
- Click on a round score to set it
  - Click on one of the four areas (1x to 4x) to select it, then click on dice on the left to add them to selected area
  - Click on a die inside an area to remove it
  - Total scores for each round and for each player are computed automatically
- Click _M_ next to a player to change their name or color
- Click _X_ next to a player to remove them (scores are lost, can't be undone!)
- Click _Rank_ to sort players by descending score
- Click _Shuffle_ to sort players randomly (e.g. to determine turn order)
- Click _Reset_ to clear all scores keeping the same players or to clear everything (can't be undone!)

### Data

All data is saved using local storage on your browser and persisted across visits.

## Next steps

_(in rough priority order)_

- proper die graphic in place of squares with numbers
- icons in place of buttons
- nicer player colors
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
