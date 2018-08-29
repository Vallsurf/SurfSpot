import React, { Component } from 'react';  
import add from '../assets/add.png'; 
import checkmark from '../assets/checkmark.png'; 
import {removeFavorite, addFavorite} from '../actions'

export default class Spotadd extends Component {
  onClickRemove() {
    const spotid = this.props.id; 
    console.log(spotid);
    this.props.dispatch(removeFavorite(spotid)); 
  }

  onClickAdd() {
    const spotid = this.props.id; 
    console.log(spotid);
    this.props.dispatch(addFavorite(spotid)); 
  }

  render() {
    
    if(this.props.addButton === -1){
      return (
        <div><a href='#' onClick={() => this.onClickAdd()}><img src ={add} width='25px' height='25px'/>Add To Favorites</a></div>
      )
    }
    else {
      return (
        <div><img src ={checkmark} width='25px' height='25px'/><a href='#' onClick={() => this.onClickRemove()}>Remove from Favorites</a></div>
      )
    }
  }
}