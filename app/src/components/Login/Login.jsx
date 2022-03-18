// STYLES

import classNames from 'classnames/bind';
import FormLogin from '../Forms/FormLogin';

import styles from './Login.module.scss';

const Login = ( props ) => {
  const { children, } = props;

  const classes = classNames( [
    styles.Login,
    'login',
  ] );

  return (
    <div className={ classes }>
      <FormLogin/>
    </div>
  );
};

export default Login;