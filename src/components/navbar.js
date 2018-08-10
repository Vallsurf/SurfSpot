import React, { Component } from 'react'
import './navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
          <a href='/dashboard'>SurfSpot.</a>
          <ul>
              <li><a href="/dashboard">Home</a></li>
              <li><a href="/spots">Spots</a></li>
              <li><a href="/dashboard">Logout</a></li>
          </ul>
        
      </div>
    )
  }
}
