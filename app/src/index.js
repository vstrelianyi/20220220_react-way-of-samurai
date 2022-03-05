import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import state from './redux/state';

const { posts, messages, dialogs, } = state;

ReactDOM.render(
  <React.StrictMode>
    <App posts={ posts } messages={ messages } dialogs={ dialogs }/>
  </React.StrictMode>,
  document.getElementById( 'root' )
);