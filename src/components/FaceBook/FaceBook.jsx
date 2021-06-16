import profiles from '../../data/berlin.json';

import React, { Component } from "react";

class FaceBook extends Component {
  constructor(props){
    super(props)
    this.state={
      profilesJSON: profiles,
      countries: []
    }
  }

countriesArray = () => {
  const { profilesJSON } = this.state
  let arr = []
  profilesJSON.forEach((item, index) => {
    if(item.country[index] !== item.country){
      arr.push(item.country[index])
    }
  })
  this.setState = {
    countries: arr,
  }
}


  render(){
    const {profilesJSON} = this.state
    return(    
      
    profilesJSON.map((item, index) => {
      return(          
        <div key={index} className="idCard">
          <img src={item.img} alt="IDcard"/>
          <div className="data_container">
          <p><b>First name: </b>{item.firstName}</p>
          <p><b>Last name:</b> {item.lastName}</p>
          <p><b>Country:</b> {item.country}</p>
          <p><b>Type: </b>{item.isStudent}</p>
          </div> 
        </div>     
        )  
    })    
    )    
  }
}

export default FaceBook;