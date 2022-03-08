import Messages from '../Messages/Messages';

// REDUX
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => {
  return {
    messages: state.chatPage.messages,
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {

  };
};

const MessagesContainer = connect( mapStateToProps, mapDispatchToProps )( Messages );

export default MessagesContainer;