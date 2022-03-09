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
    const stateCopy = { ...state, };
    stateCopy.messages = [ ...state.messages, ];
    if ( !stateCopy.newMessageText ) return stateCopy;
    stateCopy.messages.push(
      {
        id: 3,
        text: stateCopy.newMessageText,
      }
    );
    stateCopy.newMessageText = '';

    return stateCopy;
  }
  case 'UPDATE_NEW_MESSAGE_TEXT':{
    const stateCopy = { ...state, };
    const { payload: { text, }, } = action;
    stateCopy.newMessageText = text;

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