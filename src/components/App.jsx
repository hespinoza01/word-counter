import React, {Component} from 'react';
import Indicator from './Indicator';
import TextBox from './TextBox';
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
        textContent: '',
        counter: 0
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleTextChange(e){
    let value = e.target.value,
        counter = (value.length > 0) ? value.split(' ').length : 0;

    this.setState({
        textContent: value,
        counter: counter
    });
  }

  handleClear(){
    this.setState({
        textContent: '',
        counter: 0
    });
  }

  render(){
    return(
      <div className="App">
        <Indicator counter={this.state.counter}/>
        <TextBox onChange={this.handleTextChange} value={this.state.textContent} />
        <button className="btnClear" onClick={this.handleClear}>Limpiar caja de texto</button>
      </div>
    );
  }
}
