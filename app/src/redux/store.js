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
    switch ( action.type ){
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
    default:{
      break;
    }
    }
    this._render();
  },
};

window.store = store;

export default store;
