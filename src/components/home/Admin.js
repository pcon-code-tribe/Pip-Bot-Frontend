import React,{useState} from 'react'
import { withRouter, useHistory} from "react-router-dom";
import Navbar from './Navbar'
import axios from 'axios'
import Table from './logs/Tables'
import Box from '@material-ui/core/Box'
import { Button, Container } from '@material-ui/core';

 function Admin() {

  const history  = useHistory()

   const [user, setUser]                = useState([])
   const [currentUser, setCurrentUser]  = useState([])
   const [website, setWebsite]          = useState([])
   const [logs, setLogs]                = useState([])
   const [counter,setCounter]           = useState(0)

   //return all the users in database

   const getAllUserHandler = ()=>{
    axios.get('http://localhost:3030/api/v1/user/')
    .then((res)=>{
       setCounter(1)
       setUser(res.data)
      //  users = res.data.map(obj => Object.values(obj));
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
          const deleteHandler =(e) =>{
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


        const getWebsiteHandler =(e) =>{
          axios.get('http://localhost:3030/getAllWebsites')
          .then((res)=>{
            // setUser(res.data)
            // console.log(res.data)
            setCounter(3)
            setWebsite(res.data)
          })
          .catch(err=>console.log(err))
        }
      
        const getLogs =(e) =>{
          axios.get('http://localhost:3030/logs/getlogs')
          .then((res)=>{
            // setUser(res.data)
            setCounter(4)
            setLogs(res.data)
            // setWebsite(res.data)
          })
          .catch(err=>console.log(err))
        }

        const clearLogsHandler =(e) =>{
          axios.delete('http://localhost:3030/removeWebsites/',{
            params:{
              id:37
            }
          })
          .then((res)=>{
            // console.log(res)
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
    <Container>
    <Box>
    <Button variant={'outlined'} onClick={getAllUserHandler}>Users</Button>
    <Button variant={'outlined'} onClick={getUserByIdHandler}>Find Me</Button>
    <Button variant={'outlined'} onClick={deleteHandler}>Delete Me</Button>
    <Button variant={'outlined'} onClick={getWebsiteHandler}>Get Websites</Button>
    <Button variant={'outlined'} onClick={getLogs}>Logs</Button>
    <Button variant={'outlined'} onClick={clearLogsHandler}>Clear logs</Button>
    {/* <Button variant={'outlined'} onClick={updateHandler}>update user</Button> */}
    </Box>
   

    { 
        counter === 1 ? <Table data={user} />
      : counter === 2 ? <Table data={currentUser} />
      : counter === 3 ? <Table data={website} />
      : counter === 4 ? <Table data={logs} />
      : null 
    }

    </Container>
  </div>
    )
 }
//  <Table data={users} userFields={userFields}/>
export default withRouter(Admin)