import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

import indexedDb from  './utils/indexedDb';
import UrlStore from './stores/UrlStore';

let stores = {
  UrlStore
};

ReactDOM.render((
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
),document.getElementById('root'));
registerServiceWorker();
