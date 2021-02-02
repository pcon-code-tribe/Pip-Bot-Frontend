import React, { Component } from 'react'
import Wrapper from './containers/Wrapper'
import AlertDialog from './components/AlertDialog'
export default class App extends Component {
 

  render() {
    return (
      <div>
         {/* Parent element wraps Login.js and Register.js */}
        <Wrapper />
       
      </div>
    )
  }
}

