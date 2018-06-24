import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExpandable = () => (
  <Card style={{ marginBottom: "10px" }}>
    <CardHeader
      title="Elon Musk"
      subtitle="text"
      actAsExpander={false}
      showExpandableButton={false}
    />
  </Card>
);

export default CardExpandable;