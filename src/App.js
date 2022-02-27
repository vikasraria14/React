
import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import {robots} from './robots.js';
class App extends React.Component{
  constructor()
    {
      super()
      this.state={
        robots:robots,
        searchField:''
      }
    }

    onSearchChange = (event) =>
    {
      this.setState({searchField: event.target.value});
      console.log(event.target.value);
      
    }
  render(){   
    const filteredRobots=this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())})

    return(
      <div>
        <h1>RoboFriends</h1>
        <Searchbox srch={this.onSearchChange}/>
        <Cardlist robots={filteredRobots} />
      </div>
    );
  }
}









//import { render } from '@testing-library/react';

// class App extends Component {

//   constructor(){
//     super();
//     this.state={
//       mon : [
        
//       ]
//     };
//   }
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users/1/todos')
//     .then(response => response.json())
//     .then( users => this.setState({mon:users}))
//    // .then(console.log(this.state.mon));
//   }
//     render(){
//       return(
//         <div className="App">
        
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" ></img>
//           <p>
//            Not Very Great App By no fghj change Vikas Raria.</p><p> 
//             {this.ind}
//           </p>
//           {this.state.mon.map( m => 
//             <h1>Done {m.title}</h1>
//             )}
//            <button onClick={() => this.setState('')}>Click</button> 
         
//         </header>
//       </div>
//   );
    
//       }
// }

export default App;
