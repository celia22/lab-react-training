import React, { Component } from 'react';
import "./Dice.css"

const randomDice = Math.floor(Math.random() * 5) + 1;
const randomDice2 = Math.floor(Math.random() * 5) + 1; 
class Dice extends Component{
  constructor(props){
    super(props)
    this.state = {
      imgSource: `/img/dice${[randomDice]}.png`
    }
  }

  changeWhite= () => {    
    this.setState({
      imgSource: `/img/dice-empty.png`
    })    
  }

  changeRandom= () => {       
      this.setState({      
      imgSource: `/img/dice${[randomDice2]}.png`
    })    
  }

  componentDidUpdate = () => {
    setTimeout(this.changeRandom, 1000);
  }  

   render(){
    return(   
      <div>
        <img className="Dice" src={this.state.imgSource} onClick={this.changeWhite} alt="foto" />
      </div> 
     )      
    }
  }


export default Dice;