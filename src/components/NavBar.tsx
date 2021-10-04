import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export class NavBar extends Component<{}, { isDrawerOpen: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };
  }

  render() {
    return (
      <div>
        <Drawer
          open={this.state.isDrawerOpen}
          onClose={() => this.setState({ isDrawerOpen: false })}
        >
          <Box
            sx={{ width: 250, bgcolor: 'primary.dark' }}>
            <List>
              <Link to="/" >
                <ListItem button>Home</ListItem>
              </Link>
              <Link to="/dashboard" >
                <ListItem button>Dashboard</ListItem>
              </Link>
              <Link to="/app/a" >
                <ListItem button>App A</ListItem>
              </Link>
              <Link to="/app/b" >
                <ListItem button>App B</ListItem>
              </Link>
            </List>
          </Box>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => this.setState({ isDrawerOpen: true })} >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar >
      </div>
    );
  }
}