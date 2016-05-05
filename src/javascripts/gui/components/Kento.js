import React from "react"
import Board from "./Board.js"
import MoveList from "./MoveList.js"
import Controller from "./Controller.js"

const Kento = ({ game, turn, control }) => {
  location.hash = turn
  let position = game.getPosition(turn)
  return (
    <div className="kento">
      <div className="board-wrapper">
        <Board position={position} />
        <Controller control={control} game={game} turn={turn} />
      </div>
      <MoveList game={game} turn={turn} control={control} />
    </div>
  )
}

export default Kento
