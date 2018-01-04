import React, { Component } from 'react';
import { inject } from 'mobx-react';
import style from './App.less';
import UrlBox from './components/Url/UrlBox';
import Search from "./components/search/Search";
import Global from './utils/globalClass';

//console.log(Global.get());
@inject('UrlStore')
class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <UrlBox data={this.props.UrlStore.todos} />
      </div>
    );
  }
}

export default App;
