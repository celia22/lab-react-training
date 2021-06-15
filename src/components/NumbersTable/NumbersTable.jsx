import React, { Component } from 'react';
import "./NumbersTable.css"

class NumbersTable extends Component{
  constructor(props){
    super(props)
    this.state = {
      limit: this.props.limit, 
      arrayNumbers: []    

    }
  }

  createNumbers = () => {
    let array = []
    const { limit } = this.state
    for (let i = 1; i < limit; i++){
      array.push(i)     
    }
    this.setState = {
      arrayNumbers: array,
    }
  }

  render(){     
    
    return(
      
     <div>
       {this.state.arrayNumbers.map((item, index) => {
         <ul>
           <li>{item}</li>
         </ul>

       })}

     </div>
  
    )    
  }
}

export default NumbersTable;