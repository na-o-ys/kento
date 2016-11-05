// @flow
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Header from './Header'
import { sample as game } from "../lib/game/sample"

storiesOf('Header', module)
  .add('default', () => (
    <Header game={game} />
  ))