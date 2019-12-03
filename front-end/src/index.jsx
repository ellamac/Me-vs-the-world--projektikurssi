import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
serviceWorker.register();
