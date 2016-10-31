// @flow
import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import RaisedButton from "material-ui/RaisedButton"
import Paper from "material-ui/Paper"
import KentoApp from "./container/KentoApp"
import { reducers } from "./reducers"
import { setGame } from "./actions"
import type { Game } from "./lib/game"
import type { Store } from "redux"
import type { State } from "./container/KentoApp"

const App = store => (
  <Provider store={store}>
    <MuiThemeProvider>
      <KentoApp />
    </MuiThemeProvider>
  </Provider>
)

export function startGame(game: Game, turn: number) {
  return initializeRender(game, turn)
}

type GameListener = (game: Game) => void
export function registerGame(subscribe: (x: GameListener) => void, turn: number) {
  let store: Store<State, *>
  subscribe(game => {
    if (!store) {
      store = initializeRender(game, turn)
    } else {
      store.dispatch(setGame(game))
    }
  })
}

function initializeRender(game: Game, turn: number) {
  let store = createStore(
    reducers,
    { game, turn, turnsRead: game.maxTurn }
  )
  ReactDOM.render(
    <App store={store} />,
    document.getElementById("main")
  )
  return store
}

const SampleComponent = () => (
  <RaisedButton label="Default" />
)
// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// }
// const Board = () => (
//   <Paper style={style} zDepth={1} />
// )