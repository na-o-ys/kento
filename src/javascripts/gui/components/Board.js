import React from "react"

const Board = ({ position }) => (
  <div className="board">

    <div className="hand-outer">
      <Hand color="white" hands={position.white_hand} />
    </div>

    <MainBoard cells={position.cells} movedCell={position.movedCell} />

    <div className="hand-outer">
      <Hand color="black" hands={position.black_hand} />
    </div>
  </div>
)

const MainBoard = ({ cells, movedCell }) => (
  <div className='main-board'>
    {cells.map((cell, idx) => (
      <Cell key={idx} piece={cell} highlight={idx == movedCell}/>
    ))}
  </div>
)

const Cell = ({ piece, highlight }) => {
  let classes = ['cell']
  if (piece) classes.push('piece', piece.replace("+", "p"))
  if (highlight) classes.push('highlight')
  return (
    <span className={classes.join(' ')}></span>
  )
}

let kinds = ['R', 'B', 'G', 'S', 'N', 'L', 'P'] // order
const Hand = ({ hands, color }) => {
  let _kinds = (color == "black") ? kinds : kinds.slice().reverse()
  let pieces = []
  _kinds.forEach(kind => {
    let piece = (color == "black") ? kind : kind.toLowerCase()
    if (hands[kind] > 0) pieces.push([piece, hands[kind]])
  })

  return (
    <div className={'hand ' + color}>
      {pieces.map((piece, idx) => (
        <HandCell key={idx} piece={piece[0]} count={piece[1]} />
      ))}
    </div>
  )
}

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

export default Board
