// @flow
import injectTapEventPlugin from "react-tap-event-plugin"
import docReady from "doc-ready"
import axios from "axios"
import { startGame, registerGame } from "./App"
import Game from "./lib/game"

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

docReady(() => {
  const kifuElem = document.getElementById('kifu')
  if ('kifu' in kifuElem.dataset) {
    const game = Game.parseText(kifuElem.dataset.kifu)
    startGame(game, getTurn())
  }
  if ('url' in kifuElem.dataset) {
    registerGame(genSubscribeKifu(kifuElem.dataset.url), getTurn())
  }
})

function getTurn() {
  if (location.hash) return parseInt(location.hash.substr(1))
  else return 0
}

function genSubscribeKifu(url) {
  return callback => {
    const fetchGame = () =>
      axios.get(url).then(res => callback(Game.parseText(res.data)))
    fetchGame()
    setInterval(fetchGame, 1 * 60 * 1000)
  }
}
