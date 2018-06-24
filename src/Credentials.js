import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 1200,
    width: 900,
    margin: 20,
    textAlign: 'left',
    padding: 20,
    display: 'inline-block',
  };
  
const headline = {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
  };
  
export default class Credentials extends Component {
    render() {
        return (
            <div> 
                <div style={{ margin: '0 10px' }}>
                    <h2 style={headline}>Credentials</h2>                    
                </div>
                
                <Paper style={style} zDepth={1} >
                    Here you can find the Credentials
                </Paper>

            </div>
        );
    }
}