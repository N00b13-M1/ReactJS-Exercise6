import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}

export default App;