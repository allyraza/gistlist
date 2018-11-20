import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GistList from './components/GistList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gists: [],
      isLoading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(e.target);
  }

  render() {
    return (
      <div className="app">
        <Header handleSubmit={this.handleSubmit}/>
        <main className="app__main">
          <GistList items={[]} />
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
