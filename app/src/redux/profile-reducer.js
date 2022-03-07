const profileReducer = ( state, action ) => {
  const { type, payload: { text, }, } = action;

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