// DAL
import {
  getAuthMeThunkCreator
} from './auth-reducer';

const initialState = {
  isInitialized: false,
};

const appReducer = ( state = initialState, action ) => {
  const { type, } = action;
  switch ( type ){
  case 'SET_INITIALIZED':{
    const { payload: { isInitialized, }, } = action;

    return {
      ...state,
      isInitialized,
    };
  }
  default:{
    return state;
  }
  }
};

// ACTION CREATORS
const setInitialized = ( isInitialized ) => {
  return {
    type: 'SET_INITIALIZED',
    payload: { isInitialized, },
  };
};

// THUNKS ( for async api calls )
const initializeAppThunkCreator = () => ( dispatch ) => {
  const promise = dispatch( getAuthMeThunkCreator() );
  Promise.all( [ promise, ] )
    .then( () => {
      dispatch( setInitialized( true ) );
    } );
};

export default appReducer;

export {
  initializeAppThunkCreator
};