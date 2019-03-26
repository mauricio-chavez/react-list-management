import React, { Component } from 'react';

import Validator from './components/Validator/Validator';
import Char from './components/Char/Char';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      text: 'Aglaé',
      chars: []
    };

    this.state.len = this.state.text.length;
  }

  handleTextChange = (event) => {
    const text = event.target.value;
    const len = text.length;

    this.setState({
      text,
      len
    });
  }

  handleDelete = (index) => {
    const chars = [...this.state.text];

    chars.splice(index, 1);

    const text = chars.join('');

    const len = text.length;

    this.setState({
      text,
      len
    });
  }

  render() {

    const textArray = this.state.text.split('');

    const chars = textArray.map((char, index) => {
      return (
        <Char click={() => this.handleDelete(index)} key={index}>
          {char}
        </Char>
      )
    });

    return (
      <div className="App">
        <input className='App-input' type="text" onChange={this.handleTextChange} value={this.state.text} />
        <Validator>{this.state.len}</Validator>
        <div>
          { chars }
        </div>
      </div>
    );
  }
}

export default App;
