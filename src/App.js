import React, { Component } from 'react';

import Canvas from './Canvas';

import logo from './assets/images/logo.svg';
import './assets/styles/App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Canvas text={"text"}/>
      </div>
    );
  }
}

export default App;
