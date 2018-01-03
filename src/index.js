import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

import UrlStore from './stores/UrlStore';

const stores = {
  UrlStore
};

ReactDOM.render((
  <Provider {...stores}>
    <App />
  </Provider>
),document.getElementById('root'));
registerServiceWorker();
