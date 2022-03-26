// DAL
import { usersAPI, profileAPI } from '../api/api';

const initialState = {
  posts: [
    { id: 0, message: 'I\'m from Kyiv, It my post', likesCount: 12, },
    { id: 1, message: 'Its my first post', likesCount: 10, },
  ],
  profile: null,
  status: 'empty status',
};

// REDUCERS
const profileReducer = ( state = initialState, action ) => {
  const { type, } = action;
  switch ( type ){
  case 'profile/ADD_POST':{
    const { payload: { text, }, } = action;

    return {
      ...state,
      posts: [ ...state.posts, { id: 10, message: text, likesCount: 12, }, ],
    };
  }
  case 'profile/DELETE_POST': {
    const { payload: { postId, }, } = action;

    return {
      ...state,
      posts: state.posts.filter( post => post.id !== postId ),
    };
  }
  case 'profile/SET_USER_PROFILE':{
    const { payload: { profile, }, } = action;

    return {
      ...state,
      profile,
    };
  }
  case 'profile/SET_USER_STATUS':{
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
const addPost = ( text ) => {
  return {
    type: 'profile/ADD_POST',
    payload: { text, },
  };
};
const deletePost = ( postId ) => {
  return {
    type: 'profile/DELETE_POST',
    payload: { postId, },
  };
};
const setUserProfile = ( profile ) => {
  return {
    type: 'profile/SET_USER_PROFILE',
    payload: { profile, },
  };
};
const setUserStatus = ( status ) => {
  return {
    type: 'profile/SET_USER_STATUS',
    payload: { status, },
  };
};

// THUNKS
const getUserProfileThunkCreator = ( userId ) => {
  return async ( dispatch ) => {
    dispatch( setUserProfile( null ) );
    try {
      const response = await usersAPI.getUser( userId );
      const profile = response;
      dispatch( setUserProfile( profile ) );
    }
    catch ( error ){
      console.log( error );
      dispatch( setUserProfile( undefined ) );
    }
  };
};

const getUserStatusThunkCreator = ( userId ) => {
  return async ( dispatch ) => {
    try {
      const response = await profileAPI.getStatus( userId );
      const status = response;
      dispatch( setUserStatus( status ) );
    }
    catch ( error ){
      console.log( error );
      dispatch( setUserProfile( undefined ) );
    }
  };
};

const setUserStatusThunkCreator = ( status ) => {
  return async ( dispatch ) => {
    try {
      const response = await profileAPI.updateStatus( status );
      const { resultCode, } = response;
      if ( resultCode === 0 ){
        dispatch( setUserStatus( status ) );
      }
    }
    catch ( error ){
      console.log( error );
      dispatch( setUserProfile( undefined ) );
    }
  };
};

export {
  addPost,
  deletePost,
  getUserProfileThunkCreator,
  getUserStatusThunkCreator,
  setUserStatusThunkCreator
};