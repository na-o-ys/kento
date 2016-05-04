import React from "react"
import Board from "./Board.js"
import MoveList from "./MoveList.js"

const Kento = ({ game, turn }) => {
  let position = game.getPosition(turn)
  return (
    <div className="kento">
      <Board position={position} />
      <MoveList game={game} position={position} />
    </div>
  )
}

export default Kento
