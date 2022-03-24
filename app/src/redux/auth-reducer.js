// DAL
import { authAPI, securityAPI } from '../api/api';
import { toast } from 'react-toastify';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null,
};

const authReducer = ( state = initialState, action ) => {
  const { type, } = action;
  switch ( type ){
  case 'SET_AUTH_USER_DATA':{
    const { payload: { userId, email, login, isAuth, }, } = action;

    return {
      ...state,
      userId, email, login, isAuth,
    };
  }
  case 'LOGIN_USER':{
    const { payload: { userId, }, } = action;

    return {
      ...state,
      userId: userId,
      isAuth: true,
    };
  }
  case 'LOGOUT_USER':{
    return {
      ...state,
      userId: null,
      email: null,
      login: null,
      isAuth: false,
    };
  }
  case 'SET_CAPTCHA_URL':{
    const { payload: { captchaURL, }, } = action;

    return {
      ...state,
      captchaURL: captchaURL,
    };
  }

  default:{
    return state;
  }
  }
};

export default authReducer;

// ACTION CREATORS
const setAuthUserData = ( userId, email, login, isAuth ) => {
  return {
    type: 'SET_AUTH_USER_DATA',
    payload: { userId, email, login, isAuth, },
  };
};

const loginUser = ( userId ) => {
  return {
    type: 'LOGIN_USER',
    payload: { userId, },
  };
};
const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
    payload: {},
  };
};
const setCaptchaUrl = ( captchaURL ) => {
  return {
    type: 'SET_CAPTCHA_URL',
    payload: { captchaURL, },
  };
};

// THUNKS ( for async api calls )
const getAuthMeThunkCreator = () => {
  return ( dispatch ) => {
    return authAPI.me()
      .then( data => {
        const { data: { id, email, login, }, resultCode, messages, } = data;
        if ( id ){
          dispatch( setAuthUserData( id, email, login, true ) );
        }
      } )
      .catch( error => {
        console.log( 'getAuthMeThunkCreator', error );
      } );
  };
};

const loginUserThunkCreator = ( data ) => {
  // console.log( 'loginUserThunkCreator', data );

  return ( dispatch ) => {
    authAPI.login( data )
      .then( data => {
        const { data: { resultCode, data: { userId, }, fieldsErrors, },  } = data;
        console.log(  );
        if ( resultCode === 0 ){
          dispatch( loginUser( userId ) );

          authAPI.me().then( data => {
            const { id, email, login, } = data;
            dispatch( setAuthUserData( id, email, login, true ) );
          } );
          toast( 'Logged in' );
        }
        else {
          // toast.error( 'Wrong email or password' );
          toast.error( 	fieldsErrors[0].error );

          return resultCode;
        }
      } )
      .catch( error => {
        console.log( 'loginUserThunkCreator', error );
      } );
  };
};

const logoutUserThunkCreator = () => {
  return ( dispatch ) => {
    authAPI.logout()
      .then( data => {
        const { data: { resultCode, },  } = data;
        if ( resultCode === 0 ){
          dispatch( logoutUser() );
          toast( 'Logged out' );
        }
      } )
      .catch( error => {
        console.log( 'logoutUserThunkCreator', error );
      } );
  };
};

const getCaptchaUrlThunkCreator = ( data ) => {
  return ( dispatch ) => {
    securityAPI.getCaptchaURL()
      .then( data => {
        const { data: { url, },  } = data;
        dispatch( setCaptchaUrl( url ) );
      } )
      .catch( error => {
        console.log( 'getCaptchaThunkCreator', error );
      } );
  };
};

export {
  setAuthUserData,
  getAuthMeThunkCreator,
  loginUserThunkCreator,
  logoutUserThunkCreator,
  getCaptchaUrlThunkCreator
};