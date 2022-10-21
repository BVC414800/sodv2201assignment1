// eslint-disable-next-line no-undef, no-unused-vars
class welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
      <form onSubmit={this.handleSubmit}>
     
       <label>
        UserName:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
      
     
       <label>
        Password:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
       
      
       <input type ="submit" value ="Login"/>
      

   </form>
        );
    }
}


