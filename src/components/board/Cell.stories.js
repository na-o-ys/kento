// @flow
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Cell from './Cell'

const cellStyle = {
  float: "left"
}
storiesOf('Cell', module)
  .add('all', () => (
    <div>
      <div>
        <Cell piece="K" style={cellStyle} />
        <Cell piece="R" style={cellStyle} />
        <Cell piece="B" style={cellStyle} />
        <Cell piece="G" style={cellStyle} />
        <Cell piece="S" style={cellStyle} />
        <Cell piece="N" style={cellStyle} />
        <Cell piece="L" style={cellStyle} />
        <Cell piece="P" style={cellStyle} />
        <Cell piece="+R" style={cellStyle} />
        <Cell piece="+B" style={cellStyle} />
        <Cell piece="+S" style={cellStyle} />
        <Cell piece="+N" style={cellStyle} />
        <Cell piece="+L" style={cellStyle} />
        <Cell piece="+P" style={cellStyle} />
      </div>
      <div>
        <Cell piece="k" style={cellStyle} />
        <Cell piece="r" style={cellStyle} />
        <Cell piece="b" style={cellStyle} />
        <Cell piece="g" style={cellStyle} />
        <Cell piece="s" style={cellStyle} />
        <Cell piece="n" style={cellStyle} />
        <Cell piece="l" style={cellStyle} />
        <Cell piece="p" style={cellStyle} />
        <Cell piece="+r" style={cellStyle} />
        <Cell piece="+b" style={cellStyle} />
        <Cell piece="+s" style={cellStyle} />
        <Cell piece="+n" style={cellStyle} />
        <Cell piece="+l" style={cellStyle} />
        <Cell piece="+p" style={cellStyle} />
      </div>
    </div>
  ))
  .add("with count", () => (
    <div>
      <Cell piece="R" count={1} />
      <Cell piece="R" count={2} />
      <Cell piece="R" count={3} />
    </div>
  ))
  .add("small", () => (
    <div>
      <Cell piece="R" count={1} scale={0.7} />
      <Cell piece="R" count={2} scale={0.7} />
      <Cell piece="R" count={3} scale={0.7} />
    </div>
  ))