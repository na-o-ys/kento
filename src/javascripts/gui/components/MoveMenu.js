import React from "react"
import ReactDOM from "react-dom"

class MoveMenu extends React.Component {
  handleChange(e) {
    this.props.control.setTurn(e.target.value)
  }
  render() {
    return (
      <div className="move-menu-wrapper">
        <div className="move-menu">
          <select value={this.props.turn} onChange={this.handleChange.bind(this)} className="form-control">
            {this.props.game.jpKifu.map((entry, idx) => (
              <MoveOption key={idx} game={this.props.game} entry={entry} idx={idx} />
            ))}
          </select>
        </div>
      </div>
    )
  }
}

const MoveOption = ({game, entry, idx}) => {
  const ljust = n => {
    const str = n.toString()
    let fill = []
    while (fill.length + str.length < 2) fill.push("0")
    return fill.join() + str
  }
  const { now, total } = game.getTime(idx)
  return (
    <option value={idx}>
      {idx}. {entry} ( {now.m} / {total.h}:{ljust(total.m)} )
    </option>
  )
}

export default MoveMenu
