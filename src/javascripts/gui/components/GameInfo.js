import React from "react"

const GameInfo = ({ game }) => {
  let header = game.getHeader()
  return (
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
  )
}

export default GameInfo
