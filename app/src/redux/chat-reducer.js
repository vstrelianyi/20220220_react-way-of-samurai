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
  case 'UPDATE_NEW_MESSAGE_TEXT':{
    const { payload: { text, }, } = action;
    const stateCopy = {
      ...state,
      newMessageText: text,
    };

    return stateCopy;
  }
  case 'SEND_MESSAGE':{
    const { payload: { text, }, } = action;
    const stateCopy = {
      ...state,
      messages: [ ...state.messages, { id: 3, text: text, }, ],
      newMessageText: '',
    };

    return stateCopy;
  }
  default:{
    return state;
  }
  }
};

export default chatReducer;

const updateNewMessageTextActionCreator = ( text ) => {
  return {
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    payload: { text: text, },
  };
};

const addMessageActionCreator = ( text ) => {
  return {
    type: 'SEND_MESSAGE',
    payload: { text: text, },
  };
};

export {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
};