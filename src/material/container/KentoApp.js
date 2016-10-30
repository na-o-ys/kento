// @flow
import { connect } from "react-redux"
import { Kento } from "../components/Kento.js"
import { setTurn } from "../actions"
import type { Dispatch } from "redux"
import type { Game } from "../lib/game"

export type State = {
  game: Game,
  turn: number,
  turnsRead: number
}

function mapStateToProps(state: State) {
  return {
    game: state.game,
    turn: state.turn
  }
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    control: {
      setTurn(turn) { dispatch(setTurn(turn)) }
    }
  }
}

const KentoApp = connect(mapStateToProps, mapDispatchToProps)(Kento)

export default KentoApp
