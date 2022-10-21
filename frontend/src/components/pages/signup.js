import React from 'react';

const signup = () => {
return (
	<div>

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
};

export default signup;
