import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UrlStore from './stores/UrlStore';
import { Provider } from 'mobx-react';

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
