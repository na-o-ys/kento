import React from 'react'
import FlatButton from 'material-ui/FlatButton'

export const KentoButton = ({ onClick }) => (
  <div>
    <FlatButton label="Default" onClick={onClick} />
  </div>
);

export default KentoButton