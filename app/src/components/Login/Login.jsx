// STYLES

import classNames from 'classnames/bind';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Login.module.scss';

const Login = ( props ) => {
  const { children, } = props;

  const classes = classNames( [
    styles.Login,
    'login',
  ] );

  return (
    <div className={ classes }>
      <Input id="name" label="name:"/>
      <Input id="password" label="password:"/>
      <Button>Login</Button>
    </div>
  );
};

export default Login;