import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

import UrlStore from './stores/UrlStore';

import checkDb from  './utils/indexedDb';

checkDb.checkDb().then(e=>{
  console.log(e);
  checkDb.getStore('url').then(e=>{
    console.log(e)
  });
}).catch(e => {
  console.log(e);
  if(e.code === 300){
    checkDb.initDb();
  }
})

const stores = {
  UrlStore
};

ReactDOM.render((
  <Provider {...stores}>
    <App />
  </Provider>
),document.getElementById('root'));
registerServiceWorker();
