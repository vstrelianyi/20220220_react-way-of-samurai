// DAL
import { usersAPI, profileAPI } from '../api/api';

const initialState = {
  posts: [
    { id: 0, message: 'I\'m from Kyiv, It my post', likesCount: 12, },
    { id: 1, message: 'Its my first post', likesCount: 10, },
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = ( state = initialState, action ) => {
  const { type, } = action;
  switch ( type ){
  case 'UPDATE_NEW_POST_TEXT':{
    const { payload: { text, }, } = action;

    return {
      ...state,
      newPostText: text,
    };
  }
  case 'ADD_POST':{
    const { payload: { text, }, } = action;

    return {
      ...state,
      posts: [ ...state.posts, { id: 10, message: text, likesCount: 12, }, ],
      newPostText: '',
    };
  }
  case 'SET_USER_PROFILE':{
    const { payload: { profile, }, } = action;

    return {
      ...state,
      profile,
    };
  }
  case 'SET_USER_STATUS':{
    const { payload: { status, }, } = action;

    return {
      ...state,
      status: status,
    };
  }
  default:{
    return state;
  }
  }
};

export default profileReducer;

// ACTION CREATORS
const updateNewPostText = ( text ) => {
  return {
    type: 'UPDATE_NEW_POST_TEXT',
    payload: { text, },
  };
};
const addPost = ( text ) => {
  return {
    type: 'ADD_POST',
    payload: { text, },
  };
};
const setUserProfile = ( profile ) => {
  return {
    type: 'SET_USER_PROFILE',
    payload: { profile, },
  };
};
const setUserStatus = ( status ) => {
  return {
    type: 'SET_USER_STATUS',
    payload: { status, },
  };
};

// THUNKS
const getUserProfileThunkCreator = ( userId ) => {
  return ( dispatch ) => {
    dispatch( setUserProfile( null ) );
    usersAPI.getUser( userId )
      .then( data => {
        const profile = data;
        dispatch( setUserProfile( profile ) );
      } )
      .catch( error => {
        console.log( error );
        dispatch( setUserProfile( undefined ) );
      } );
  };
};

const getUserStatusThunkCreator = ( userId ) => {
  return ( dispatch ) => {
    profileAPI.getStatus( userId )
      .then( data => {
        const status = data;
        dispatch( setUserStatus( status ) );
      } )
      .catch( error => {
        console.log( error );
      } );
  };
};

const setUserStatusThunkCreator = ( status ) => {
  return ( dispatch ) => {
    profileAPI.updateStatus( status )
      .then( data => {
        const { resultCode, } = data;
        if ( resultCode === 0 ){
          dispatch( setUserStatus( status ) );
        }
      } )
      .catch( error => {
        console.log( error );
      } );
  };
};

export {
  updateNewPostText,
  addPost,
  getUserProfileThunkCreator,
  getUserStatusThunkCreator,
  setUserStatusThunkCreator
};