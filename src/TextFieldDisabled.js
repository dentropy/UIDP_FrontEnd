import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldDisabled = () => (
  <div>
    <TextField
      disabled={false}
      hintText="enter seller address"
    /><br />
    <TextField
      disabled={false}
      //id="text-field-disabled"
      hintText="enter value"
      //defaultValue="enter value"
    /><br />
    <TextField
      disabled={true}
      hintText="0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
      floatingLabelText="0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
    /><br />
    <TextField
      disabled={true}
      hintText="0xf17f52151EbEF6C7334FAD080c5704D77216b732"
      floatingLabelText="0xf17f52151EbEF6C7334FAD080c5704D77216b732"
    />
  </div>
);
export default TextFieldDisabled;