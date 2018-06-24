import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginTop: 16,
    marginRight: 20,
  },
};

const style = {
    marginTop: 16,
    textAlign: 'center',
};

const colour = {
  marginRight: 10,
};

export default class DialogScrollable extends React.Component {
  state = {
    open: true,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

    render() {
    const actions = [


      <RaisedButton
        label="I Get It... Let Me Use BRM Now"
        primary={true} style={colour}
        fullWidth={true}
        onClick={this.handleClose}
        />,
    ];

/*Scrolling done with autoScrollBodyContent={true}*/

    return (
      <div>
        <Dialog
          actions={actions}
          modal={true}
          fullWidth={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
         <h1 class="title" style={style}><a name="rel_pos_size">Welcome to Basic Research Marketplace</a></h1>
         <p class="subtitle" style={style}>We know this stuff is annoying. We are sorry.</p>
         <br></br>
         <h2 class="subtitle"style={style}>What is BMR?</h2>
         <h3 class="subtitle"style={style}>A decentralized marketplace for extensive and searchable basic research data</h3>
         <p>According the National Institute of Health of the United Kingdom, the average grant for researchers is about $500,000. Researchers often spend much of this money and their time collecting data that has already been gathered. Once data has been collected, there is often no incentive for them to share it with other researchers.</p>
         <p></p>
         <p>What we propose is to incentivize the researchers to store their data on a decentralized network. This will facilitate the creation of a marketplace for basic research data that can be extensive and searchable.</p>
         <p></p>
         <p>We believe that this can create scenarios that push forward the state of scientific research on this planet as data can be shared easily, cheaply and viewed and analyzed from different view points. </p>
         <p>This will also create incentives for labs to just create new data for no purpose but to sell and as long as the lab was approved by the publishers of journal articles we can feel confident in the data being published. Staying true to David Ricados comparative advantage. Finally, if we cap how many times one set of data can be used we will have created an incentive for researchers to recollect said data therefore building in an incentive for repeatability something that is lacking in the scientific world.</p>

        </Dialog>
      </div>
    );
  }
}
