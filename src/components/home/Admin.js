import React,{useState} from 'react'
import { withRouter, useHistory} from "react-router-dom";
import Navbar from './Navbar'
import axios from 'axios'
import Table from './logs/Tables'
import Box from '@material-ui/core/Box'
import { makeStyles, Button} from '@material-ui/core'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import DialogPop from '../dialog/Dialog'
import DeleteIcon from '@material-ui/icons/Delete'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={10}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    display : 'flex'
  },
  buton:{
    marginTop: theme.spacing(1),
    color:'red'
  },
  space:{
    marginTop : theme.spacing(3),
    color: 'red'
  }
}))

 function Admin() {
  const classes = useStyles()
  const history  = useHistory()
  const [value, setValue] = React.useState(0)
  const [user, setUser]                = useState([])
  const [currentUser, setCurrentUser]  = useState([])
  const [website, setWebsite]          = useState([])
  const [logs, setLogs]                = useState([])
  const [counter,setCounter]           = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   //return all the users in database
   const getAllUserHandler = ()=>{
    axios.get('http://localhost:3030/api/v1/user/')
    .then((res)=>{
      //sets counter to 1
       setCounter(1)
       setUser(res.data)
    })
    .catch(err=>console.log(err))
   }

        
  //get user by id
        const getUserByIdHandler = () =>{
            axios.get('http://localhost:3030/api/v1/user/me',{
              headers:{
                'Authorization':`token ${localStorage.getItem('token')}`
              }
            })
            .then((res)=>{
              setCounter(2)
              let obj =  res.data
              delete obj[0].password
              setCurrentUser(obj)
            })
            .catch(err=>console.log(err))
           }
 
   //delete user when token provided
          const deleteUserByIdHandler =() =>{
            axios.delete('http://localhost:3030/api/v1/user/me',{
              headers:{
                'Authorization':`token ${localStorage.getItem('token')}`
              }
            })
            .then((res)=>{
              history.push('/logout')
            })
            .catch(err=>console.log(err))
           }

    //gets list of all websites
        const getWebsiteHandler =() =>{
          axios.get('http://localhost:3030/getAllWebsites',{
            headers:{
              'Authorization':`token ${localStorage.getItem('token')}`
            }
          })
          .then((res)=>{
            setCounter(3)
            let obj =  res.data
            obj.map((arr)=>{
              delete arr.user_id
              delete arr.website_id
            })
            setWebsite(obj)
          })
          .catch(err=>console.log(err))
         }

    //gets logs
        const getLogs =() =>{
          axios.get('http://localhost:3030/logs/getlogs',{
            headers:{
              'Authorization':`token ${localStorage.getItem('token')}`
            }
          })
          .then((res)=>{
            setCounter(4)
            let obj = res.data
            obj.map((arr)=> { 
              delete arr.user_id 
              delete arr.log_id})
            setLogs(obj)
            // setWebsite(res.data)
    
          })
          .catch(err=>console.log(err))
        }

        const clearLogsHandler =(e) =>{
          axios.delete('http://localhost:3030/logs/deleteLogs',{
            headers:{
              'Authorization':`token ${localStorage.getItem('token')}`
            }
          })
          .then((res)=>{
            setCounter(5)
          })
          .catch(err=>console.log(err))
      }

      const clearWebsiteHandler = ()=>{
        axios.delete('http://localhost:3030/removeWebsites',{
          headers:{
            'Authorization':`token ${localStorage.getItem('token')}`
          }
        })
        .then((res)=>{
          setCounter(6)
        })
        .catch(err=>console.log(err))
      }
  
  //update plan and isActive when token provided
      //   const updateHandler =(e) =>{
    
      //     e.preventDefault()
      //     axios.put('http://localhost:3030/api/v1/user/me',{plan:2,isActive:2},{
      //       headers:{
      //         'Authorization':`token ${localStorage.getItem('token')}`
      //       }
      //     })
      //     .then((res)=>{
      //         console.log(res.data)
      //     })
      //     .catch(err=>console.log(err))
      // }
 
    return (
  <div>
    <Navbar/>
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Users" {...a11yProps(0)} onClick={getAllUserHandler} />
        <Tab label="Me" {...a11yProps(1)} onClick={getUserByIdHandler}/>
        <Tab label="Websites" {...a11yProps(2)} onClick={getWebsiteHandler} />
        <Tab label="Logs" {...a11yProps(3)} onClick={getLogs}/>
        <Button   
                  startIcon={<DeleteIcon />} 
                  onClick={()=> setCounter(5)}
                  className={classes.buton,classes.space}>
                  Logs</Button>
        <Button  
                  startIcon={<DeleteIcon />} 
                  onClick={()=> {setCounter(6)}}>
                  Websites</Button>
        <Button  
                  startIcon={<DeleteIcon />} 
                  onClick={()=> {setCounter(7)}}>
                  Account</Button>          
        </Tabs>

       
      { counter === 1 ?   <Table data={user} value={value} index={0}/>
      : counter === 2 ?   <Table data={currentUser} value={value} index={1}/>
      : counter === 3 ?   <Table data={website} value={value} index={2}/>
      : counter === 4 ?   <Table data={logs} value={value} index={3}/>
      : counter === 5 ?   <DialogPop text={'Are you sure to clear Logs'} button={'Delete'} function={clearLogsHandler}/>
      : counter === 6 ?   <DialogPop text={'Are you sure to delete websites'} button ={'Delete'} function={clearWebsiteHandler}/>
      : counter === 7 ?   <DialogPop text={'This will delete your Account'} button ={'Agree'} function={deleteUserByIdHandler}/>
      : null}
      
  </div>
  </div>
    )
 }
//  <Table data={users} userFields={userFields}/>
export default withRouter(Admin)