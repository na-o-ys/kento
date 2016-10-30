// @flow
import React from "react"
import type { Game } from "../lib/game"

export const GameInfo = ({ game }: { game : Game }) => {
  let header = game.getHeader()
  return (
    <div className="game-info-wrapper">
      <div className="game-info">
        <div className="game">
          <div className="date">{header["開始日時"]}</div>
          <div className="title">{header["棋戦"]}</div>
        </div>
        <div className="players">
          <div className="black">☗{header["先手"]}</div>
          <div className="white">☖{header["後手"]}</div>
        </div>
      </div>
    </div>
  )
}
