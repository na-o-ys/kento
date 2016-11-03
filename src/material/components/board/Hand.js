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

  sortHandPieces(hands: Hands) {
    return pieceDisplayOrder[this.props.color]
      .filter(piece => hands[piece] > 0)
      .map(piece => ({
        piece,
        count: hands[piece]
      }))
  }

  render() {
    return (
      <div style={{...getHandStyle(this.props.scale), ...this.props.style}}>
        {this.sortHandPieces(this.props.hands).map(hand => (
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
  white: ['p', 'l', 'n', 's', 'g', 'b', 'r'],
}

// const kinds = ['R', 'B', 'G', 'S', 'N', 'L', 'P'] // order
// export const Handd = ({ hands, color }) => {
//   let _kinds = (color == "black") ? kinds : kinds.slice().reverse()
//   let pieces = []
//   _kinds.forEach(kind => {
//     let piece = (color == "black") ? kind : kind.toLowerCase()
//     if (hands[kind] > 0) pieces.push([piece, hands[kind]])
//   })

//   return (
//     <div className={'hand ' + color}>
//       {pieces.map((piece, idx) => (
//         <HandCell key={idx} piece={piece[0]} count={piece[1]} />
//       ))}
//     </div>
//   )
// }

const HandCell = ({ piece, count }) => {
  let cellClasses = ["cell", "piece", piece.replace("+", "p")]
  let countClass = count > 1 ? "count" : "count hidden"
  return (
    <div className='hand-cell'>
      <span className={cellClasses.join(" ")}></span>
      <span className={countClass}>{count}</span>
    </div>
  )
}