
import './App.css';
import CardsList from '../component/cardList';
import SearchBox from '../component/searchBox';
import React from 'react';
import Scroll from '../component/Scroll.jsx'
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearch = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    return !this.state.robots.length ? <h1 className='tc red'>Loading</h1>
      : (
        <>
          <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearch} />
            <Scroll>
              <CardsList robots={this.state.robots}
                searchRobots={this.state.searchfield} />
            </Scroll>
          </div>
        </>
      )
  }
}
export default App;


//*whenever the states get updated the render function gets run again the virtual dom detects the change so it repaints the whole picture again and call the render function again in the from one of the update life-cycle again

//!we can't pass the function interacts with the event in the render function remember this too

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