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
<<<<<<< HEAD
    marginRight: theme.spacing(0.2),
=======
    marginRight: theme.spacing(1),
>>>>>>> 95d148919e733ae511d45a6dd0933e07e833d06f
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            PIPBOT
          </Typography>
          <Button color="inherit"><NavLink style={{color:"white", textDecoration:"none"}} to="/home">Home</NavLink></Button>
<<<<<<< HEAD
          <Button color="inherit" ><NavLink style={{color:"white", textDecoration:"none"}} to="/logs">Curl</NavLink></Button>
=======
          <Button color="inherit" ><NavLink style={{color:"white", textDecoration:"none"}} to="/logs">Logs</NavLink></Button>
>>>>>>> 95d148919e733ae511d45a6dd0933e07e833d06f
          <Button color="inherit" ><NavLink style={{color:"white", textDecoration:"none"}} to="/Admin">Admin</NavLink></Button>
          <Button color="inherit" onClick={event =>  window.location.href='/logout'}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}