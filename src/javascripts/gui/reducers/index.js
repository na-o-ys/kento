import { combineReducers } from "redux"
import { SET_TURN } from "../actions"

function game(state = null, action) {
  return state
}

function turn(state = 0, action) {
  switch (action.type) {
    case SET_TURN:
      history.replaceState(null, null, `#${action.turn}`)
      return action.turn
    default:
      return state
  }
}

const reducers = combineReducers({ game, turn })

export default reducers
