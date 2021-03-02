
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { withRouter,  useHistory} from "react-router-dom"
import {Container, Grid,Paper,TextField} from '@material-ui/core'
import Navbar from './Navbar'
import {Formik,Form,Field} from 'formik'
import Pops from '../dialog/Pops'
import {PlayCircleFilledOutlined} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chip : {
          display: 'flex',
          justifyContent: 'flex-end',
          flexWrap: 'wrap',
          '& > *': {
          margin: theme.spacing(0.5),
          },
         },
  heading : {
        marginTop:'5px',
        fontSize : '20px',
        color :'#30336b',
        fontWeight :'500',
  }
}))

 function Home() {
  //  const [websitename,setname]=useState("");
  //  const [websitelink,setlink]=useState("");
  //  const [webtags,setTags]=useState("");
  //  const [webInterval,setinterval]=useState("");
   const [showPops, setShowPops] = useState(0)
   const [currentUser, setCurrentUser] = useState('demo')
   const history = useHistory()
   const classes = useStyles()
   
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
          setCurrentUser(res.data[0].email)
          setShowPops(1)
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
      <div style={{backgroundColor:'#dff9fb',height:'100vh'}}>
       {/* welcome message */}
      { showPops === 1 ? <Pops text={ `hi ${currentUser}`} type={'success'} resetShowPops={()=>{return}}/>
       : null }
      <Navbar/>
          <Grid container className={classes.chip}>
            <Chip
                  icon={<FaceIcon />}
                  label={currentUser}
                  clickable
                  color="primary"
                  variant="outlined"
                  />
          </Grid>
          <Container style={{marginTop:'20px'}}>
            <Paper elevation={3} style={{width:'70%',margin:'auto',backgroundColor:'#fffff'}}  >
              <Grid container justify="center" alignItems="center" style={{minHeight:'70vh'}} >
                {/* heading  */}
            <Grid item className={classes.heading}>Enter the details</Grid>
                {/* form part */}
              <Grid item lg={9} xs={11}>
              <Formik 
              initialValues={{website_name : '',tags:'', link: '', interval: ''}}
              onSubmit={submitHandler}
              >
                <Form>
                    <Grid style={{padding:'15px 40px'}}>
                                        <Field as={TextField}
                                        label="Website Name"
                                        name="website_name"
                                        placeholder="Enter the website name"
                                        fullWidth
                                        variant="outlined"
                                        type="text"
                                        style={{color:'white'}}
                                        size='small'
                                        />
                    </Grid>
                    <Grid style={{padding:'10px 40px'}}>
                                        <Field as={TextField}
                                        label="Website Link"
                                        name="link"
                                        placeholder="Enter the website link"
                                        fullWidth
                                        variant="outlined"
                                        required
                                        size='small'
                                    
                                    />
                                </Grid>
                    <Grid style={{padding:'10px 40px'}}>
                                        <Field as={TextField}
                                        label="Tags"
                                        name="tags"
                                        placeholder="Enter the tag"
                                        required
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                      
                                    />
                                </Grid>
                    <Grid style={{padding:'10px 40px'}}>
                                        <Field as={TextField}
                                        label="interval"
                                        name="interval"
                                        placeholder="Enter the Interval "
                                        required
                                        variant="outlined"
                                        type="number"
                                        InputProps={{
                                          inputProps: { 
                                              max: 20, min: 1 
                                          }
                                      }}
                                      size='small'
                                      fullWidth
                                    />
                                </Grid>
                    <Grid style={{padding:'10px 40px'}}>
                                      <IconButton  type="submit" style={{ color: '#30336b' }}>
                                        < PlayCircleFilledOutlined fontSize="large" />
                                      </IconButton>
                                </Grid>
                </Form>
              </Formik>
              </Grid>
              </Grid>
            </Paper>
        </Container>
      </div>
    )
}
 

export default withRouter(Home)