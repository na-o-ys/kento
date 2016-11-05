// @flow
import React from "react"
import Cell from "./Cell"
import type { Style } from "../../types"

type Hands = { [key: string]: number }
export class VHand extends React.Component {
  props: {
    hands: Hands,
    color: string,
    style: Style,
    scale: number
  }
  static defaultProps = {
    style: {},
    scale: 1
  }

  formatHandPieces() {
    const { color, hands } = this.props
    return pieceDisplayOrder[color]
      .filter(piece => hands[piece] > 0)
      .map(piece => ({
        piece: color == "black" ? piece : piece.toLowerCase(),
        count: hands[piece]
      }))
  }

  render() {
    return (
      <div style={{...getHandStyle(this.props.scale), ...this.props.style}}>
        {this.formatHandPieces().map(hand => (
          <Cell key={hand.piece} piece={hand.piece} count={hand.count} scale={this.props.scale} style={getCellStyle(this.props.color)} />
        ))}
      </div>
    )
  }
}

export default VHand

const getHandStyle = (scale: number) => ({
  width:  scale * 390,
  height: scale * 48,
  background: "url('img/ban_dark.png')",
  paddingLeft: scale * 10,
  paddingRight: scale * 10
})

const getCellStyle = (color: string) => ({
  float: color == "black" ? "left" : "right"
})

const pieceDisplayOrder = {
  black: ['R', 'B', 'G', 'S', 'N', 'L', 'P'],
  white: ['P', 'L', 'N', 'S', 'G', 'B', 'R'],
}
