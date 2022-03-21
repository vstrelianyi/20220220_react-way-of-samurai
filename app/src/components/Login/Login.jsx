// STYLES
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

// COMPONENTS
import FormLogin from 'components/Forms/FormLogin/FormLogin';

const Login = ( props ) => {
  const { isAuth, loginUser, } = props;

  const classes = classNames( [
    styles.Login,
    'login',
  ] );

  return (
    <div className={ classes }>
      <FormLogin loginUser={ loginUser }/>
      { isAuth ? 'authorized' : 'not-authtorized' }
    </div>
  );
};

export default Login;