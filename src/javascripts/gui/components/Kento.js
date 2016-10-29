// @flow
import React from "react"
import { Board } from "./Board"
import { MoveList } from "./MoveList"
import { MoveMenu } from "./MoveMenu"
import { Controller } from "./Controller"
import { GameInfo } from "./GameInfo"
import { Comment } from "./Comment"
import type { GameControl } from "../types"
import type { Game } from "../../lib/game"

export type State = {
  game: Game,
  turn: number,
  turnsRead: number
}

export const Kento = ({game, turn, control}: { game: Game, turn: number, control: GameControl }) => {
  const position = game.getPosition(turn)
  const comments = game.getComments(turn)
  return (
    <div className="kento">
      <div className="board-wrapper">
        <Board position={position} />
        <Controller control={control} game={game} turn={turn} />
      </div>
      <div className="info-wrapper">
        <GameInfo game={game} />
        <MoveList game={game} turn={turn} control={control} />
        <MoveMenu game={game} turn={turn} control={control} />
        <Comment comments={comments} />
      </div>
    </div>
  )
}
