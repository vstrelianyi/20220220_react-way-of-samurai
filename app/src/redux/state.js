import render from '../render';

const state = {
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

};

const addPost = () => {
  state.profilePage.posts.push(
    {
      id: 10,
      message: state.profilePage.newPostText,
      likesCount: 12,
    }
  );
  state.profilePage.newPostText = '';
  render();
};

const updateNewPostText = ( text ) => {
  state.profilePage.newPostText = text;
  render();
};

export {
  addPost,
  updateNewPostText
};
export default state;