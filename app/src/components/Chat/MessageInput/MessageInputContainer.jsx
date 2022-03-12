import MessageInput from './MessageInput';

// REDUX
import { connect } from 'react-redux';

import {
  updateNewMessageText,
  addMessage
} from '../../../redux/chat-reducer';

const mapStateToProps = ( state ) => {
  return {
    newMessageText: state.chatPage.newMessageText,
  };
};
const mapDispatchToProps = ( dispatch ) => {
  return {
    inputChange: ( value ) => {
      const action = updateNewMessageText( value ) ;
      dispatch( action );
    },
    sendMessageClick: ( newMessageText ) => {
      if ( !newMessageText ) return;
      const action = addMessage( newMessageText ) ;
      dispatch( action );
    },
  };
};

const MessageInputContainer = connect( mapStateToProps, mapDispatchToProps )( MessageInput );

export default MessageInputContainer;
