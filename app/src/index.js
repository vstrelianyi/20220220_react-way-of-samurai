import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import state from './redux/state';
import { addPost, updateNewPostText } from './redux/state';

const { profilePage, chatPage, } = state;

ReactDOM.render(
  <React.StrictMode>
    <App profilePage={ profilePage } chatPage={ chatPage } addPost={ addPost } updateNewPostText={ updateNewPostText }/>
  </React.StrictMode>,
  document.getElementById( 'root' )
);