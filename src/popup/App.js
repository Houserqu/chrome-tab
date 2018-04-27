import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom'
import { inject } from 'mobx-react';
import './App.less';

import Index from "./page/index";

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