import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0.2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Pacifico, cursive'
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'#30336b'}}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            PIPBOT
          </Typography>
          <Button color="inherit"><NavLink style={{color:"white", textDecoration:"none"}} to="/home">Home</NavLink></Button>
          <Button color="inherit" ><NavLink style={{color:"white", textDecoration:"none"}} to="/logs">Curl</NavLink></Button>
          <Button color="inherit" ><NavLink style={{color:"white", textDecoration:"none"}} to="/Admin">Admin</NavLink></Button>
          <Button color="inherit" onClick={event =>  window.location.href='/logout'}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}