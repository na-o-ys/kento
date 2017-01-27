// @flow
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import MoveList from './MoveList'
import { sample as game } from "../lib/game/sample"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from "react-tap-event-plugin"

injectTapEventPlugin()

storiesOf('MoveList', module)
  .add('default', () => (
    <MuiThemeProvider>
      <MoveList game={game} turn={6} onSelectTurn={action("selectTurn")}/>
    </MuiThemeProvider>
  ))