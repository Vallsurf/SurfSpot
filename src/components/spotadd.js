import React, { Component } from 'react'; 
import add from '../assets/add.png'; 
import checkmark from '../assets/checkmark.png'; 

export default class Spotadd extends Component {
  render() {
    return (this.props.data.map(userspots => {
      if (this.props.id == userspots.spot_id) {
        console.log('same')
        return (
          <div><img src ={checkmark} width='25px' height='25px'/><a href='#'>Remove</a></div>
        )
      }
      else {
        return (
          <div><a href='#'><img src ={add} width='25px' height='25px'/></a>Add To Favorites</div>
        )
      }
    })
    )
  }
}
