import classNames from 'classnames/bind';
import styles from './Example.module.scss';

const Login = ( props ) => {
  const { children, } = props;

  const classes = classNames( [
    styles.Example,
    'example',
  ] );

  return (
    <div className={ classes }>Login</div>
  );
};

export default Login;