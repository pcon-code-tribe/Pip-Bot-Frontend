import React, { Component } from 'react'
import Wrapper from './containers/Wrapper'
// import AlertDialog from './components/AlertDialog'
import Home from './components/home/Home'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import LogFile from './components/home/logs/LogFile'
import Logout  from './components/user/Logout';
import Admin from './components/home/Admin'


export default class App extends Component {
   constructor(props)
   {
     super(props)
     this.state={
       status : false  //initial login status
     }
   }

  //check if user has already logged in
componentWillMount(){
  (localStorage.getItem('token')!=null)? this.setState({status:true}):this.setState({status:false})
}
                     //fired when users logs in correctly 
                    //sets loginstatus to true
   isLogin = () => {
        this.setState({status:true})
     }                  
   isLogout = ()=>{
        this.setState({status:false})
        console.log(this.state.status)
     }


  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          {/* Parent element wraps Login.js and Register.js
          passing isAuthenticated as props */}
          <Route exact path='/' render={(props)=>{return(<Wrapper isLogin={this.isLogin}/>)}}/>
          {/* protected route can be accessed only after login status = true */}
          <ProtectedRoute  path='/home' component={Home}  isAuth={this.state.status} /> 
          <ProtectedRoute exact path='/logs' component={LogFile} isAuth={this.state.status}/>
          <ProtectedRoute exact path='/Admin' component={Admin} isAuth={this.state.status}/>
          <Route exact path='/logout' render={(props)=>{return(<Logout isLogout={this.isLogout}/>)}} /> 

        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

