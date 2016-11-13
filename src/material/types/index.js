// @flow
export interface GameControl {
  setTurn(turn: number): void
  kento(game: Game, turn: number): void
}

export type Style = { [key: string]: string | number }
