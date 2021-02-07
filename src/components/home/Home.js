import React,{useState,useEffect} from 'react'
import { withRouter,useLocation,Link} from "react-router-dom";
import axios from 'axios'

 function Home() {
    //  const location = useLocation()
    //  const data = location.state.isAuth
    //  console.log(data)
     
    // console.log(location.state.isAuth)
   const [data,setData] = useState([])

   //return all the users in database
        // const getAllUserHandler = ()=>{

        //   axios.get('http://localhost:3030/api/v1/user/')
        //   .then((res)=>{
        //      console.log(res.data)
        //      setData(res.data)
        //   })
        //   .catch(err=>console.log(err)
        // }
        
  //get user by id
        // const findByIdHandler = () =>{
    
        //     axios.get('http://localhost:3030/api/v1/user/me',{
        //       headers:{
        //         'Authorization':`token ${localStorage.getItem('token')}`
        //       }
        //     })
        //     .then((res)=>{
        //         setData(res.data)
        //         console.log(data)
        //     })
        //     .catch(err=>console.log(err))
        // }

   //delete user when token provided
        //   const deleteHandler =(e) =>{
      
        //     e.preventDefault()
        //     axios.delete('http://localhost:3030/api/v1/user/me',{
        //       headers:{
        //         'Authorization':`token ${localStorage.getItem('token')}`
        //       }
        //     })
        //     .then((res)=>{
              
        //         console.log(res.data)
        //     })
        //     .catch(err=>console.log(err))
        // }
  
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
  //  {/* <form >
  //   <button onClick={getAllUserHandler}>get all user</button>
  //   <button onClick={getUserByIdHandler}>get UserById</button>
  //   <button onClick={deleteHandler}>delete user</button>
  //   <button onClick={updateHandler}>update user</button>
  //  </form> */}
  <div>
    {/* logs page */}
    <Link to='/logs'>Logs Page</Link>
    {/* logout page */}
    <p>   </p>
    <Link to='/logout'>logout</Link>
  </div>
    )
 }
 
export default withRouter(Home)