import React from "react"

const Controller = ({ control, game, turn }) => {
  let forward = () => { control.setTurn(Math.min(turn + 1, game.maxTurn)) }
  let backward = () => { control.setTurn(Math.max(turn - 1, 0)) }
  return (
    <div className="controller">
      <div className="control-area" onClick={backward} ></div>
      <div className="control-area" onClick={forward} ></div>
    </div>
  )
}

export default Controller
