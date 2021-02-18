import React ,{ useState } from 'react'
import {Grid , TextField, makeStyles, Button, Typography, Link, responsiveFontSizes} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import LockIcon from '@material-ui/icons/Lock';
import axios from 'axios';
//importing validation.js
import {UserSchemaLogin} from './Validation';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import {useHistory,Redirect} from 'react-router-dom'

// import Home from './Home';

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
 function Login(props) {
     const [status,setStatus] = useState("")
    //material ui instance
    const classes = useStyles();
    const history = useHistory();

    //called when user submits the Login form
    const submitHandler = (e) =>{
       
        axios.post('http://localhost:3030/api/v1/auth/login', //use login endpoint
        {email : e.email, password: e.password}) // object of loginemail & loginpassword 
        .then((response) =>{
         
            if(response.data.auth === true)  //if login is successfull
            {   
                {props.isLogin()}     //login status is changed to true
                setStatus(response.data.auth)
                localStorage.setItem('token',response.data.token)  //token saved to local machine
                //reidrected to homepage
                
                //this id will be used using adding website
                history.push({
                    pathname:'/home',
                    state:{
                        isAuth : status
                    },
                })
                
            }
            else{
                //redirect to login page when unsuccessfull
                alert("wrong data")
                return(<Redirect to='/'/>)
          
            }
        })
        .catch(err =>{
            //when wrong email or password is entered
            if(err.response.data.auth === false)
             alert("wrong combination")
        })
    }

    
    return ( 

        // signup page
           <Paper  className={classes.paper} >
              {/* icon */}
              <Grid align="center" style={{padding:'30px 0px 0px 0px'}}>
                 <Avatar className={classes.color}><LockIcon/></Avatar>
                 <h3>Sign In</h3>
              </Grid>
            
            {/*using formik & yup Validation*/}
              <Formik 
                initialValues={{
                    email:"",
                    password:""
                }}
                validationSchema={UserSchemaLogin}
                onSubmit={submitHandler}
                >
                {/* signin form  */}
                    <Form >
                        {/* changing the state of LoginEmail whenever user enters a letter */}
                        <Grid style={{padding:'10px 40px'}}>
                                <Field as={TextField}
                                label="E-mail"
                                name="email"
                                placeholder="Enter your Email"
                                fullWidth required
                                helperText={<ErrorMessage name="email"/>}
                            />
                        </Grid>
                        {/* changing the state of LoginPassword whenever user enters a letter */}
                        <Grid style={{padding:'10px 40px'}}>
                                <Field as={TextField} 
                                label="Password"
                                name="password"
                                placeholder="Enter the Password"
                                type="password"
                                fullWidth required
                                helperText={<ErrorMessage name="password"/>}
                            />
                            </Grid>
 
                            {/* sign in button */}
                            <Grid style={{padding:'30px 40px'}}  align="center">
                                <Button type="submit" fullWidth style={{backgroundColor:'#2ecc71',color:'white'}}>
                                    Sign Up
                                </Button>
                            </Grid>
                        </Form>
                 </Formik>  
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

export default Login