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
        <div className='spotadd'><a href='#' onClick={() => this.onClickAdd()}><img src ={add}/>Add To Favorites</a></div>
      )
    }
    else {
      return (
        <div className='spotadd'><img src ={checkmark} /><a href='#' onClick={() => this.onClickRemove()}>Remove</a></div>
      )
    }
  }
}