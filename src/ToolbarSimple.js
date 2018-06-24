import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ToolbarSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <div style={{ width: "200"}}>
            <ToolbarTitle text="BRM" style={{ marginLeft: '20px' }} />
            <FontIcon className="muidocs-icon-custom-sort" />
          </div>
          <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>            
            <MenuItem value={1} primaryText="Identity 1" />
            <MenuItem value={2} primaryText="Identity 2" />
            <MenuItem value={3} primaryText="Identity 3" />
            <MenuItem value={4} primaryText="Identity 4" />
            <MenuItem value={5} primaryText="Identity 5" />
          </DropDownMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}