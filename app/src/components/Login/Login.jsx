// STYLES

import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const Login = ( props ) => {
  const { children, } = props;

  const classes = classNames( [
    styles.Login,
    'login',
  ] );

  return (
    <div className={ classes }>Login</div>
  );
};

export default Login;