import React,{useState,useEffect} from 'react'
import { withRouter,useLocation,Link} from "react-router-dom";
import Navbar from './Navbar'
import axios from 'axios'
import css from "./Home.css"

 function Admin() {
    //  const location = useLocation()
    //  const data = location.state.isAuth
    //  console.log(data)
     
    // console.log(location.state.isAuth)
   const [data,setData] = useState([])

   //return all the users in database
        const getAllUserHandler = (e)=>{
          e.preventDefault();
          axios.get('http://localhost:3030/api/v1/user/')
          .then((res)=>{
             console.log(res.data)
             setData(res.data)
          })
          .catch(err=>console.log(err))
        }
        
  //get user by id
        const getUserByIdHandler = (e) =>{
          e.preventDefault();
            axios.get('http://localhost:3030/api/v1/user/me',{
              headers:{
                'Authorization':`token ${localStorage.getItem('token')}`
              }
            })
            .then((res)=>{
                setData(res.data)
                console.log(res.data[0].email)
            })
            .catch(err=>console.log(err))
        }

   //delete user when token provided
          const deleteHandler =(e) =>{
      
            e.preventDefault()
            axios.delete('http://localhost:3030/api/v1/user/me',{
              headers:{
                'Authorization':`token ${localStorage.getItem('token')}`
              }
            })
            .then((res)=>{
              
                console.log(res.data)
            })
            .catch(err=>console.log(err))
        }
  
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
          })
          .catch(err=>console.log(err))
      }
  console.log(data);
    return (
  <div>
    <Navbar/>
    <div><h1>This is Admin page</h1></div>
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
    
   </form> 
  </div>
    )
 }
 
export default withRouter(Admin)