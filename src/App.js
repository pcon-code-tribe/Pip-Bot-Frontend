import React, { Component } from 'react'
import Wrapper from './containers/Wrapper'
import AlertDialog from './components/AlertDialog'
import Home from './components/Home'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Logs from './components/Logs'

export default class App extends Component {
   constructor(props)
   {
     super(props)
     this.state={
       status : false  //initial login status
     }
   }
                      //fired when users logs in correctly 
                      //sets loginstatus to true
    isAuthenticated = () => {
      this.setState({status:true})
      console.log(this.state.status)
   }

  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          {/* Parent element wraps Login.js and Register.js */}
          {/* passing isAuthenticated as props */}
          <Route exact path='/' render={(props)=>{return(<Wrapper isAuthenticated={this.isAuthenticated}/>)}}/>

          {/* protected route can be accessed only after login status = true */}
          <ProtectedRoute  path='/home' component={Home}  isAuth={this.state.status}/> 
          <ProtectedRoute path='/Logs' component={Logs} isAuth={this.state.status}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

