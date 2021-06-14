import React, { Component } from 'react';
import "./LikeButton.css"

const colors = ['purple','blue','green','yellow','orange','red']
const randomColor = Math.floor(Math.random() * colors.length);

class LikeButton extends Component{

  constructor(props){
    super(props)
    this.state = {
      likes: 0,
      color: "purple"
    }
  }

  moreLikes = (x) => {
    const { likes, color } = this.state;
    this.setState({
      color: colors[randomColor],
      likes: likes + 1,
      
    })    
  }

  render(){
    return(
      <div className="button_likes_container">
        <button className="button_likes"  style={{backgroundColor: this.state.color}}
        onClick={this.moreLikes} value={this.state.likes} 
        > {this.state.likes} Likes </button>
      </div>
    )
  }
}




export default LikeButton;