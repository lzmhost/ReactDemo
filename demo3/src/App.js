import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyCalendar from './MyCalendar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{padding:"20px 40px",textAlign:"center"}}>
            <MyCalendar></MyCalendar>
        </div>
      </div>
    );
  }
}

export default App;
