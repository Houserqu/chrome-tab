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

      indexedDb.getStore('category').then(e=>{
        this.props.UrlStore.setCategory(e);
      });
    }).catch(e => {
      if(e.code === 300){
        indexedDb.initDb().then(()=>{
          this.props.UrlStore.resetUrls();
        });
      }
    });

    // indexedDb.checkDb().then(e=>{
    //   indexedDb.getStore('category').then(e=>{
    //     this.props.UrlStore.setCategory(e)
    //   });
    // }).catch(e => {
    //   if(e.code === 300){
    //     indexedDb.initDb().then(()=>{
    //       this.props.UrlStore.resetCategory();
    //     });
    //   }
    // })
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


