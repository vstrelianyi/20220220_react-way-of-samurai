import MessageInput from './MessageInput';

// REDUX
import { connect } from 'react-redux';

import {
  updateNewMessageTextAС,
  addMessageAС
} from '../../../redux/chat-reducer';

const mapStateToProps = ( state ) => {
  return {
    newMessageText: state.chatPage.newMessageText,
  };
};
const mapDispatchToProps = ( dispatch ) => {
  return {
    inputChange: ( value ) => {
      const action = updateNewMessageTextAС( value ) ;
      dispatch( action );
    },
    sendMessageClick: ( newMessageText ) => {
      if ( !newMessageText ) return;
      const action = addMessageAС( newMessageText ) ;
      dispatch( action );
    },
  };
};

const MessageInputContainer = connect( mapStateToProps, mapDispatchToProps )( MessageInput );

export default MessageInputContainer;
