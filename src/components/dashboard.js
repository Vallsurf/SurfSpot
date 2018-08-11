import React, { Component } from 'react'
import Navbar from './navbar';
import Spot from './spot'
import './dashboard.css'

export default class Dashboard extends Component {
  render() {
    
    return (
      <div className="dashboard">
          <Navbar />
        <h1>My Spots</h1>
            <Spot />
      </div>
    )
  }
}
