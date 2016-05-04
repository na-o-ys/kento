import { combineReducers } from "redux"

function game(state = null, action) {
  return state
}

function turn(state = null, action) {
  return state
}

const reducers = combineReducers({ game, turn })

export default reducers
