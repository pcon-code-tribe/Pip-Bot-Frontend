
import axios from 'axios';
import React,{useState} from 'react'
import { withRouter, NavLink, useHistory, useParams} from "react-router-dom";
import {Container, Grid,Paper,TextField, Button} from '@material-ui/core'
import Navbar from './Navbar';
import {Formik,Form,Field,ErrorMessage} from 'formik'

 function Home() {
  //  const [websitename,setname]=useState("");
  //  const [websitelink,setlink]=useState("");
  //  const [webtags,setTags]=useState("");
  //  const [webInterval,setinterval]=useState("");
   const [userid,setUserid] = useState("");
 
//  console.log(history.location.name); //it contains the token 
  // const apiUrl='http://localhost:3030/add-websites';
//   const instance = axios.create({
//      baseURL:'http://localhost:3030/add-websites'
//   });
// instance.defaults.headers.common['Authorization']=history.location.name;


  // const authAxios=axios.create({
  //   baseURL:apiUrl,
  //   headers:{
  //     authorization:`Bearer ${history.location.name}` 
  //   }
  // })

  // axios.interceptors.request.use(
  //   config=>{
  //     config.headers.authorization=`Bearer ${history.location.name}`;
  //     return config;
  //   },
  //   error=>{
  //     return Promise.reject(error);
  //   }
  // );
  const submitHandler=(e)=>{
    
   axios.post("http://localhost:3030/add-websites",
   {
    website_name : e.website_name,
    link         : e.link,
    tags         : e.tags,
    interval     : e.interval
  },
   {
     headers : {
       'authorization' : `token ${localStorage.getItem('token')}`
     }
   })
    .then((response)=>{
      console.log(response);
      console.log("Website added successfully");

    })
    .catch(err=>{
      console.log(err);
    })
  }

    return (
      <>
      <Navbar/>
      <Container style={{marginTop:'20px'}} >
      <Paper>
      <Grid container justify="center" alignItems="center" style={{minHeight:'70vh'}}>
        <Grid lg={8} xs={11}>
      <Formik 
       initialValues={{website_name : '',tags:'', link: '', interval: ''}}
       onSubmit={submitHandler}
       >
         <Form>
            <Grid style={{padding:'10px 40px'}}>
                                <Field as={TextField}
                                label="Website Name"
                                name="website_name"
                                placeholder="Enter the website name"
                                fullWidth
                                type="text"
                          
                                />
            </Grid>
            <Grid style={{padding:'10px 40px'}}>
                                <Field as={TextField}
                                label="Website Link"
                                name="link"
                                placeholder="Enter the website link"
                                fullWidth
                                required
                            
                            />
                        </Grid>
            <Grid style={{padding:'10px 40px'}}>
                                <Field as={TextField}
                                label="Tags"
                                name="tags"
                                placeholder="Enter the tag"
                                required
                                fullWidth
                              
                            />
                        </Grid>
            <Grid style={{padding:'10px 40px'}}>
                                <Field as={TextField}
                                label="interval"
                                name="interval"
                                placeholder="Enter the website link"
                                required
                                type="number"
                            />
                        </Grid>
            <Grid style={{padding:'10px 40px'}}>
                             <Button type="submit" style={{backgroundColor:'#2ecc71',color:'white'}}> Submit</Button>
                        </Grid>
         </Form>
        </Formik>
       </Grid>
       </Grid>
       </Paper>
     </Container>
      </>
    )
}
 

export default withRouter(Home)