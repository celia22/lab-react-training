import React, { Component } from 'react';
import "./ClickablePicture.css"

class ClickablePicture extends Component{
  constructor(props){
    super(props)
    this.state = {
      img: this.props.img,
      glasses: false,
    }
  }

  changeImage = () => { 
    this.setState({    
      glasses: !this.state.glasses,      
    })
    this.state.glasses ? this.setState({img:this.props.imgClicked}) : this.setState({img:this.props.img})
  }

  render(){
    return(
      <div>
        <img className="ClickablePicture" src={this.state.img} onClick={this.changeImage} alt="foto" />
      </div>
    )
  }
}

export default ClickablePicture;