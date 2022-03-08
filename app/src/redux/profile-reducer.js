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
  case 'ADD_POST':{
    state.posts.push(
      {
        id: 10,
        message: state.newPostText,
        likesCount: 12,
      }
    );
    state.newPostText = '';

    break;
  }
  case 'UPDATE_NEW_POST_TEXT':{
    const { payload: { text, }, } = action;
    state.newPostText = text;
    break;
  }
  }

  return state;
};

export default profileReducer;

const addPostActionCreator = () => {
  return {
    type: 'ADD_POST',
    payload: {},
  };
};

const updateNewPostTextActionCreator = ( text ) => {
  return {
    type: 'UPDATE_NEW_POST_TEXT',
    payload: { text: text, },
  };
};

export {
  addPostActionCreator,
  updateNewPostTextActionCreator
};