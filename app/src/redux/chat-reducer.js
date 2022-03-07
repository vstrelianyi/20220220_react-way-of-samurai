const chatReducer = ( state, action ) => {
  const { type, payload: { text, }, } = action;

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