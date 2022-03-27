import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import profileReducer from './profile-reducer';
import chatReducer from './chat-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';

const reducers = combineReducers(
  {
    profilePage: profileReducer,
    chatPage: chatReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
  }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers, composeEnhancers(
  applyMiddleware( thunkMiddleware )
) );

window.store = store;

export default store;