import React ,{useState}from 'react'
import {Grid , TextField, makeStyles, Button} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

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

//react functional component Register
export default function Register() {
     
    //material ui instanace
    const classes = useStyles();

    //using react hooks to set the state initially to empty string
    const [RegisterEmail,setRegisterEmail] = useState("")
    const [RegisterPassword,setRegisterPassword] = useState("")

    //called when user submits the Register form
    const submitHandler = (e) =>{
        e.preventDefault()
        alert(RegisterEmail+RegisterPassword)
    }
    return (
            // Register page
           <Paper className={classes.paper}>
               {/* icon */}
              <Grid align="center" style={{padding:'30px 0px 0px 0px'}}>
                 <Avatar className={classes.color} ><PersonAddIcon/></Avatar>
                 <h3>Register Yourself</h3>
              </Grid>

              {/* Registration form  */}
              <form onSubmit={submitHandler}>
                <Grid style={{padding:'10px 40px'}}>
                    <TextField 
                    label="E-mail"
                    placeholder="Enter your Email"
                    fullWidth required
                    onChange={(e)=>{setRegisterEmail(e.target.value)}}/>
                </Grid>
                <Grid style={{padding:'10px 40px'}}>
                    <TextField 
                    label="Password"
                    placeholder="Enter the Password"
                    type="password"
                    fullWidth required
                    onChange={(e)=>{setRegisterPassword(e.target.value)}}/>
                </Grid>
                
                {/* register button */}
                <Grid style={{padding:'30px 40px'}}  align="center">
                    <Button type="submit" fullWidth style={{backgroundColor:'#2ecc71',color:'white'}}>
                        Get Started
                    </Button>
                </Grid>
              </form>  
           </Paper>
       
    )
}
