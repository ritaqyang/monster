import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:{first:"rita",last:"yang"},
      monsters:[]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users)=> 
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
        
     
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
