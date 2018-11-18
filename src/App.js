import React, { Component } from 'react';
import './App.css';
import Test from './components/test.js';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test />
        <Form />
      </div>
    );
  }
}

export default App;
