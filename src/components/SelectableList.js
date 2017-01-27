// @flow
import React from 'react'
import {List, ListItem, makeSelectable} from 'material-ui/List'

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends React.Component {
    props: {
      defaultValue: number,
      children?: React.Element<*>
    }
    state: {
      selectedIndex: number
    }

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue
      })
    }

    handleRequestChange = (_: Event, index: number) => {
      this.setState({
        selectedIndex: index
      })
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      )
    }
  }
}

// SelectableList = wrapState(SelectableList);

export default SelectableList
