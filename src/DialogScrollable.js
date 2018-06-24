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
        label="Let Me Use BRM"
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
         <h2 class="subtitle">What is BRM?</h2>
         <h3 class="subtitle">A decentralized marketplace for extensive and searchable basic research data</h3>
         <p>We are incentivizing researchers to store their data on a decentralized network. We are facilitating the creation of a marketplace for extensive, searchable basic research data.</p>
         <p></p>
         <p>We believe that this will create scenarios that push forward the state of scientific research on this planet. Your Data is shared easily, cheaply, analyzed and viewed from different view points. </p>

         <br></br>
         <h2 class="subtitle">Need to Know Before You Start:</h2>
         <p>If you lose your private key or password, it is gone forever. Do not lose it.</p>
         <li>Make a backup of your private key and password. Do NOT just store it on your computer. Print it out on a piece of paper or save it to a USB drive.</li>
         <p></p>
         <li>Do not store your private key in Dropbox, GoogleDrive, or other Cloud based storage.</li>
         <p></p>
         <li>Do not give your private key out to anyone. Be sure to protect yourself from loss and securely back up your public and private keys in safe places.</li>
         <p></p>
         <li>If you do not fully know or understand do more research and do your due diligence</li>




         <br></br>
         <h2 class="subtitle">Why did we use IPFS & UIDP?</h2>
         <h3 class="subtitle">Your files will first be encrypted with the your private key and then stored in IPFS.</h3>
         <p>We will prompt you to go through our Universal ID Platform (UIDP) and get verified on the blockchain. They will then upload their files to the interface.</p>


        </Dialog>
      </div>
    );
  }
}
