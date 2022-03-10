const initialState = {
  posts: [
    { id: 0, message: 'I\'m from Kyiv, It my post', likesCount: 12, },
    { id: 1, message: 'Its my first post', likesCount: 10, },
  ],
  newPostText: '',
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
  default:{
    return state;
  }
  }
};

export default profileReducer;

const updateNewPostTextActionCreator = ( text ) => {
  return {
    type: 'UPDATE_NEW_POST_TEXT',
    payload: { text: text, },
  };
};
const addPostActionCreator = ( text ) => {
  console.log( text );

  return {
    type: 'ADD_POST',
    payload: { text: text, },
  };
};

export {
  addPostActionCreator,
  updateNewPostTextActionCreator
};