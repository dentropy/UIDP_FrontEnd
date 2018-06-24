import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import CardExpandable from './CardExpandable';

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
    slide: {
      padding: 10,
    },
  };
  
  export default class TabsSwipeable extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        slideIndex: 0,
      };
    }
  
    handleChange = (value) => {
      this.setState({
        slideIndex: value,
      });
    };
  
    render() {
      return (
        <div style={{ width: '100%' }}>
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="Personal" value={0} />
            <Tab label="Health" value={1} />
            <Tab label="Wealth" value={2} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div style={{ margin: '0 10px' }}>
              <h2 style={styles.headline}>Manage your Identity</h2>
              <CardExpandable />
              <CardExpandable />
            </div>
            <div style={styles.slide}>
              Here you can find your Health Credentials.
            </div>
            <div style={styles.slide}>
              Here you can find your Wealth Credentials.
            </div>
          </SwipeableViews>
        </div>
      );
    }
  }