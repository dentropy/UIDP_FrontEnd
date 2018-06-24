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
        label="Let Me Use BRM ="
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
         <h2 class="subtitle"style={style}>What is BRM?</h2>
         <h3 class="subtitle"style={style}>A decentralized marketplace for extensive and searchable basic research data</h3>
         <p>We are incentivising researchers to store their data on a decentralized network. This will facilitate the creation of a marketplace for extensive, searchable basic research data.</p>
         <p></p>
         <p>We believe that this will create scenarios that push forward the state of scientific research on this planet as data can be shared easily, cheaply and viewed and analyzed from different view points. </p>
         <p>This creates incentive for labs to create new data for no purpose but to sell it and as long as the lab was approved by the publishers of journal articles we can feel confident in the data being published.</p>
         <br></br>
         <h2 class="subtitle"style={style}>Why are we using IPFS & UIDP?</h2>
         <h3 class="subtitle"style={style}>Your files will first be encrypted with the your private key and then stored in IPFS.</h3>

         <p>We will prompt you to go through our Universal ID Platform (UIDP) and get verified on the blockchain. They will then upload their files to the interface.</p>


      
        </Dialog>
      </div>
    );
  }
}
