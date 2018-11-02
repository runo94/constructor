import React, { Component } from 'react';
import { connect } from 'react-redux';

import Canvas from './Canvas';
import TextForm from './TextForm';
import * as actions from '../assets/actions/texts';

import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TextForm />
        <Canvas text={this.props.texts.value}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    texts: state.texts
})

export default connect(mapStateToProps, actions)(App);
