// @flow
import { connect } from "react-redux"
import { Kento } from "../components/Kento.js"
import { setTurn, kento } from "../actions"
import type { Dispatch } from "redux"
import type { Game } from "../lib/game"

export type State = {
  game: Game,
  turn: number,
  turnsRead: number,
  showKento: boolean,
  kentoResult: string
}

function mapStateToProps(state: State) {
  return {
    game: state.game,
    turn: state.turn,
    showKento: state.showKento,
    kentoResult: state.kentoResult
  }
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    control: {
      setTurn(turn) { dispatch(setTurn(turn)) },
      kento(game, turn) { dispatch(kento(game, turn)) }
    }
  }
}

const KentoApp = connect(mapStateToProps, mapDispatchToProps)(Kento)

export default KentoApp
