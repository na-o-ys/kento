import docReady from "doc-ready"
import Game from "lib/game.js"
import start from "gui"
import axios from "axios"

function fetchKifu() {
  const elem = document.getElementById('kifu')
  if ('kifu' in elem.dataset) {
    return Promise.resolve(elem.dataset.kifu)
  }
  if ('url' in elem.dataset) {
    return axios.get(elem.dataset.url)
      .then(res => res.data)
  }
}

function loadGame() {
  return fetchKifu().then(Game.parseText)
}

docReady(() => {
  let turn = 0
  if (location.hash) turn = parseInt(location.hash.substr(1))
  loadGame()
    .then(game => start(game, turn))
    .catch(e => { throw e })
})
