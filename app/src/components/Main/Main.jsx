import styles from './Main.module.scss';
import classNames from 'classnames/bind';
import MyPosts from '../Profile/MyPosts/MyPosts';

const Main = () => {

  const classes = classNames( [
    styles.Main,
    'main',
  ] );

  return (
    <main className={ classes }>
      <MyPosts/>
    </main>
  );
};

export default Main;