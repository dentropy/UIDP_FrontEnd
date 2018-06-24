import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const ListSimple = () => (  
  <div >
    <List style={{ width: "225px"}}>
      <ListItem primaryText="Details" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Credentials" leftIcon={<ActionGrade />} />
      <ListItem primaryText="Marketplace" leftIcon={<ContentSend />} />
    </List>
  </div>
);

export default ListSimple;