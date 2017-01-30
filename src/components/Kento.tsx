import * as React from "react"
import Paper from "material-ui/Paper"
import Board from "./Board"
import Header from "./Header"
import { MoveList } from "./MoveList"
import Comment from "./Comment"
import { GameControl } from "../types"
import { Game } from "../lib/game"

export const Kento = ({game, turn, control}: { game: Game, turn: number, control: GameControl }) => {
  const position = game.getPosition(turn)
  const comments = game.getComments(turn)
  const onClickBoard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.clientX - e.currentTarget.offsetLeft < e.currentTarget.offsetWidth / 2) {
      control.setTurn(turn - 1)
    } else {
      control.setTurn(turn + 1)
    }
  }
  return (
    <div className="row">
      <div className="col-sm-3">
        <Paper style={{margin: 10}}>
          <Header game={game} />
        </Paper>
        <Paper style={{padding: 10, margin: 10}}>
          <Comment comments={comments} />
        </Paper>
      </div>
      <div className="col-sm-6" onClick={onClickBoard}>
        <Paper style={{display: 'inline-block'}} zDepth={2}>
          <Board position={position} />
        </Paper>
      </div>
      <div className="col-sm-3">
        <MoveList game={game} turn={turn} onSelectTurn={control.setTurn} />
      </div>
    </div>
  )
}

      // <div className="info-wrapper">
      //   <GameInfo game={game} />
      //   <MoveList game={game} turn={turn} control={control} />
      //   <MoveMenu game={game} turn={turn} control={control} />
      //   <Comment comments={comments} />
      // </div>