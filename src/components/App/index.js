import React, { Component } from 'react';
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
import GistList from '../GistList';

const GITHUB_API = 'https://api.github.com';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gists: [],
      username: '',
      isLoading: false,
      forks: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleForksReponse = this.handleForksReponse.bind(this);
    this.fetchForks = this.fetchForks.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var username = this.state.username;
    if (!username) {
      this.setState({gists: [], isLoading: false});
      return;
    }

    const gists = localStorage.getItem(username);
    if (!!gists) {
      this.setState({gists: JSON.parse(gists), isLoading: false});
      this.fetchForks(JSON.parse(gists));
      return;
    }

    this.setState({gists: [], isLoading: true});

    fetch(GITHUB_API + "/users/" + username + "/gists")
      .then(this.handleError)
      .then(response => response.json())
      .then(json => this.handleResponse(json, username))
      .catch(error => console.log(error));
  }

  handleError(response) {
    if (!response.ok) {
      this.setState({isLoading: false});

      const error = Object.assign({}, response, {
        status: response.status,
        statusText: response.statusText,
      });

      return Promise.reject(error);
    }

    return response;
  }

  handleChange(e) {
    e.preventDefault()

    this.setState({username: e.target.value});
  }

  handleResponse(response, key) {
    localStorage.setItem(key, JSON.stringify(response));
    this.setState({gists: response, isLoading: false});

    this.fetchForks(response);
  }

  fetchForks(gists) {
    gists.forEach((g, i) => {

      var forks = localStorage.getItem(g.id);
      if (!!forks) {
        this.setState(state => {
          state.forks[g.id] = JSON.parse(forks);
          return {forks: state.forks};
        });

        return;
      }

      fetch(g.forks_url)
        .then(this.handleError)
        .then(response => response.json())
        .then(json => this.handleForksReponse(json, g))
        .catch(error => console.log(error));
    });
  }
  
  handleForksReponse(forks, gist) {
    localStorage.setItem(gist.id, JSON.stringify(forks));
    this.setState(state => {
      state.forks[gist.id] = forks; 
      return {forks: state.forks};
    });
  }

  render() {
    return (
      <div className="app">
        <Header handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <main className="app__main">
          <GistList gists={this.state.gists} forks={this.state.forks} isLoading={this.state.isLoading}/>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
