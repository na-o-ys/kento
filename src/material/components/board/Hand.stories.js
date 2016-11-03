// @flow
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Hand from './Hand'

const hands = {
  'R': 1,
  'B': 2,
  'G': 3,
}

storiesOf('Hand', module)
  .add('black', () => (
    <Hand hands={hands} color={"black"} />
  ))
  .add('white', () => (
    <Hand hands={hands} color={"white"} />
  ))
  .add('black small', () => (
    <Hand hands={hands} color={"black"} scale={0.7} />
  ))
  .add('white small', () => (
    <Hand hands={hands} color={"white"} scale={0.7} />
  ))