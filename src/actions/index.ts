import Game from "../lib/game"

export type Action = SetGameAction | SetTurnAction

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
