export const SET_GAME = 'set_game'
export function setGame(game) {
  return { type: SET_GAME, game }
}

export const SET_TURN = 'set_turn'
export function setTurn(turn) {
  return { type: SET_TURN, turn }
}
