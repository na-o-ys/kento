import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class KentoDialog extends React.Component {
  props = {
    open: false,
    handleClose: () => {},
    result: ""
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Kento Dialog"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          {this.props.result}
        </Dialog>
      </div>
    );
  }
}