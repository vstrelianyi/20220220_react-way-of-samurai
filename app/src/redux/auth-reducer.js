// DAL
import { authAPI } from '../api/api';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: true,
};

const authReducer = ( state = initialState, action ) => {
  const { type, } = action;
  switch ( type ){
  case 'SET_AUTH_USER_DATA':{
    const { payload: { userId, email, login, }, } = action;

    return {
      ...state,
      userId, email, login,
    };
  }
  case 'LOGIN_USER':{
    const { payload: { data: { resultCode, data: { userId, }, }, }, } = action;

    return {
      ...state,
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

const loginUser = ( userId ) => {
  return {
    type: 'LOGIN_USER',
    payload: { userId, },
  };
};

// THUNKS
const getAuthMeThunkCreator = () => {
  return ( dispatch ) => {
    authAPI.me()
      .then( data => {
        const { id, email, login, } = data;
        if ( id ){
          dispatch( setAuthUserData( id, email, login ) );
        }
      } )
      .catch( error => {
        console.log( 'getAuthMeThunkCreator', error );
      } );
  };
};

const loginUserThunkCreator = ( data ) => {
  return ( dispatch ) => {
    authAPI.login( data )
      .then( data => {
        console.log( data );
        // const { data: { resultCode, data: { userId, }, },  } = data;
        // console.log( resultCode, userId );
        dispatch( loginUser( data ) );
      } )
      .catch( error => {
        console.log( 'loginUserThunkCreator', error );
      } );
  };
};

export {
  setAuthUserData,
  getAuthMeThunkCreator,
  loginUserThunkCreator
};