import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

import UrlStore from './stores/UrlStore';

import checkDb from  './utils/indexedDb';

let indexedDb = new checkDb;

indexedDb.getStore('url').then(result=>{
  console.log(result);
}).catch(e=>{
  console.error(e);
});

indexedDb.getObject('urls', 1).then(result => {
  console.log(result);
}).catch(e => {
  console.error(e)
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
