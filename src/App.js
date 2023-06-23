import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:{first:"rita",last:"yang"},
      monsters:[],
      searchField:''
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase(); //get the user input  
    this.setState(() => {
      return { searchField }; //setState shorthand 
    })
  }
  render(){

    const { monsters, searchField } = this.state; 
    const { onSearchChange } = this.onSearchChange; //make code more readable 
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
      <input 
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={onSearchChange}
      />


      <CardList monsters={filteredMonsters}/> 
      
      </div>
    )

  }

}

export default App;
