import docReady from "doc-ready"
import Game from "lib/game.js"
import startGUI from "gui"
import axios from "axios"

docReady(() => {
  let turn = 0
  if (location.hash) turn = parseInt(location.hash.substr(1))

  const kifuElem = document.getElementById('kifu')
  if ('kifu' in kifuElem.dataset) {
    const game = Game.parseText(kifuElem.dataset.kifu)
    setDocumentTitle(game, 0)
    startGUI(game, turn)
  }
  if ('url' in kifuElem.dataset) {
    subscribeGame(kifuElem.dataset.url, genGameListener(turn))
  }
})

function setDocumentTitle(game, unreadCount) {
  const countText = unreadCount != 0 ? `(${unreadCount}) ` : ""
  document.title = countText + game.getHeader()["棋戦"]
}

function genGameListener(turn) {
  let updateGame = null
  let isFirst = true
  return game => {
    if (isFirst) {
      setDocumentTitle(game, 0)
      updateGame = startGUI(
        game,
        turn,
        { setDocumentTitle }
      ).updateGame
      isFirst = false
    }
    updateGame(game)
  }
}

function subscribeGame(url, callback) {
  const fetchGame = () => axios.get(url)
      .then(res => callback(Game.parseText(res.data)))
  fetchGame()
  setInterval(fetchGame, 1 * 60 * 1000)
}
