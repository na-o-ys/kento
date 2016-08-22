import React from "react"
import Board from "./Board.js"
import MoveList from "./MoveList.js"
import MoveMenu from "./MoveMenu.js"
import Controller from "./Controller.js"
import GameInfo from "./GameInfo.js"
import Comment from "./Comment.js"

const Kento = ({ game, turn, control }) => {
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

export default Kento
