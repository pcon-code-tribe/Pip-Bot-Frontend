import React, { Component } from 'react'
import Login from './components/Login'


export default class App extends Component {
  constructor(){
    super()
    // initialising state to empty string
    this.state = {
      email:" ",
      password:" "
    }
  }

  // function fired whenever user types a letter
  changeHandler = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  // function fired when user submits the signin form
  submitHandler =(e) =>{
    e.preventDefault()
    alert(this.state.email+this.state.password)
  }
  
  render() {
    return (
      <div>
       {/* passing state and function as props */}
        <Login state={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
      </div>
    )
  }
}

