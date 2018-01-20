import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom'
import { inject } from 'mobx-react';
import './App.less';
import indexedDb from  './utils/indexedDb';
import Index from "./page/index";
import RightClick from "./components/rightClick/RightClick";

@inject('UrlStore','RightClickStore', 'WeatherStore')
class App extends Component {

  componentWillMount() {
    indexedDb.checkDb().then(e=>{
      indexedDb.getStore('url').then(e=>{
        this.props.UrlStore.setUrls(e)
      });
    }).catch(e => {
      if(e.code === 300){
        indexedDb.initDb();
      }
    })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Index} />
        </Switch>

        <RightClick/>
      </div>
    );
  }
}

export default App;


