import { combineReducers, createStore } from 'redux';

import profileReducer from './profile-reducer';
import chatReducer from './chat-reducer';
import usersReducer from './users-reducer';

const reducers = combineReducers(
  {
    profilePage: profileReducer,
    chatPage: chatReducer,
    usersPage: usersReducer,
  }
);

const store = createStore( reducers );
window.store = store;

export default store;