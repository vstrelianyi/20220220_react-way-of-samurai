import classNames from 'classnames/bind';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.scss';

const Profile = () => {
  const classes = classNames( [
    styles.Profile,
    'profile',
  ] );

  return (
    <div className={ classes }>
      <MyPosts/>
    </div>
  );
};

export default Profile;