import React, { Component } from 'react';  
import add from '../assets/add.png'; 
import checkmark from '../assets/checkmark.png'; 
import {removeFavorite, addFavorite} from '../actions/actions'

export default class Spotadd extends Component {
  onClickRemove() {
    const spotid = this.props.id; 
    this.props.dispatch(removeFavorite(spotid)); 
  }

  onClickAdd() {
    const spotid = this.props.id; 
    this.props.dispatch(addFavorite(spotid)); 
  }

  render() {
    if(this.props.addButton === -1){
      return (
        <div className='spotadd'><a href='#' onClick={() => this.onClickAdd()}><img src ={add} alt='add'/>Add To Favorites</a></div>
      )
    }
    else {
      return (
        <div className='spotremove'><img src ={checkmark} alt='remove'/><a href='#' onClick={() => this.onClickRemove()}>Remove</a></div>
      )
    }
  }
}