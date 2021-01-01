import React, { Component } from 'react';
import Card from './card';
import Jumbotron from './jumbotron';
import Navbar from './navbar';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Navbar/>
        <Jumbotron/>
        <Card/>
      </div>
     );
  }
}
 
export default App;