import React from 'react'
import {Grid , TextField, makeStyles, Button, Typography, Link} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
const useStyles = makeStyles(theme => ({
    paper:{
       position:'absolute',
       top:'50%',
       left:'50%',
       width:'400px',
       height:'450px',
       transform:'translate(-50%,-50%)'
    },
    color:{
       backgroundColor:'green'
    }
}))

export default function Login() {

    const classes = useStyles();
    return (
       <Grid>
           <Paper elevation={5} className={classes.paper}>
              <Grid align="center" style={{padding:'20px 0px 0px 0px'}}>
                 <Avatar ><LockIcon/></Avatar>
                 <h3>Sign In</h3>
              </Grid>
              <Grid style={{padding:'10px 40px'}}>
                  <TextField 
                  label="E-mail"
                  placeholder="Enter your Email"
                  fullWidth required/>
               </Grid>
               <Grid style={{padding:'10px 40px'}}>
                   <TextField 
                  label="Password"
                  placeholder="Enter the Password"
                  type="password"
                  fullWidth required/>
                </Grid>
                <Grid style={{padding:'10px 0px'}}  align="center">
                  <Button type="submit">
                      Sign-up
                  </Button>
                </Grid>
                  
                <Grid style={{padding:'10px 0px'}}  align="center">
                  <Typography className={classes.root}>
                        <Link href="#" >
                            Forgot Password?
                        </Link>
                  </Typography>
                </Grid>
              
           </Paper>
       </Grid>
    )
}
