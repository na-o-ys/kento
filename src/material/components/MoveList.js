// @flow
import React from "react"
import ReactDOM from "react-dom"
import Drawer from "material-ui/Drawer"
import { List, ListItem } from "material-ui/List"
import { MenuItem } from "material-ui/Menu"
import SelectableList from "./SelectableList"
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'
import type { Game } from "../lib/game"
import type { GameControl } from "../types"
import type { TimeFormat } from "json-kifu-format"

export class MoveList extends React.Component {
  props: {
    game: Game,
    turn: number,
    control: GameControl
  }

  handleChange(turn: number) {
    this.props.control.setTurn(turn)
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

  usedTimeFormat(turn: number) { return this.props.game.getTime(turn).now.m }

  render() {
    return (
      <Drawer openSecondary={true} width={200}>
        <SelectableList value={this.props.turn}>
          {this.props.game.jpKifu.map((kifuTxt, idx) => (
            <ListItem
              key={idx}
              value={idx}
              onClick={() => this.handleChange(idx)}
              primaryText={
                <span>
                  <small style={{color: lightBlack}}>
                    {idx}.
                  </small>
                  &nbsp;{kifuTxt}&nbsp;
                  <small style={{color: lightBlack}}>
                    {this.usedTimeFormat(idx)}
                  </small>
                </span>
              }
            />
          ))}
        </SelectableList>
      </Drawer>
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
