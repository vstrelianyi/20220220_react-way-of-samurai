import React from 'react';

// REDUX
import { connect } from 'react-redux';

// DAL
import {
  loginUserThunkCreator
} from 'redux/auth-reducer';

// COMPONENTS
import Login from './Login';

class LoginContainer extends React.Component {
  constructor ( props ) {
    super( props );
  }

  render () {
    return <Login isAuth={ this.props.isAuth } loginUser={ this.props.loginUser }/>;
  }

}

const mapStateToProps = ( state ) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect( mapStateToProps, { loginUser: loginUserThunkCreator, } )( LoginContainer );