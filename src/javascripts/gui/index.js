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
  store.subscribe(() => {
    const { game, turnsRead } = store.getState()
    if (setDocumentTitle) setDocumentTitle(game, game.maxTurn - turnsRead)
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

function setKeyListener(store) {
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    const { turn } = store.getState()
    const { maxTurn } = store.getState().game
    if (e.keyCode == 37) {
      store.dispatch(setTurn(Math.max(turn - 1, 0)))
    }
    if (e.keyCode == 39) {
      store.dispatch(setTurn(Math.min(turn + 1, maxTurn)))
    }
  })
}

export default start
