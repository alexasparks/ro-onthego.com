import React, { Component } from 'react';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar'
import './BusinessOverview'
import BusinessOverview from './BusinessOverview';
import Services from './Services'
import About from './About'
import Contact from './Contact'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        {/* This is where the components should go. */}
        <Navbar />
        <BusinessOverview />
        <Services />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
