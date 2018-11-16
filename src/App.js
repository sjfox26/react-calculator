import React, { Component } from 'react';
import Calculator from './containers/Calculator';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app-component">
        <Calculator />
      </div>
    );
  }
}

export default App;
