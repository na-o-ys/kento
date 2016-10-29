// @flow
import JKFPlayer from "json-kifu-format"

export type Hand = {
  K: number,
  R: number,
  B: number,
  G: number,
  S: number,
  N: number,
  L: number,
  P: number
}
export type Position = {
  cells: Array<?Piece>,
  black_hand: Hand,
  white_hand: Hand,
  movedCell: number
} 
export class Game {
  player: JKFPlayer
  _jpKifu: string[]
  constructor(player: JKFPlayer) {
    this.player = player
  }

  static parseText(text): Game {
    return new Game(JKFPlayer.parseKIF(text))
  }

  get maxTurn(): number {
    return this.player.getMaxTesuu()
  }

  get jpKifu(): string[] {
    if (this._jpKifu) return this._jpKifu
    return this._jpKifu = this.player.getReadableKifuState().map(move => (move.kifu))
  }

  getPosition(turn: number): Position {
    this.player.goto(turn)
    let state = this.player.getState()
    let move = this.player.getMove()
    let movedCell = (move && move.to) ? 9 * (move.to.y - 1) + 9 - move.to.x : -1
    let cells: Array<?Piece> = []
    for (let r = 0; r < 9; r++) for (let f = 0; f < 9; f++) {
      let { color, kind } = state.board[8 - f][r]
      if (color && kind) {
        cells.push(boardCellToPiece({ color, kind }))
      } else cells.push(null)
    }
    let black_hand = zeroHand(), white_hand = zeroHand()
    for (let kind in state.hands[0]) {
      black_hand[pieceKindMap[kind]] = state.hands[0][kind]
    }
    for (let kind in state.hands[1]) {
      white_hand[pieceKindMap[kind]] = state.hands[1][kind]
    }
    return { cells, black_hand, white_hand, movedCell }
  }

  getTime(turn: number) {
    const move = this.player.kifu.moves[turn]
    if (move && move.time) return move.time
    return { now: { m: 0, s: 0 }, total: { h: 0, m: 0, s: 0 }}
  }

  getComments(turn: number) {
    return this.player.getComments(turn)
  }

  getHeader() {
    return this.player.kifu.header
  }
}

// type Piece = "K" | "R" | "B" | "G" | "S" | "N" | "L" | "P" |
//              "+R" | "+B" | "+S" | "+N" | "+L" | "+P" |
//              "k" | "r" | "b" | "g" | "s" | "n" | "l" | "p" |
//              "+r" | "+b" | "+s" | "+n" | "+l" | "+p"
export type Piece = string
let pieceKindMap: {[id:string]: Piece} = {
  "OU": "K",
  "HI": "R",
  "KA": "B",
  "KI": "G",
  "GI": "S",
  "KE": "N",
  "KY": "L",
  "FU": "P",
  "RY": "+R",
  "UM": "+B",
  "NG": "+S",
  "NK": "+N",
  "NY": "+L",
  "TO": "+P"
}

function boardCellToPiece(b: {color: boolean, kind: string}): Piece {
  let piece = pieceKindMap[b.kind]
  if (b.color) piece = piece.toLowerCase()
  return piece
}

function zeroHand(): Hand {
  return {
    K: 0,
    R: 0,
    B: 0,
    G: 0,
    S: 0,
    N: 0,
    L: 0,
    P: 0
  }
}

export default Game
