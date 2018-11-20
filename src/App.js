import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GistList from './components/GistList';

class App extends Component {
  render() {
    return (
      <div class="app">
        <Header/>
        <main className="app__main">
          <GistList items={[]} />
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
