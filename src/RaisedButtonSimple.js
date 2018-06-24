import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 12,
};
const RaisedButtonSimple = () => (
  <div>
    <RaisedButton label="launch contract" primary={true} style={style} />
    <br />
    <br />
  
  </div>
);
export default RaisedButtonSimple;