// @flow
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Hand from './Hand'

const blackHands = {
  'R': 1,
  'B': 2,
  'G': 3,
}

const whiteHands = {
  'r': 1,
  'b': 2,
  'g': 3,
}

storiesOf('Hand', module)
  .add('black', () => (
    <Hand hands={blackHands} color={"black"} />
  ))
  .add('white', () => (
    <Hand hands={whiteHands} color={"white"} />
  ))
  .add('black small', () => (
    <Hand hands={blackHands} color={"black"} scale={0.7} />
  ))
  .add('white small', () => (
    <Hand hands={whiteHands} color={"white"} scale={0.7} />
  ))