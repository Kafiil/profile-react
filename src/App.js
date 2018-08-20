import React, { Component } from 'react';
import './App.css';
import { MainNav } from './components/navbar/navbar.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
      </div>
    );
  }
}

export default App;
