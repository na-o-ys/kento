import { combineReducers } from "redux"
import { SET_GAME, SET_TURN } from "../actions"

function game(state = null, action) {
  switch (action.type) {
    case SET_GAME:
      return action.game
    default:
      return state
  }
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

function turnsRead(state = 0, action) {
  switch (action.type) {
    case SET_TURN:
      return Math.max(state, action.turn)
    default:
      return state
  }
}

const reducers = combineReducers({ game, turn, turnsRead })

export default reducers
