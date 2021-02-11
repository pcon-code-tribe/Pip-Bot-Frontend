import axios from 'axios';
import React,{useState} from 'react'
import { withRouter,useLocation, NavLink, useHistory} from "react-router-dom";
import css from "./Home.css"
import Navbar from './Navbar';
 function Home() {
   const [websitename,setname]=useState("");
   const [websitelink,setlink]=useState("");
   const [webtags,setTags]=useState("");
   const [webInterval,setinterval]=useState("");
   const [userid,setUserid]=useState("");

   const history = useHistory();
//  console.log(history.location.name); //it contains the token 

  // const apiUrl='http://localhost:3030/add-websites';
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
    e.preventDefault();
    setUserid(history.location.user_id);  //user_id is taken from history which was pushed from Login.js
   axios.post("http://localhost:3030/add-websites",{} ,{headers:{"authorization":`Bearer ${history.location.name}`}},
   {
    website_name:websitename,
    tags:webtags,
    link:websitelink,
    interval:webInterval,
    user_id:userid})
    .then((response)=>{
      console.log(response);
      setUserid("");
      setinterval("");
      setlink("");
      setname("");
      setTags("");
      console.log("Website added successfully");
    })
    .catch(err=>{
      console.log(err);
    })
  }

    return (
      <>
      <Navbar/>
      <div className="container">
      <div className="content">
        <div>
          <h1>Input the website details</h1><br/>
        </div>
        <div>
          <form>
            <input className="input" onChange={(x)=>{setname(x.target.value)}} value={websitename} type="text" placeholder="Website name*"/><br/><br/>
            <input className="input" onChange={(x)=>{setlink(x.target.value)}} value={websitelink} type="text" placeholder="Website link*"/><br/><br/>
            <input className="input" type="text" onChange={(x)=>{setTags(x.target.value)}} value={webtags} placeholder="Tags*"/><br/><br/>
            <input className="input" onChange={(x)=>{setinterval(x.target.value)}} value={webInterval} type="number" placeholder="Interval*"/><br/><br/>
            <button className="button" onClick={submitHandler}>Submit</button>
          </form>
        </div>
        </div>
      </div>
      </>
    )
}
 
export default withRouter(Home)