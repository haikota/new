import React, { Component } from 'react';
import Routes from './config/routers';
import { BrowserRouter } from 'react-router-dom';
import Header from './component/layout/header/Header'
import Menu from './component/layout/menu/Menu';
import Footer from './component/layout/footer/Footer';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <Header />
            <Menu />
            <div className="content">
              <Routes />
            </div>
            <Footer />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
