// @flow
import React from "react"
import MainBoard from "./board/MainBoard"
import Hand from "./board/Hand"
import type { Position } from "../lib/game"
import type { Style } from "../types"

export class Board extends React.Component {
  props: {
    position: Position,
    style: Style,
    scale: number
  }
  static defaultProps = {
    style: {},
    scale: 1
  }

  render() {
    const { position, scale, style } = this.props
    return (
      <div style={style}>
        <WhiteHand hands={position.white_hand} scale={scale} />
        <MainBoard cells={position.cells} movedCell={position.movedCell} scale={scale} style={mainBoardStyle} />
        <BlackHand hands={position.black_hand} scale={scale} />
      </div>
    )
  }
}

export default Board

const WhiteHand = ({hands, scale}) => (
  <div style={handWrapperStyle(scale)}>
    <Hand color="white" hands={hands} scale={scale} />
  </div>
)

const BlackHand = ({hands, scale}) => (
  <div style={handWrapperStyle(scale)}>
    <Hand color="black" hands={hands} scale={scale} style={blackHandStyle} />
  </div>
)

const blackHandStyle = {
  bottom: 0,
  position: "absolute"
}

const mainBoardStyle = {
  float: "left"
}

const handWrapperStyle = scale => ({
  position: "relative",
  float: "left",
  height: scale * 454,
  width:  scale * 45
})