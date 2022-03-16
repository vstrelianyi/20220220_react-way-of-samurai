// DAL
import { usersAPI } from '../api/api';

const initialState = {
  posts: [
    { id: 0, message: 'I\'m from Kyiv, It my post', likesCount: 12, },
    { id: 1, message: 'Its my first post', likesCount: 10, },
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = ( state = initialState, action ) => {
  const { type, } = action;
  switch ( type ){
  case 'UPDATE_NEW_POST_TEXT':{
    const { payload: { text, }, } = action;
    const stateCopy = {
      ...state,
      newPostText: text,
    };

    return stateCopy;
  }
  case 'ADD_POST':{
    const { payload: { text, }, } = action;
    const stateCopy = {
      ...state,
      posts: [ ...state.posts, { id: 10, message: text, likesCount: 12, }, ],
      newPostText: '',
    };

    return stateCopy;
  }
  case 'SET_USER_PROFILE':{
    const { payload: { profile, }, } = action;
    const stateCopy = {
      ...state,
      profile,
    };

    return stateCopy;
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

// THUNKS
const getUserProfileThunkCreator = ( userId ) => {
  return ( dispatch ) => {
    dispatch( setUserProfile( null ) );
    usersAPI.getUser( userId )
      .then( data => {
        const profile = data;
        console.log( profile );
        dispatch( setUserProfile( profile ) );
      } )
      .catch( error => {
        console.log( error );
        dispatch( setUserProfile( undefined ) );
      } );
  };
};

export {
  updateNewPostText,
  addPost,
  getUserProfileThunkCreator
};