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
          <select value={this.props.turn} onChange={this.handleChange} className="table">
              {this.props.game.jpKifu.map((entry, idx) => (
                <option key={idx} value={idx}>
                  {idx}. {entry}
                </option>
              ))}
          </select>
        </div>
      </div>
    )
  }
}

let currentInterval = null
function animateScroll(container, offset, maxHeight) {
  if (currentInterval) clearInterval(currentInterval)
  const base = container.scrollTop
  const height = offset - base
  const duration = height / maxHeight * 800
  const interval = duration / 10
  const step = Math.PI / ( duration / interval )

  let count = 0
  currentInterval = setInterval(() => {
    if (count < duration / interval) {
        count += 1
        let diff = height * (1 - Math.cos(count * step)) / 2
        container.scrollTop = base + diff
    } else clearInterval(currentInterval);
  }, interval);
}

export default MoveMenu
