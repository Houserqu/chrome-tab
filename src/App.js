import React, { Component } from 'react';
import { inject } from 'mobx-react';
import logo from './logo.svg';
import './App.less';
import nav from './utils/default-nav.json';
import UrlList from './components/Url/UrlList';
import Search from "./components/search/Search";

@inject('UrlStore')
class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <UrlList data={this.props.UrlStore.todos} />
      </div>
    );
  }
}

export default App;
