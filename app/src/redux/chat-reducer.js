const initialState = {
  messages: [
    { id: 0, text: 'Hi', },
    { id: 1, text: 'Hi there!', },
  ],
  dialogs: [
    { id: 0, name: 'Shao Kahn', },
    { id: 1, name: 'Kung Lao', },
    { id: 2, name: 'Sonya Blade', },
  ],
};

// REDUCERS
const chatReducer = ( state = initialState, action ) => {
  const { type, } = action;

  switch ( type ){
  case 'SEND_MESSAGE':{
    const { payload: { text, }, } = action;
    const stateCopy = {
      ...state,
      messages: [ ...state.messages, { id: 3, text: text, }, ],
    };

    return stateCopy;
  }
  default:{
    return state;
  }
  }
};

export default chatReducer;

// ACTION CREATORS
const addMessage = ( text ) => {
  return {
    type: 'SEND_MESSAGE',
    payload: { text: text, },
  };
};

export {
  addMessage
};