import { connect } from "react-redux"
import Kento from "../components/Kento.js"
import { setTurn } from "../actions"

const mapStateToProps = state => ({
  game: state.game,
  turn: state.turn
})

const mapDispatchToProps = dispatch => ({
  control: {
    setTurn(turn) { dispatch(setTurn(turn)) }
  }
})

const KentoApp = connect(mapStateToProps, mapDispatchToProps)(Kento)

export default KentoApp
