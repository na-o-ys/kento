import * as React from "react"
import ReactDOM from "react-dom"
import Drawer from "material-ui/Drawer"
import { List, ListItem } from "material-ui/List"
import { MenuItem } from "material-ui/Menu"
import {faintBlack, darkBlack, lightBlack} from 'material-ui/styles/colors'
import { Game } from "../lib/game"
import { JsonKifuFormat } from "../types"

type MoveListProps = {
  game: Game,
  turn: number,
  onSelectTurn: (turn: number) => void
}

export const MoveList = ({game, turn, onSelectTurn}: MoveListProps) => (
  <Drawer openSecondary={true} width={200}>
    {game.jpKifu.map((entry, idx) => (
      <MoveEntry
        key={idx}
        turn={idx}
        kifuTxt={entry}
        usedTime={game.getTime(idx)}
        selected={idx == turn}
        onTouchTap={onSelectTurn}
      />
    ))}
  </Drawer>
)

type MoveEntryProps = {
  turn: number,
  kifuTxt: string,
  usedTime: { now: JsonKifuFormat.TimeFormat, total: JsonKifuFormat.TimeFormat },
  onTouchTap: (turn: number) => void,
  selected?: boolean
}

export const MoveEntry = ({turn, kifuTxt, usedTime, onTouchTap, selected = false}: MoveEntryProps) => (
  <MenuItem
    primaryText={
      <span>
        <small style={{color: lightBlack}}>{turn}.</small>
        &nbsp;{kifuTxt}&nbsp;
      </span>
    }
    secondaryText={
      <small style={{color: lightBlack}}>
        {usedTime.now.m}
      </small>
    }
    style={selected ? { backgroundColor: faintBlack } : {}}
    onTouchTap={() => onTouchTap(turn)}
  />
)

export default MoveList
