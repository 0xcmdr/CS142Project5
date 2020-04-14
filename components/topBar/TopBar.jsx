import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            Welcome Cuma
          </Typography>
          <Button color="inherit">{this.props.title}</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
