import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

import UrlListModel from './models/UrlListModel';

const stores = {
  UrlListModel
};

ReactDOM.render((
  <Provider {...stores}>
    <App />
  </Provider>
),document.getElementById('root'));
registerServiceWorker();
