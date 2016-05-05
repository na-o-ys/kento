import React from "react"
import ReactDOM from "react-dom"

class MoveList extends React.Component {
  scrollToCurrentTurn(animate = false) {
    let topIdx = Math.max(this.props.turn - 2, 0)
    let offset = ReactDOM.findDOMNode(this.refs[`kifu-${topIdx}`]).offsetTop
    let moveLists = document.getElementsByClassName("move-list")
    Array.forEach(moveLists, list => {
      if (animate) animateScroll(list, offset, list.children[0].clientHeight)
      else list.scrollTop = offset
    })
  }
  componentDidUpdate() { this.scrollToCurrentTurn(true) }
  componentDidMount() {
    setTimeout(() => window.requestAnimationFrame(
      () => this.scrollToCurrentTurn()
    ), 0)
  }
  render() {
    return (
      <div className="move-list-wrapper">
      <div className="move-list">
        <table className="table">
          <tbody>
            {this.props.game.jpKifu.map((entry, idx) => (
              <tr key={idx} ref={`kifu-${idx}`}>
                <MoveEntry idx={idx} entry={entry}
                  onClick={() => this.props.control.setTurn(idx)}
                  active={idx == this.props.turn} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    )
  }
}

const MoveEntry = ({ idx, entry, onClick, active }) => (
  <td className={active ? "active" : null} onClick={onClick}>
    {idx}. {entry}
  </td>
)

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

export default MoveList
