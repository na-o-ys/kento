import docReady from "doc-ready"
import Game from "lib/game.js"
import start from "gui"

function loadGame() {
  let kifu = document.getElementById('kifu').dataset.kifu
  return Game.parseText(kifu)
}

docReady(() => {
  let game = loadGame()
  let turn = 0
  if (location.hash) turn = parseInt(location.hash.substr(1))
  start(game, turn)
})
