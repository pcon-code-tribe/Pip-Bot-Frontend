import React,{useState} from 'react'
import { withRouter,useLocation} from "react-router-dom";
import Navbar from './Navbar';
 function Home() {
    //  const location = useLocation()
    //  const data = location.state.isAuth
    //  console.log(data)
     
    // console.log(location.state.isAuth)
    return (
      <>
      <Navbar/>
  <h1>This is home section</h1>
  </>
    )
}
 
export default withRouter(Home)