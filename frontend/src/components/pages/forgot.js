import React from 'react';

const forgot = () => {
return (
	<div>
	
    <form onSubmit={this.handleSubmit}>
     
       <label>
        Email:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
      
     
      
       
      
       <input type ="submit" value ="Submit"/>
      

   </form>

	</div>
);
};

export default forgot;
