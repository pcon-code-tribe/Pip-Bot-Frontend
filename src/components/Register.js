import React from 'react'
import {Grid , TextField, makeStyles, Button} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

//importing validation.js
import {UserSchemaRegistration} from './Validation';
import {Formik, Field, Form, ErrorMessage } from 'formik';

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

    //called when user submits the Register form
    const submitHandler = (e) =>{
        console.log(e)
        //attach backend
        
    }
    return (
            // Register page
           <Paper className={classes.paper}>
               {/* icon */}
              <Grid align="center" style={{padding:'30px 0px 0px 0px'}}>
                 <Avatar className={classes.color} ><PersonAddIcon/></Avatar>
                 <h3>Register Yourself</h3>
              </Grid>

                {/*using formik & yup Validation*/}
              <Formik 
                initialValues={{
                    Registration_Email    :"",
                    Registration_Password :""
                }}
                validationSchema={UserSchemaRegistration}
                onSubmit={submitHandler}
                >
              {/* Registration form  */}
                    <Form >
                        <Grid style={{padding:'10px 40px'}}>
                                <Field as={TextField}
                                label="E-mail"
                                name="Registration_Email"
                                placeholder="Enter your Email"
                                fullWidth required
                                helperText={<ErrorMessage name="Registration_Email"/>}
                                />
                        </Grid>
                        <Grid style={{padding:'10px 40px'}}>
                                <Field as={TextField}
                                label="Password"
                                name="Registration_Password"
                                placeholder="Enter the Password"
                                type="password"
                                fullWidth required
                                helperText={<ErrorMessage name="Registration_Password" />}/>
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
