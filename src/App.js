import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:{first:"rita",last:"yang"},
      monsters:[
        {
          name:"James"
        },
        {
          name:"Lara"
        },
        {
          name:"Zehra"
        },
        {
          name:"Rachel"
        }
      ]
    }
  
  }
  render(){

    return (
      <>
      <h1>hello {this.state.name.first}</h1>
      <button onClick={()=>{
        this.setState({name:{first:"brian",last:"kehoe"}});

        console.log(this.state);
      }}>change name</button>
      {this.state.monsters.map((monster)=>{
        return <h1>{monster.name}</h1>;
      })}
      </>
    )

  }

}

export default App;
