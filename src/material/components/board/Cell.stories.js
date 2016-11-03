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
        <Cell piece="K" highlight={true} style={cellStyle} />
        <Cell piece="R" highlight={true} style={cellStyle} />
        <Cell piece="B" highlight={true} style={cellStyle} />
        <Cell piece="G" highlight={true} style={cellStyle} />
        <Cell piece="S" highlight={true} style={cellStyle} />
        <Cell piece="N" highlight={true} style={cellStyle} />
        <Cell piece="L" highlight={false} style={cellStyle} />
        <Cell piece="P" highlight={true} style={cellStyle} />
        <Cell piece="+R" highlight={true} style={cellStyle} />
        <Cell piece="+B" highlight={true} style={cellStyle} />
        <Cell piece="+S" highlight={true} style={cellStyle} />
        <Cell piece="+N" highlight={true} style={cellStyle} />
        <Cell piece="+L" highlight={false} style={cellStyle} />
        <Cell piece="+P" highlight={true} style={cellStyle} />
      </div>
      <div>
        <Cell piece="k" highlight={true} style={cellStyle} />
        <Cell piece="r" highlight={true} style={cellStyle} />
        <Cell piece="b" highlight={true} style={cellStyle} />
        <Cell piece="g" highlight={true} style={cellStyle} />
        <Cell piece="s" highlight={true} style={cellStyle} />
        <Cell piece="n" highlight={true} style={cellStyle} />
        <Cell piece="l" highlight={false} style={cellStyle} />
        <Cell piece="p" highlight={true} style={cellStyle} />
        <Cell piece="+r" highlight={true} style={cellStyle} />
        <Cell piece="+b" highlight={true} style={cellStyle} />
        <Cell piece="+s" highlight={true} style={cellStyle} />
        <Cell piece="+n" highlight={true} style={cellStyle} />
        <Cell piece="+l" highlight={false} style={cellStyle} />
        <Cell piece="+p" highlight={true} style={cellStyle} />
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