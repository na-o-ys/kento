import React from "react"
import { connect } from "react-redux"
import Kento from "../components/Kento.js"

const mapStateToProps = state => ({
  game: state.game,
  turn: state.turn
})

const KentoApp = connect(mapStateToProps)(Kento)

export default KentoApp
