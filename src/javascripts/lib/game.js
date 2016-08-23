import JKFPlayer from "json-kifu-format"

class Game {
  constructor(player) {
    this.player = player
  }

  static parseText(text) {
    return new Game(JKFPlayer.parseKIF(text))
  }

  get maxTurn() {
    return this.player.getMaxTesuu()
  }

  get jpKifu() {
    if (this._jpKifu) return this._jpKifu
    return this._jpKifu = this.player.getReadableKifuState().map(move => (move.kifu))
  }

  getPosition(turn) {
    this.player.goto(turn)
    let state = this.player.getState()
    let move = this.player.getMove()
    let movedCell = move ? 9 * (move.to.y - 1) + 9 - move.to.x : -1
    let cells = []
    for (let r = 0; r < 9; r++) for (let f = 0; f < 9; f++) {
      cells.push(boardToCell(state.board[8 - f][r]))
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

  getTime(turn) {
    const move = this.player.kifu.moves[turn]
    if (move && move.time) return move.time
    return { now: { m: 0, s: 0 }, total: { h: 0, m: 0, s: 0 }}
  }

  getComments(turn) {
    return this.player.getComments(turn)
  }

  getHeader() {
    return this.player.kifu["header"]
  }
}

let pieceKindMap = {
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

function boardToCell(b) {
  let piece = pieceKindMap[b.kind]
  if (b.color) piece = piece.toLowerCase()
  return piece
}

function zeroHand() {
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
