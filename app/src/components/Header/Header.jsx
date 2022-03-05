import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// COMPONENTS
import { Link } from 'react-router-dom';

// IMAGES
import logo from '../../images/logo.png';

const Header = () => {
  const classes = classNames( [
    styles.Header,
    'header',
  ] );

  return (
    <header className={ classes }>
      <Link to="/"><img src={ logo } alt="" /></Link>
      <Link to="/">Samurai Chat</Link>
    </header>
  );
};

export default Header;