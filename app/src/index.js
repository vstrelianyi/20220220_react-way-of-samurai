import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// STATE
import store from './redux/store';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={ store }/>
    </React.StrictMode>,
    document.getElementById( 'root' )
  );
};

render();
store.subscribe( render );