import React,{useState} from 'react'
import {Grid , TextField, makeStyles, Button} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import axios from 'axios';
//importing validation.js
import {UserSchemaRegistration} from './Validation';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import Pops from '../dialog/Pops'

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
export default function Register(props) {
      
    const [showPops, setShowPops] = useState(0)
    //material ui instanace
    const classes = useStyles();
    
    //called when user submits the Register form
    const submitHandler = (e) =>{
    
        axios.post('http://localhost:3030/api/v1/auth/register', //use register endpoint
        { email : e.email, 
          password : e.password,
          plan : 1, 
          isActive : 1}
          )  // object of registeremail, regsiterpassword ,plan, isActive
        .then((response)=>{
            setShowPops(1) //when user has been added sucesfully
        })
        .catch(err => {
           if( err.response.data.message != null)
             setShowPops(2) //when username already exist
        })
    }

    //reset showPops to 0
    const resetShowPops = ()=>{ 
        setShowPops(0) 
    }
   
    return (
            // Register page
            
           <Paper className={classes.paper}>
               {/* icon */}
              {
                   showPops === 1 ? <Pops text={'User added successfully'} type={'success'} resetShowPops={resetShowPops} />
                 : showPops === 2 ? <Pops text={'Email already exist'} type={'warning'} resetShowPops={resetShowPops}/>
                 : null 
              }
              <Grid align="center" style={{padding:'30px 0px 0px 0px'}}>
                 <Avatar className={classes.color} ><PersonAddIcon/></Avatar>
                 <h3>Register Yourself</h3>
              </Grid>

                {/*using formik & yup Validation*/}
              <Formik 
                initialValues={{
                    email    :"",
                    password :""
                }}
                validationSchema={UserSchemaRegistration}
                onSubmit={submitHandler}
                >
              {/* Registration form  */}
                    <Form >
                        <Grid style={{padding:'10px 40px'}}>
                                <Field as={TextField}
                                label="E-mail"
                                name="email"
                                placeholder="Enter your Email"
                                fullWidth required
                                helperText={<ErrorMessage name="email"/>}
                                />
                        </Grid>
                        <Grid style={{padding:'10px 40px'}}>
                                <Field as={TextField}
                                label="Password"
                                name="password"
                                placeholder="Enter the Password"
                                type="password"
                                fullWidth required
                                helperText={<ErrorMessage name="password" />}/>
                        </Grid>
                        
                        {/* register button */}
                        <Grid style={{padding:'30px 40px'}}  align="center">
                            <Button type="submit" fullWidth style={{backgroundColor:'#2ecc71',color:'white'}}>
                                Get Started
                            </Button>
                        </Grid>
                    </Form>  
              </Formik>
       
           </Paper>
       
    )
}
