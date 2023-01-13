import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TodaysPlan from './03/TodaysPlan';
import PropsComponent from './03/PropsComponent';

class App extends React.Component {
  render() {
    return (
      <PropsComponent name='두잇! 리액트' />
    );
  }
}

export default App;