
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { withRouter,  useHistory} from "react-router-dom"
import {Container, Grid,Paper,TextField, Button} from '@material-ui/core'
import Navbar from './Navbar'
import {Formik,Form,Field} from 'formik'
import Pops from '../dialog/Pops'
import { getSuggestedQuery } from '@testing-library/react'

 function Home() {
  //  const [websitename,setname]=useState("");
  //  const [websitelink,setlink]=useState("");
  //  const [webtags,setTags]=useState("");
  //  const [webInterval,setinterval]=useState("");
   const [pops, setPops] = useState(null)
   const history = useHistory();
   
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
  useEffect(() => {
    getUserByIdHandler()
  }, [])

  const getUserByIdHandler = () =>{
      axios.get('http://localhost:3030/api/v1/user/me',{
        headers:{
          'Authorization':`token ${localStorage.getItem('token')}`
        }
      })
      .then((res)=>{
          let user = res.data[0].email
          setPops(<Pops text={ `hi ${user}`}/>)
      })
      .catch(err=>console.log(err))
     }


  const submitHandler=(e)=>{
    
   axios.post("http://localhost:3030/addWebsites",
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
      history.push('/logs')
    })
    .catch(err=>{
      console.log(err);
    })
  }

    return (
      <>
      {pops}
      <Navbar/>
      <Container style={{marginTop:'20px'}} >
      <Paper>
      <Grid container justify="center" alignItems="center" style={{minHeight:'70vh'}} >
        <Grid item lg={8} xs={11}>
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
                                InputProps={{
                                  inputProps: { 
                                      max: 20, min: 1 
                                  }
                              }}
                              fullWidth
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