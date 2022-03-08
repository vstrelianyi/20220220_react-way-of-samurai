import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// STATE
// import store from './redux/store';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const state = store.getState();
const dispatch = store.dispatch;

const render = ( state ) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById( 'root' )
  );
};

render( state );
store.subscribe( () => {
  render( state );
} );