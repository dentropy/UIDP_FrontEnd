import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownMenuSimple from './DropDownMenuSimple';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarIcon = () => (
  <div style={{ width: '100%'}}>
      { <AppBar
        title="Logo"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />}     
    
    </div>
);

export default AppBarIcon;