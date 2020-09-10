import React, { Component } from 'react';
import './style.css';

class App extends Component{

  constructor (props){
    super(props);
    this.state = {
      numero : 0,
      botao: 'Start'
    };

    this.timer = null;
    this.startTimer = this.startTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  startTimer(){

    if(this.timer == null){
      this.timer = setInterval(() =>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
      this.setState({botao: 'Stop'});
    }
    else{
      clearInterval(this.timer);
      let state = this.state;
      state.botao = 'Start';
      this.setState(state);
      this.timer = null;
    }
  }

  clearTimer(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      state.botao = 'Start';
      this.timer = null;
    }

    state.numero = 0
    this.setState(state);
  }


  render(){
    return(
      <div className = "container">
        <img className = "img" src={require('./assets/cronometro.png')} alt=""/>
        <a className = "timer">{this.state.numero.toFixed(1)}</a>
        <div className = "areaBtn">
          <a className = "botao" onClick = {this.startTimer}>{this.state.botao}</a>
          <a className = "botao" onClick = {this.clearTimer}>Clear</a>
        </div>
      </div>
    );
  }
}

export default App;
