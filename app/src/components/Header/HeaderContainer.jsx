import React from 'react';
import Header from './Header';

import axios from 'axios';

import { setAuthUserData } from '../../redux/auth-reducer';

// REDUX
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount () {
    axios.get( 'https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true,
    } )
      .then( res => {
        const { resultCode, data: { id, email, login, }, } = res.data;
        if ( resultCode === 0 ){
          this.props.setAuthUserData( id, email, login );
        }
      } );
  }

  render () {
    return <Header { ...this.props }/>;
  }
}

const mapStateToProps = ( state ) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect( mapStateToProps, { setAuthUserData, } )( HeaderContainer );