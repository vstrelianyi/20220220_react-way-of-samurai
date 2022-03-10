import MessageInput from './MessageInput';

// REDUX
import { connect } from 'react-redux';

import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator
} from '../../../redux/chat-reducer';

const mapStateToProps = ( state ) => {
  return {
    newMessageText: state.chatPage.newMessageText,
  };
};
const mapDispatchToProps = ( dispatch ) => {
  return {
    inputChange: ( value ) => {
      const action = updateNewMessageTextActionCreator( value ) ;
      dispatch( action );
    },
    sendMessageClick: ( newMessageText ) => {
      if ( !newMessageText ) return;
      const action = addMessageActionCreator( newMessageText ) ;
      dispatch( action );
    },
  };
};

const MessageInputContainer = connect( mapStateToProps, mapDispatchToProps )( MessageInput );

export default MessageInputContainer;
