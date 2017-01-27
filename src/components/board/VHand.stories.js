// @flow
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import VHand from './VHand'

const hands = {
  'R': 1,
  'B': 2,
  'G': 3,
}

storiesOf('VHand', module)
  .add('black', () => (
    <VHand hands={hands} color="black" />
  ))
  .add('white', () => (
    <VHand hands={hands} color="white" />
  ))
  .add('black small', () => (
    <VHand hands={hands} color="black" scale={0.7} />
  ))
  .add('white small', () => (
    <VHand hands={hands} color="white" scale={0.7} />
  ))