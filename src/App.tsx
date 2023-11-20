import React from 'react';

import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Balls from './components/balls/balls';

function App() {
  return (
    <div className="App">
      <Header/>
      <Balls/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
