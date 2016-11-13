// @flow
import { combineReducers } from "redux"
import { SET_GAME, SET_TURN, KENTO, RECEIVE_KENTO_RESULT } from "../actions"
import { Game, emptyGame } from "../lib/game"
import type { Action } from "../actions"

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

function showKento(state: boolean = false, action): boolean {
  switch (action.type) {
    case KENTO:
      return true
    default:
      return state
  }
}

function kentoResult(state: string = "", action): string {
  switch (action.type) {
    case RECEIVE_KENTO_RESULT:
      return action.RECEIVE_KENTO_RESULT
    default:
      return state
  }
}

export const reducers = combineReducers({ game, turn, turnsRead, showKento })
