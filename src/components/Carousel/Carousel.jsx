import React, { Component } from 'react';
import "./Carousel.css"

class Carousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgs: this.props.imgs,
      index: 0,
    }
  }

  handlerLeft = () => {
    const { index } = this.state;
    (index >= 1 ) && this.setState({index: index - 1})
    console.log(this.state.index)
  }


  handlerRigth = () => {
    const { imgs, index } = this.state;
    (index < imgs.length  - 1) && this.setState({index: index + 1}) 
    console.log(this.state.index)
  }

  render(){
    return(
      <div className="carousel_container">
        <button onClick={this.handlerLeft}>Left</button>
        <img src={this.props.imgs[this.state.index]} alt="pictures" />
        <button onClick={this.handlerRigth}>Rigth</button>
      </div>
    )
  }
}

export default Carousel; 