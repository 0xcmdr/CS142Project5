import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';

/**
 * Topbar componentini tanımladık.
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log("Topbar Mounted");
  }

 UNSAFE_componentWillUpdate()
 {
   console.log("TOPBAR UPDATED");
 }

  render() {
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
              {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
