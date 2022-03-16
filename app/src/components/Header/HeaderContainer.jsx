import React from 'react';

// COMPONENTS
import Header from './Header';

// DAL
import {
  getAuthMeThunkCreator
} from '../../redux/auth-reducer';

// REDUX
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount () {
    this.props.getAuthMe();
  }

  render () {
    return <Header { ...this.props }/>;
  }
}

const mapStateToProps = ( state ) => {
  return {
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect( mapStateToProps, { getAuthMe: getAuthMeThunkCreator, } )( HeaderContainer );