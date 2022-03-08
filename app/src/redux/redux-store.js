import { combineReducers, createStore } from 'redux';

import profileReducer from './profile-reducer';
import chatReducer from './chat-reducer';

const reducers = combineReducers(
  {
    profilePage: profileReducer,
    chatPage: chatReducer,
  }
);

const store = createStore( reducers );

export default store;