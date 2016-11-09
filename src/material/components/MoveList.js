// @flow
import React from "react"
import ReactDOM from "react-dom"
import Drawer from "material-ui/Drawer"
import { List, ListItem } from "material-ui/List"
import { MenuItem } from "material-ui/Menu"
import {faintBlack, darkBlack, lightBlack} from 'material-ui/styles/colors'
import type { Game } from "../lib/game"
import type { GameControl } from "../types"
import type { TimeFormat } from "json-kifu-format"

export class MoveList extends React.Component {
  props: {
    game: Game,
    turn: number,
    control: GameControl
  }

  scrollToCurrentTurn(animate: boolean = false) {
    let topIdx = this.props.turn
    let bottomListNode: HTMLElement = ReactDOM.findDOMNode(this.refs[`kifu-${this.props.turn}`])
    let moveList: HTMLElement = ReactDOM.findDOMNode(this.refs["move-list"])
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

  handleTouchTap(turn: number) {
    this.props.control.setTurn(turn)
  }

  render() {
    const { game, turn } = this.props
    return (
      <Drawer openSecondary={true} width={200}>
        {game.jpKifu.map((entry, idx) => (
          <MoveEntry
            key={idx}
            turn={idx}
            kifuTxt={entry}
            usedTime={game.getTime(idx)}
            selected={idx == turn}
            onTouchTap={this.handleTouchTap.bind(this)}
          />
        ))}
      </Drawer>
    )
  }
}

class MoveEntry extends React.Component {
  props: {
    turn: number,
    kifuTxt: string,
    selected: boolean,
    usedTime: { now: TimeFormat, total: TimeFormat },
    onTouchTap: (turn: number) => void
  }
  static defaultProps = {
    selected: false,
    onTouchTap: _ => {}
  }

  usedTimeFormat() { return this.props.usedTime.now.m }

  render() {
    const { turn, kifuTxt, onTouchTap, selected } = this.props
    return (
      <MenuItem
        primaryText={
          <span>
            <small style={{color: lightBlack}}>{turn}.</small>
            &nbsp;{kifuTxt}&nbsp;
          </span>
        }
        secondaryText={
          <small style={{color: lightBlack}}>
            {this.usedTimeFormat()}
          </small>
        }
        style={selected ? { backgroundColor: faintBlack } : {}}
        onTouchTap={() => onTouchTap(turn)}
      />
    )
  }
}

let currentInterval = null
function animateScroll(container: HTMLElement, scrollTopTo: number , maxHeight: number) {
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
    } else if (currentInterval) clearInterval(currentInterval);
  }, interval);
}
