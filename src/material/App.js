// @flow
import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import RaisedButton from "material-ui/RaisedButton"
import Paper from "material-ui/Paper"
import KentoApp from "./container/KentoApp"
import { reducers } from "./reducers"
import type { Game } from "./lib/game"

const App = store => (
  <MuiThemeProvider store={store}>
    <KentoApp />
  </MuiThemeProvider>
)

export const start = (game: Game, turn: number) => {
  let store = createStore(
    reducers,
    { game, turn, turnsRead: game.maxTurn }
  )

  ReactDOM.render(
    <App store={store}/>,
    document.getElementById("main")
  )
}

export function renderer() {

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