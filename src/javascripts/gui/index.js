import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"
import KentoApp from "./container/KentoApp.js"
import JKFPlayer from "json-kifu-format"

import { setTurn } from "./actions"

function start(game, turn) {
  let store = createStore(
    reducers,
    { game, turn }
  )
  setKeyListener(store)
  render(
    <Provider store={store}>
      <KentoApp />
    </Provider>,
    document.getElementById("main")
  )
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
