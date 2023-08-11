
import './App.css';
import CardsList from './cardList';
import { robots } from '../robots';
import SearchBox from '../component/searchBox';
import React from 'react';


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearch = (event) => {

        // this.setState.searchfield = event.target.value;
        this.setState({ searchfield: event.target.value });
        // *the reason we're using the arrow functions is because as soon the app get redner it'll that pass that function to the searchBox now when the the input will get hit then that will get call but remember since that function get called when the input get click or the change then at that time the this will refer to that element not the app state so we use the arrow function that binds the arrow function to the that object,also just we use the setState so that react can rememer what was the previous conditions
        const filterRobots =
            this.state.robots.filter(robot => {
                return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
            })

        console.log(filterRobots);
    };
    render() {
        return (
            <>
                <div className='tc 	--dark-blue'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearch} />
                    <CardsList robots={this.state.robots} searchRobots={this.state.searchfield} />
                </div>
            </>
        )
    }
}
export default App;


//*state is something that can changen and effect our app and the most important thing is that it actually changes and we define the in class based Component,usually lives on the parent component and parent passes the different kind od the state




//*state is like the container that contains all of the logic inside of it and that parent component can pass pass the one state to the another component so that those can interact
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


//*empty gets treated as the false or 0