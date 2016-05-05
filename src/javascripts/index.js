import docReady from "doc-ready"
import Game from "lib/game.js"
import start from "gui"

docReady(() => {
  let kifu = document.getElementById('kifu').dataset.kifu
  let game = Game.parseText(kifu)
  let turn = 0
  if (location.hash) turn = parseInt(location.hash.substr(1))
  start(game, turn)
})
