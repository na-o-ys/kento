// @flow
import injectTapEventPlugin from "react-tap-event-plugin"
import docReady from "doc-ready"
import axios from "axios"
import { startGame, registerGame } from "./App"
import Game from "./lib/game"

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
injectHeaders()

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

function injectHeaders() {
  let iconLink = document.createElement("link")
  iconLink.href = "https://fonts.googleapis.com/icon?family=Material+Icons"
  iconLink.rel = "stylesheet"
  document.head.appendChild(iconLink)

  let flexboxLink = document.createElement("link")
  flexboxLink.href = "//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
  flexboxLink.rel = "stylesheet"
  document.head.appendChild(flexboxLink)
}