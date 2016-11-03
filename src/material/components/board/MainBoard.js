// @flow
import React from "react"
import Cell from "./Cell"
import type { Style } from "../../types"

export class MainBoard extends React.Component {
  props: {
    cells: Array<?string>,
    movedCell: number,
    style: Style,
    scale: number
  }
  static defaultProps = {
    style: {},
    scale: 1
  }

  rankCells(rankIdx: number) {
    return this.props.cells.slice(rankIdx * 9, (rankIdx + 1) * 9)
  }

  render() {
    return (
      <div style={getMainBoardStyle(this.props.scale)}>
        {[0,1,2,3,4,5,6,7,8].map(rankIdx => (
          <Rank key={rankIdx} cells={this.rankCells(rankIdx)} rankIdx={rankIdx} scale={this.props.scale} />
        ))}
      </div>
    )
  }
}

export default MainBoard

const getMainBoardStyle = (scale: number) => ({
  background: "url('img/masu_dot_xy.png'), url('img/ban_kaya_a.png')",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  height:  scale * (454 - 22),
  width:   scale * (410 - 22),
  padding: scale * 11,
})

const Rank = ({ cells, rankIdx, scale }) => (
  <div style={rankStyle}>
    {cells.map((piece, idx) => (
      <Cell key={idx} piece={piece} highlight={false} style={{ float: "left" }} scale={scale} />
    ))}
  </div>
)

const rankStyle = {
  // height: 50,
  // width: 500,
}
