import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:{first:"rita",last:"yang"},
    }
  
  }
  render(){

    return (
      <>
      <h1>hello {this.state.name.first}</h1>
      <button onClick={()=>{
        this.setState({name:{first:"brian",last:"kehoe"}});

        console.log(this.state);
      }}
       >change name</button>
      </>
    )

  }

}

export default App;
