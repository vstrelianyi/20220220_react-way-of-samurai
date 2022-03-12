import classNames from 'classnames/bind';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileContainer from './ProfileContainer';
import styles from './Profile.module.scss';

const Profile = ( props ) => {
  const classes = classNames( [
    styles.Profile,
    'profile',
  ] );

  return (
    <div className={ classes }>
      <ProfileContainer/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;