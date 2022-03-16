import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// COMPONENTS
import { Link, NavLink } from 'react-router-dom';

// IMAGES
import logo from '../../images/logo.png';

const Header = ( props ) => {
  const { userId,	email, login,	isAuth, } = props;
  console.log( props );
  const classes = classNames( [
    styles.Header,
    'header',
  ] );

  return (
    <header className={ classes }>
      <Link to="/" className="brand"><img src={ logo } alt="" />Samurai Chat</Link>

      <div className="login-block">
        { !isAuth ? <NavLink to={ '/login' }>Login</NavLink> : <span>{ email }</span> }
      </div>
    </header>
  );
};

export default Header;