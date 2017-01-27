// @flow
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Header from './Header'
import { sample as game } from "../lib/game/sample"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

storiesOf('Header', module)
  .add('default', () => (
    <MuiThemeProvider>
      <Header game={game} />
    </MuiThemeProvider>
  ))