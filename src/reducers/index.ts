import { combineReducers } from "redux"
import { SET_GAME, SET_TURN } from "../actions"
import { Game, emptyGame } from "../lib/game"
import { Action } from "../actions"
import { State } from "../container/KentoApp"

function game(state: Game = emptyGame, action: Action): Game {
  switch (action.type) {
    case SET_GAME:
      return action.game
    default:
      return state
  }
}

function turn(state: number = 0, action: Action): number {
  switch (action.type) {
    case SET_TURN:
      history.replaceState(null, "", `#${action.turn}`)
      return action.turn
    default:
      return state
  }
}

function turnsRead(state: number = 0, action): number {
  switch (action.type) {
    case SET_TURN:
      return Math.max(state, action.turn)
    default:
      return state
  }
}

export const reducers = combineReducers<State>({ game, turn, turnsRead })