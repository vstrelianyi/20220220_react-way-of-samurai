import Dialogs from './Dialogs';

// REDUX
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => {
  return {
    dialogs: state.chatPage.dialogs,
    isAuth: state.auth.isAuth,
  };
};
const mapDispatchToProps = () => {
  return {
    updateNewMessageBody: () => {

    },
  };
};

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogs );

export default DialogsContainer;