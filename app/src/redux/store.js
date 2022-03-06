const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: 'I\'m from Kyiv, It my post', likesCount: 12, },
        { id: 1, message: 'Its my first post', likesCount: 10, },
      ],
      newPostText: '',
    },

    chatPage: {
      messages: [
        { id: 0, text: 'Hi', },
        { id: 1, text: 'Hi there!', },
      ],

      dialogs: [
        { id: 0, name: 'Andrew', },
        { id: 1, name: 'Alex', },
        { id: 2, name: 'Sonya', },
      ],
      newMessageText: '',
    },
  },
  _callSubscriber () {

  },
  getState () {
    return this._state;
  },
  subscribe ( observer ) {
    this._render = observer;
  },
  dispatch ( action ) {
    const { type, payload: { text, }, } = action;
    switch ( type ){
    case 'ADD_POST':{
      this._state.profilePage.posts.push(
        {
          id: 10,
          message: this._state.profilePage.newPostText,
          likesCount: 12,
        }
      );
      this._state.profilePage.newPostText = '';

      break;
    }
    case 'UPDATE_NEW_POST_TEXT':{
      this._state.profilePage.newPostText = text;
      break;
    }
    case 'ADD_MESSAGE':{
      this._state.chatPage.messages.push(
        {
          id: 3,
          text: this._state.chatPage.newMessageText,
        }
      );
      this._state.chatPage.newMessageText = '';
      break;
    }
    case 'UPDATE_NEW_MESSAGE_TEXT':{
      this._state.chatPage.newMessageText = text;
      break;
    }
    default:{
      break;
    }
    }
    this._render();
  },
};

window.store = store;

export default store;

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
const updateNewMessageTextActionCreator = ( text ) => {
  return {
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    payload: { text: text, },
  };
};

const addMessageActionCreator = () => {
  return {
    type: 'ADD_MESSAGE',
    payload: {},
  };
};

export {
  addPostActionCreator,
  updateNewPostTextActionCreator,
  addMessageActionCreator,
  updateNewMessageTextActionCreator
};