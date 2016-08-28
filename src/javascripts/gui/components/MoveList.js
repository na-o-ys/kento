import React from "react"
import ReactDOM from "react-dom"

class MoveList extends React.Component {
  scrollToCurrentTurn(animate = false) {
    let topIdx = this.props.turn
    let bottomListNode = ReactDOM.findDOMNode(this.refs[`kifu-${this.props.turn}`])
    let moveList = ReactDOM.findDOMNode(this.refs["move-list"])
    let scrollTopTo = bottomListNode.offsetTop + bottomListNode.clientHeight - moveList.clientHeight

    if (animate) animateScroll(moveList, scrollTopTo, moveList.children[0].clientHeight)
    else moveList.scrollTop = scrollTopTo
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
        <div className="move-list" ref="move-list">
          <table className="table">
            <tbody>
              {this.props.game.jpKifu.map((entry, idx) => (
                <tr key={idx} ref={`kifu-${idx}`}>
                  <MoveEntry idx={idx} entry={entry}
                    onClick={() => this.props.control.setTurn(idx)}
                    active={idx == this.props.turn}
                    game={this.props.game} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const MoveEntry = ({ idx, entry, onClick, active, game }) => {
  const ljust = n => {
    const str = n.toString()
    let fill = []
    while (fill.length + str.length < 2) fill.push("0")
    return fill.join() + str
  }
  const { now, total } = game.getTime(idx)
  return (
    <td className={active ? "active" : null} onClick={onClick}>
      {idx}. {entry} ( {now.m} / {total.h}:{ljust(total.m)} )
    </td>
  )
}

let currentInterval = null
function animateScroll(container, scrollTopTo, maxHeight) {
  if (currentInterval) clearInterval(currentInterval)
  const currentScrollTop = container.scrollTop
  const scrollAmmount = scrollTopTo - currentScrollTop
  const duration = scrollAmmount / maxHeight * 800
  const interval = duration / 10
  const step = Math.PI / ( duration / interval )

  let count = 0
  currentInterval = setInterval(() => {
    if (count < duration / interval) {
        count += 1
        let diff = scrollAmmount * (1 - Math.cos(count * step)) / 2
        container.scrollTop = currentScrollTop + diff
    } else clearInterval(currentInterval);
  }, interval);
}

export default MoveList
