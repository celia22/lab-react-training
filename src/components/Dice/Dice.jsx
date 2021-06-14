import React, { Component } from 'react';
import "./Dice.css"

// changeImage = () => {
//   const randomDice = Math.floor(Math.random() * 5) + 1;
//   this.setState({
//     imgSource: `/img/dice${[randomDice]}.png`
//   })
//   console.log(randomDice)
// }

class Dice extends Component{
  constructor(props){
    super(props)
    this.state = {
      imgSource: '/img/dice-empty.png'
    }
  }

  changeImage = () => {
    const randomDice = Math.floor(Math.random() * 5) + 1;
    this.setState({
      imgSource: `/img/dice${[randomDice]}.png`
    })
    console.log(randomDice)
  }

  componentDidMount = () => {
    setInterval(this.changeImage, 1000);
  }

  render(){
    return(
   
      <div>
        <img className="Dice" src={this.state.imgSource} alt="foto" />
      </div>
    )
      
    }
  }


export default Dice;