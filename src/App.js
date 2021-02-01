import React, { Component } from 'react'
import Wrapper from './containers/Wrapper'

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

