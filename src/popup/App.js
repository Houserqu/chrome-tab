import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom'
import { inject, observer } from 'mobx-react';
import './App.less';

import Index from "./page/index";

@inject('UrlStore')
class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
    </div>
    )
  }
}

export default App;