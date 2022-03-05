import classNames from 'classnames/bind';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.scss';

const Profile = ( props ) => {

  const { posts, } = props;

  const classes = classNames( [
    styles.Profile,
    'profile',
  ] );

  return (
    <div className={ classes }>
      <MyPosts posts={ posts }/>
    </div>
  );
};

export default Profile;