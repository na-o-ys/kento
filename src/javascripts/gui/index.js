import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"
import KentoApp from "./container/KentoApp.js"
import JKFPlayer from "json-kifu-format"

import { setGame, setTurn } from "./actions"

function start(game, turn, { setDocumentTitle }) {
  let store = createStore(
    reducers,
    { game, turn, turnsRead: game.maxTurn }
  )
  setKeyListener(store)
  store.subscribe(() => {
    const { game, turnsRead } = store.getState()
    setDocumentTitle(game, game.maxTurn - turnsRead)
  })

  render(
    <Provider store={store}>
      <KentoApp />
    </Provider>,
    document.getElementById("main")
  )

  return {
    updateGame(game) { store.dispatch(setGame(game)) }
  }
}

function setKeyListener(store) {
  let maxTurn = store.getState().game.maxTurn
  document.addEventListener('keydown', e => {
    let turn = store.getState().turn
    if (e.keyCode == 37) {
      store.dispatch(setTurn(Math.max(turn - 1, 0)))
    }
    if (e.keyCode == 39) {
      store.dispatch(setTurn(Math.min(turn + 1, maxTurn)))
    }
  })
}

export default start
