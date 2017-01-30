import { connect } from "react-redux"
import { Kento } from "../components/Kento"
import { setTurn } from "../actions"
import { Dispatch } from "redux"
import { Game } from "../lib/game"
import * as Perf from "react-addons-perf"

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

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    control: {
      setTurn(turn) { dispatch(setTurn(turn)) }
    }
  }
}

const KentoApp = connect(mapStateToProps, mapDispatchToProps)(Kento)

export default KentoApp
