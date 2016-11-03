// @flow
import React from "react"
import Cell from "./Cell"
import type { Style } from "../../types"

type Hands = { [key: string]: number }
export class Hand extends React.Component {
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
          <Cell key={hand.piece} piece={hand.piece} count={hand.count} scale={this.props.scale} />
        ))}
      </div>
    )
  }
}

export default Hand

const getHandStyle = (scale: number) => ({
  width:  scale * (43 + 2),
  height: scale * 48 * 7,
  background: "url('img/ban_dark.png')",
  backgroundRepeat: "no-repeat"
})

const pieceDisplayOrder = {
  black: ['R', 'B', 'G', 'S', 'N', 'L', 'P'],
  white: ['P', 'L', 'N', 'S', 'G', 'B', 'R'],
}
