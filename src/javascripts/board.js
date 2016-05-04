import React from "react"
import ReactDom from "react-dom"
import docReady from "doc-ready"

const Board = React.createClass({
  render() {
    const cellRows = this.props.cellRows.map((cellRow) => (
      <CellRow key={cellRow.id} cells={cellRow.cells} />
    ))
    return (
      <div className="board">
        {cellRows}
      </div>
    )
  }
})

const CellRow = React.createClass({
  render() {
    const cellNodes = this.props.cells.map((cell) => (
      <Cell key={cell.id} piece={cell.piece} />
    ))
    return (
      <div className="cellRow">
        {cellNodes}
      </div>
    )
  }
})

const Cell = React.createClass({
  render() {
    return (
      <div className="cell">
        {(() => {
          if (this.props.piece) {
            return <Piece piece={this.props.piece} />
            }
        })()}
      </div>
    )
  }
})

const Piece = React.createClass({
  render() {
    const className = ["piece", this.props.piece].join(' ')
    return (
      <div className={className}></div>
    )
  }
})

export function start() {
  ReactDom.render(
    <Board cellRows={cellRows} />,
    document.getElementById('example')
  )
}

const cellRows = [
  {id: 0, cells: [
    {id: 0, piece: "fu"},
    {id: 1, piece: "kin"},
    {id: 2},
    {id: 3, piece: "fu"},
    {id: 4, piece: "kin"},
    {id: 5},
    {id: 6, piece: "fu"},
    {id: 7, piece: "kin"},
    {id: 8}
  ]},
  {id: 1, cells: [
    {id: 0, piece: "fu"},
    {id: 1, piece: "kin"},
    {id: 2},
    {id: 3, piece: "fu"},
    {id: 4, piece: "kin"},
    {id: 5},
    {id: 6, piece: "fu"},
    {id: 7, piece: "kin"},
    {id: 8}
  ]},
  {id: 2, cells: [
    {id: 0, piece: "fu"},
    {id: 1, piece: "kin"},
    {id: 2},
    {id: 3, piece: "fu"},
    {id: 4, piece: "kin"},
    {id: 5},
    {id: 6, piece: "fu"},
    {id: 7, piece: "kin"},
    {id: 8}
  ]},
  {id: 3, cells: [
    {id: 0, piece: "fu"},
    {id: 1, piece: "kin"},
    {id: 2},
    {id: 3, piece: "fu"},
    {id: 4, piece: "kin"},
    {id: 5},
    {id: 6, piece: "fu"},
    {id: 7, piece: "kin"},
    {id: 8}
  ]},
  {id: 4, cells: [
    {id: 0, piece: "fu"},
    {id: 1, piece: "kin"},
    {id: 2},
    {id: 3, piece: "fu"},
    {id: 4, piece: "kin"},
    {id: 5},
    {id: 6, piece: "fu"},
    {id: 7, piece: "kin"},
    {id: 8}
  ]},
  {id: 5, cells: [
    {id: 0, piece: "fu"},
    {id: 1, piece: "kin"},
    {id: 2},
    {id: 3, piece: "fu"},
    {id: 4, piece: "kin"},
    {id: 5},
    {id: 6, piece: "fu"},
    {id: 7, piece: "kin"},
    {id: 8}
  ]},
  {id: 6, cells: [
    {id: 0, piece: "fu"},
    {id: 1, piece: "kin"},
    {id: 2},
    {id: 3, piece: "fu"},
    {id: 4, piece: "kin"},
    {id: 5},
    {id: 6, piece: "fu"},
    {id: 7, piece: "kin"},
    {id: 8}
  ]},
  {id: 7, cells: [
    {id: 0, piece: "fu"},
    {id: 1, piece: "kin"},
    {id: 2},
    {id: 3, piece: "fu"},
    {id: 4, piece: "kin"},
    {id: 5},
    {id: 6, piece: "fu"},
    {id: 7, piece: "kin"},
    {id: 8}
  ]},
  {id: 8, cells: [
    {id: 0, piece: "fu"},
    {id: 1, piece: "kin"},
    {id: 2},
    {id: 3, piece: "fu"},
    {id: 4, piece: "kin"},
    {id: 5},
    {id: 6, piece: "fu"},
    {id: 7, piece: "kin"},
    {id: 8}
  ]}
]
