// DAL
import { authAPI } from '../api/api';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = ( state = initialState, action ) => {
  const { type, } = action;
  switch ( type ){
  case 'SET_AUTH_USER_DATA':{
    const { payload: { userId, email, login, }, } = action;

    return {
      ...state,
      userId, email, login,
      isAuth: true,
    };
  }

  default:{
    return state;
  }
  }
};

export default authReducer;

// ACTION CREATORS
const setAuthUserData = ( userId, email, login ) => {
  return {
    type: 'SET_AUTH_USER_DATA',
    payload: { userId, email, login, },
  };
};

// THUNKS
const getAuthMeThunkCreator = () => {
  return ( dispatch ) => {
    authAPI.me()
      .then( data => {
        const { userId, email, login, } = data;
        if ( userId ){
          dispatch( setAuthUserData( userId, email, login ) );
        }
      } )
      .catch( error => {
        console.log( error );
      } );
  };
};

export {
  setAuthUserData,
  getAuthMeThunkCreator
};