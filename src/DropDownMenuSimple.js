import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: `200px`
  },
};

export default class DropDownMenuSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Identity 1" />
          <MenuItem value={2} primaryText="Identity 2" />
          <MenuItem value={3} primaryText="Identity 3" />
          <MenuItem value={4} primaryText="Identity 4" />
          <MenuItem value={5} primaryText="Identity 5" />
        </DropDownMenu>
      </div>
    );
  }
}