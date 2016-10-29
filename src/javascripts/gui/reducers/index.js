// @flow
import { combineReducers } from "redux"
import { SET_GAME, SET_TURN } from "../actions"
import type { Action } from "../actions"
import type { Game } from "../../lib/game"

function game(state: Game, action: Action): Game {
  switch (action.type) {
    case SET_GAME:
      return action.game
    default:
      return state
  }
}

function turn(state: number, action: Action): number {
  switch (action.type) {
    case SET_TURN:
      history.replaceState(null, "", `#${action.turn}`)
      return action.turn
    default:
      return state
  }
}

function turnsRead(state: number, action): number {
  switch (action.type) {
    case SET_TURN:
      return Math.max(state, action.turn)
    default:
      return state
  }
}

export const reducers = combineReducers({ game, turn, turnsRead })
