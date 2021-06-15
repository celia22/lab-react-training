import React, { Component } from "react";
import "./SignupPage.css"

class SignupPage extends Component{
  constructor(){
    super()
    this.state = {
      email: "",
      password: "",
      nationality: "",
      greeting: "en"
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render(){
    const {email, password, nationality} = this.state
    let hello = nationality === 'fr' ? "Bonjour" 
        : nationality === 'en' ? "Hello" 
        : nationality === 'de' ? "Hallo"  
        : "Hello";

    return(
      <div >
       <form className="signup_page_container">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange}/>
 
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange}/>
          
          <label>Nationality:</label>
            <select name="nationality" value={nationality} onChange={this.handleChange}>
              <option value="en">"en"</option> 
              <option value="de">"de"</option> 
              <option value="fr">"fr"</option>
            </select>
          
            <button>Submit</button>

          <p>{hello}</p>
          <p>Your email address is: {email}</p>
       </form>

      </div>
    )
  }
}

export default SignupPage;
