import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// STATE
// import store from './redux/store';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

// setInterval( () => {
//   store.dispatch( { type: 'FAKE', } );
// }, 1000 );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);
