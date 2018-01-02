import React, { Component } from 'react';
import { inject } from 'mobx-react';
import logo from './logo.svg';
import './App.css';
import nav from './utils/default-nav.json';
import UrlList from './components/Url/UrlList';

@inject('UrlListModel')
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          
        <UrlList data={this.props.UrlListModel.todos} />

      </div>
    );
  }
}

export default App;
