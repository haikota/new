import React, { Component } from 'react';
import Header from './component/layout/header/Header'
import Menu from './component/layout/menu/Menu';
import Footer from './component/layout/footer/Footer';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Footer/>
      </div>
    );
  }
}

export default App;
