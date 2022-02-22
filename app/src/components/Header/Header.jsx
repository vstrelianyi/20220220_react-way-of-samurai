import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const Header = () => {
  const classes = classNames( [
    styles.Header,
    'header',
  ] );

  return (
    <header className={ classes }>
      <img src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
    </header>
  );
};

export default Header;