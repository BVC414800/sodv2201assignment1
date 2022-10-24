// Sign In Page

import React, { Component } from 'react';

class LogInPage extends Component {
  state ={};
  render() {
    return  (
      
    <div>
       <h1> Log In Section  </h1>
          <form onSubmit={this.handleSubmit}>
       
       <label>
        Email:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
      
     
       <label>
        UserName:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
  
       <label>
        Password:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
       
       <label>
        Phone Number:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
      
       <input type ="submit" value ="Login"/>
      
  
   </form>
  
    </div>
  );
   
}
}
export default LogInPage;
