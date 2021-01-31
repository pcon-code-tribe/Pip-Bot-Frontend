import React,{useState} from 'react'
import {Grid , TextField, makeStyles, Button, Typography, Link} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import LockIcon from '@material-ui/icons/Lock';


//adding custom styles with material-ui
const useStyles = makeStyles(theme => ({
    paper:{
       width:'400px',
       height:'450px',
    },
    color:{
       backgroundColor:'#2ecc71'
    }
}))

//React functional component Login
export default function Login(props) {

    //material ui instance
    const classes = useStyles();

    //using react hooks to set the state initially to empty string
    const [LoginEmail,setLoginEmail] = useState("")
    const [LoginPassword,setLoginPassword] = useState("")
     
    //called when user submits the Login form
    const submitHandler = (e) =>{
            e.preventDefault();
            //attach backend
            alert(LoginEmail+LoginPassword)
    }

    return (

        // signup page
           <Paper  className={classes.paper} >
              {/* icon */}
              <Grid align="center" style={{padding:'30px 0px 0px 0px'}}>
                 <Avatar className={classes.color}><LockIcon/></Avatar>
                 <h3>Sign In</h3>
              </Grid>

             {/* signin form  */}
             <form onSubmit={submitHandler}>
                 {/* changing the state of LoginEmail whenever user enters a letter */}
                <Grid style={{padding:'10px 40px'}}>
                        <TextField 
                        label="E-mail"
                        placeholder="Enter your Email"
                        fullWidth required
                        onChange={(e) =>{setLoginEmail(e.target.value)}}
                       />
                </Grid>
                {/* changing the state of LoginPassword whenever user enters a letter */}
                <Grid style={{padding:'10px 40px'}}>
                        <TextField 
                        label="Password"
                        placeholder="Enter the Password"
                        type="password"
                        fullWidth required
                        onChange={(e) =>{setLoginPassword(e.target.value)}}
                      />
                    </Grid>

                    {/* sign in button */}
                    <Grid style={{padding:'30px 40px'}}  align="center">
                        <Button type="submit" fullWidth style={{backgroundColor:'#2ecc71',color:'white'}}>
                            Sign Up
                        </Button>
                    </Grid>
                </form>
                 {/* reset password implemented later */}
                <Grid style={{padding:'00px 0px'}}  align="center">
                  <Typography className={classes.root}>
                        <Link href="#" >
                            Forgot Password?
                        </Link>
                  </Typography>
                </Grid>
              
           </Paper>

    )
}
