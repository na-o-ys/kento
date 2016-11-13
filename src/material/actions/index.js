// @flow
import type Game from "../lib/game"

export type Action = SetGameAction | SetTurnAction | RequestKentoAction

export const SET_GAME = 'set_game'
type SetGameAction = { type: 'set_game', game: Game }
export function setGame(game: Game): Action {
  return { type: SET_GAME, game }
}

export const SET_TURN = 'set_turn'
type SetTurnAction = { type: 'set_turn', turn: number }
export function setTurn(turn: number): Action {
  return { type: SET_TURN, turn }
}

export const REQUEST_KENTO = 'request_kento'
type RequestKentoAction = { type: 'request_kento', turn: number }
export function requestKento(turn: number): Action {
  return { type: REQUEST_KENTO, turn }
}

export const KENTO_RESULT = 'kento_result'
type KentoResultAction = { type: 'kento_result', turn: number }
export function kentoResult(id: string): any {
  return (dispatch, getState) => {
    let timer_id
	  let count = 0;

	  timer_id = setInterval((() => {
			count++
      fetch(`http://54.199.204.111:9292/results/${id}`)
        .then(response => response.text())
        .then(result => dispatch(receiveKentoResult(result)))
			if (count == 7) {
				clearInterval(timer_id)
			}
	  }), 2000)
    return fetch(`http://54.199.204.111:9292/results/${id}`)
      .then(response => response.text())
      .then(result => dispatch(receiveKentoResult(result)))
  } 
}

export const RECEIVE_KENTO_RESULT = 'receive_kento_result'
type ReceiveKentoResultAction = { type: 'receive_kento_result', result: string }
export function receiveKentoResult(result: string): any {
  console.log(result)
  return { type: RECEIVE_KENTO_RESULT, result }
}

export const KENTO = 'kento'
type KentoAction = { type: 'kento', turn: number }
export function kento(game: Game, turn: number): any {
  return (dispatch, getState) => {
    dispatch(requestKento(turn))
    return fetch(`http://54.199.204.111:9292/?moves=${game.getSfen(turn)}&time_sec=10`)
      .then(response => response.text())
      .then(id => dispatch(kentoResult(id)))
  }
}
