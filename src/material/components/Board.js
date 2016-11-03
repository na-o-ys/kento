// @flow
import React from "react"
import MainBoard from "./board/MainBoard"
import Hand from "./board/Hand"
import type { Position } from "../lib/game"

export const Board = ({ position }: { position: Position }) => (
  <div className="board">
    <Hand color="white" hands={position.white_hand} />
    <MainBoard cells={position.cells} movedCell={position.movedCell} />
    <Hand color="black" hands={position.black_hand} />
  </div>
)
