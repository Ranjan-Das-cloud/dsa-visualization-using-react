import React, { Component } from 'react';
import Jumbotron from './jumbotron';
import Navbar from './navbar';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Navbar/>
        <Jumbotron/>
      </div>
     );
  }
}
 
export default App;