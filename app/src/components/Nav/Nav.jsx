import classNames from 'classnames/bind';
import styles from './Nav.module.scss';

// COMPONENTS
import { NavLink } from 'react-router-dom';

const Nav = () => {

  const classes = classNames( [
    styles.Nav,
    'nav',
  ] );

  return (
    <nav className={ classes }>
      <ul>
        <li><NavLink  to="/profile" className={ ( { isActive, } ) => ( isActive ? 'active' : null ) }>Profile</NavLink ></li>
        <li><NavLink  to="/chat" className={ ( { isActive, } ) => ( isActive ? 'active' : null ) }>Dialogs</NavLink ></li>
        <li><NavLink  to="/news" className={ ( { isActive, } ) => ( isActive ? 'active' : null ) }>News</NavLink ></li>
        <li><NavLink  nk to="/music" className={ ( { isActive, } ) => ( isActive ? 'active' : null ) }>Music</NavLink ></li>
        <li><NavLink  to="/settings" className={ ( { isActive, } ) => ( isActive ? 'active' : null ) }>Settings</NavLink ></li>
      </ul>
    </nav>
  );
};

export default Nav;