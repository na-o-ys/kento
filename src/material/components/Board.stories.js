// @flow
import React from "react"
import { storiesOf } from "@kadira/storybook"
import Board from "./Board"
import { Game, emptyGame } from "../lib/game"
import { sample as game } from "../lib/game/sample"

storiesOf('Board', module)
  .add('default', () => (
    <Board position={emptyGame.getPosition(0)} />
  ))
  .add('complex', () => (
    <Board position={game.getPosition(55)} />
  ))
  .add('small', () => (
    <Board position={game.getPosition(55)} scale={0.7} />
  ))
