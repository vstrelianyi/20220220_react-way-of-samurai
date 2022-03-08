const initialState = {
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
};

const chatReducer = ( state = initialState, action ) => {
  const { type, } = action;

  switch ( type ){
  case 'ADD_MESSAGE':{
    state.messages.push(
      {
        id: 3,
        text: state.newMessageText,
      }
    );
    state.newMessageText = '';
    break;
  }
  case 'UPDATE_NEW_MESSAGE_TEXT':{
    const { payload: { text, }, } = action;
    state.newMessageText = text;
    break;
  }
  default:{
    break;
  }
  }

  return state;
};

export default chatReducer;

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
  addMessageActionCreator,
  updateNewMessageTextActionCreator
};