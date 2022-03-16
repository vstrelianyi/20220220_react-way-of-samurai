// COMPONENTS
import Dialogs from './Dialogs';
import withAuthRedirect from '../../../hoc/withAuthRedirect';

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

export default connect( mapStateToProps, mapDispatchToProps )( withAuthRedirect( Dialogs ) );