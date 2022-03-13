import classNames from 'classnames/bind';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfoContainer';
import styles from './Profile.module.scss';

import { useParams } from 'react-router-dom';

const Profile = ( props ) => {
  const classes = classNames( [
    styles.Profile,
    'profile',
  ] );

  const params = useParams();
  console.log( params );

  return (
    <div className={ classes }>
      <ProfileInfoContainer/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;