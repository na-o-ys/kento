// @flow
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import MainBoard from './MainBoard'

const initialCells = [
   'l',  'n',  's',  'g',  'k',  'g',  's',  'n',  'l',
  null,  'r', null, null, null, null, null,  'b', null,
   'p',  'p',  'p',  'p',  'p',  'p',  'p',  'p',  'p',
  null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null,
   'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',
  null,  'B', null, null, null, null, null,  'R', null,
   'L',  'N',  'S',  'G',  'K',  'G',  'S',  'N',  'L',
]

storiesOf('MainBoard', module)
  .add('initial', () => (
    <MainBoard cells={initialCells} />
  ))
  .add('small', () => (
    <MainBoard cells={initialCells} scale={0.7} />
  ))