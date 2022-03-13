import classNames from 'classnames/bind';
import styles from './Example.module.scss';
import Login from './Login';

import React from 'react';

class LoginCointainerClass extends React.Component {
  render () {
    const classes = classNames( [
      styles.Example,
      'login-container',
    ] );

    return <Login/>;
  }

}

export default LoginCointainerClass;