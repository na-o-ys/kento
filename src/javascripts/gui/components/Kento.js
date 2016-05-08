import React from "react"
import Board from "./Board.js"
import MoveList from "./MoveList.js"
import Controller from "./Controller.js"
import GameInfo from "./GameInfo.js"

const Kento = ({ game, turn, control }) => {
  let position = game.getPosition(turn)
  return (
    <div className="kento">
      <div className="board-wrapper">
        <Board position={position} />
        <Controller control={control} game={game} turn={turn} />
      </div>
      <div className="info-wrapper">
        <GameInfo game={game} />
        <MoveList game={game} turn={turn} control={control} />
      </div>
    </div>
  )
}

export default Kento
