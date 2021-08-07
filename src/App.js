import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:"mohit",
      Roll: "354"
    }
  }
 componentDidMount(){
   
 }
  render(){
 
  return (
    <div className="App">
      <h1>{this.state.name}</h1>
      <h2>{this.state.Roll}</h2>
<button onClick={()=>{this.setState({name: "Yash"}); }}>Change Name</button>
<button onClick={()=>{this.setState({name: "Mohit"}); }}>Change Name2</button> 
<button onClick={()=>{this.setState({Roll: "Salar"}); }}>Change Name3</button>
    </div>
  )};
}

export default App;
