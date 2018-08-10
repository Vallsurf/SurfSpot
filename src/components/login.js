import React, { Component } from 'react'
import './login.css'

export default class Login extends Component {
  render() {
    return (
      <div>
        <form className="login">
        <h1>Welcome to SurfSpot</h1>
        <h2>Coming Soon</h2>
            <input type="text" />
            <input type="password" />
            <button type="submit">Login </button>
            
        </form>
        
      </div>
    )
  }
}
