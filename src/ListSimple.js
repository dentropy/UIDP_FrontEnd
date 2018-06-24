import React from 'react';
import {withRouter} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';

const ListSimple = withRouter(({ history }) => (
  <div >
    <List style={{ width: "225px"}}>
      <ListItem onClick={() => { history.push('/') }} primaryText="Details" leftIcon={<ContentInbox />} />
      <ListItem onClick={() => { history.push('/credentials') }} primaryText="Credentials" leftIcon={<ActionGrade />} />
      <ListItem onClick={() => { history.push('/marketplace')}} primaryText="Marketplace" leftIcon={<ContentSend />} />
    </List>
  </div>
));

export default ListSimple;