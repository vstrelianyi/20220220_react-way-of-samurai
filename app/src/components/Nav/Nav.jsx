import classNames from 'classnames/bind';
import styles from './Nav.module.scss';

const Nav = () => {

  const classes = classNames( [
    styles.Nav,
    'nav',
  ] );

  return (
    <nav className={ classes }>
      <ul>
        <li><a href="/home">Profile</a></li>
        <li><a href="/home">Messages</a></li>
        <li><a href="/home">News</a></li>
        <li><a href="/home">Music</a></li>
        <li><a href="/home">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Nav;