// @flow
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { reducers } from "./reducers"
import KentoApp from "./container/KentoApp.js"
import JKFPlayer from "json-kifu-format"
import { setGame, setTurn } from "./actions"
import type { Game } from "../lib/game"

type Callbacks = {
  setDocumentTitle: (game: Game, turn: number) => void
}
const defaultCallback: Callbacks = {
  setDocumentTitle: () => {}
}
function start(game: Game, turn: number, { setDocumentTitle }: Callbacks = defaultCallback) {
  let store = createStore(
    reducers,
    { game, turn, turnsRead: game.maxTurn }
  )
  setKeyListener(store)
  gTurn = turn
  gMaxTurn = game.maxTurn
  store.subscribe(() => {
    const { game, turnsRead } = store.getState()
    if (setDocumentTitle) setDocumentTitle(game, game.maxTurn - turnsRead)
    const { turn } = store.getState()
    const { maxTurn } = store.getState().game
    gTurn = turn
    gMaxTurn = maxTurn
  })

  render(
    <Provider store={store}>
      <KentoApp />
    </Provider>,
    document.getElementById("main")
  )

  return {
    updateGame(game: Game) { store.dispatch(setGame(game)) }
  }
}

let gTurn
let gMaxTurn

function setKeyListener(store) {
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.keyCode == 37) {
      store.dispatch(setTurn(Math.max(gTurn - 1, 0)))
    }
    if (e.keyCode == 39) {
      store.dispatch(setTurn(Math.min(gTurn + 1, gMaxTurn)))
    }
  })
}

export default start
