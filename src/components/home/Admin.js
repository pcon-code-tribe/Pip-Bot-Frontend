<<<<<<< HEAD
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
=======
import React,{useState,useEffect} from 'react'
import { withRouter,useLocation,Link, Redirect, useHistory} from "react-router-dom";
import Navbar from './Navbar'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import { Button, Container } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 75,
    padding:20,
    marginTop:20,
  },

});

 function Admin() {
  const classes = useStyles();
  const history  = useHistory()
    //  const location = useLocation()
    //  const data = location.state.isAuth
    //  console.log(data)
     
    // console.log(location.state.isAuth)
   const [data,setData] = useState([])

>>>>>>> 95d148919e733ae511d45a6dd0933e07e833d06f

   //return all the users in database

   const getAllUserHandler = ()=>{
    axios.get('http://localhost:3030/api/v1/user/')
    .then((res)=>{
<<<<<<< HEAD
       setCounter(1)
       setUser(res.data)
      //  users = res.data.map(obj => Object.values(obj));
=======
       setData(res.data)
>>>>>>> 95d148919e733ae511d45a6dd0933e07e833d06f
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
<<<<<<< HEAD
              setCounter(2)
              let obj =  res.data
              delete obj[0].password
              setCurrentUser(obj)
=======
                setData(res.data)
>>>>>>> 95d148919e733ae511d45a6dd0933e07e833d06f
            })
            .catch(err=>console.log(err))
        }

   //delete user when token provided
          const deleteHandler =(e) =>{
<<<<<<< HEAD
=======
      
>>>>>>> 95d148919e733ae511d45a6dd0933e07e833d06f
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
<<<<<<< HEAD


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
=======
  
  //update plan and isActive when token provided
        const updateHandler =(e) =>{
    
          e.preventDefault()
          axios.put('http://localhost:3030/api/v1/user/me',{plan:2,isActive:2},{
            headers:{
              'Authorization':`token ${localStorage.getItem('token')}`
            }
          })
          .then((res)=>{
              console.log(res.data)
>>>>>>> 95d148919e733ae511d45a6dd0933e07e833d06f
          })
          .catch(err=>console.log(err))
      }

<<<<<<< HEAD
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
 
=======
      
  console.log(data);
>>>>>>> 95d148919e733ae511d45a6dd0933e07e833d06f
    return (
  <div>
    <Navbar/>
    <Container>
    <Box>
<<<<<<< HEAD
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

=======
    <Button variant={'outlined'} onClick={getAllUserHandler}>get all user</Button>
    <Button variant={'outlined'} onClick={getUserByIdHandler}>get UserById</Button>
    <Button variant={'outlined'} onClick={deleteHandler}>delete user</Button>
    <Button variant={'outlined'} onClick={updateHandler}>update user</Button>
    </Box>
    {/* <div><h1>This is Admin page</h1></div>
       <form >
    <button className="button" onClick={getAllUserHandler}>get all user</button>
    <button className="button" onClick={getUserByIdHandler}>get UserById</button>
    <button className="button" onClick={deleteHandler}>delete user</button>
    <button className="button" onClick={updateHandler}>update user</button>
    <table className="table table-bordered">
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Time Stamp</th>
                <th>Plan</th>
                <th>IsActive</th>
            </tr>
  
            {data.map((data, index) => (
              <tr data-index={index}>
                <td>{data.user_id}</td>
                <td>{data.email}</td>
                <td>{data.timestamp}</td>
                <td>{data.plan}</td>
                <td>{data.isActive}</td>
              </tr>
            ))}
  
        </table>
    
   </form>  */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="center" >Id</TableCell>
              <TableCell align="center" >Email</TableCell>
              <TableCell align="center">Timestamp</TableCell>
              <TableCell align="center">Plan</TableCell>
              <TableCell align="center">IsActive</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map((data,index) => (
              <TableRow key={index}  >
                <TableCell component="th" scope="row" align="center">
                  {index+1}
                </TableCell>
                <TableCell align="center">{data.email}</TableCell>
                <TableCell align="center">{data.timestamp}</TableCell>
                <TableCell align="center">{data.plan}</TableCell>
                <TableCell align="center">{data.isActive}</TableCell>
              </TableRow>
            ))}
        
        </TableBody>
      </Table>
    </TableContainer>
>>>>>>> 95d148919e733ae511d45a6dd0933e07e833d06f
    </Container>
  </div>
    )
 }
<<<<<<< HEAD
//  <Table data={users} userFields={userFields}/>
=======
 
>>>>>>> 95d148919e733ae511d45a6dd0933e07e833d06f
export default withRouter(Admin)