// STYLES
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

// COMPONENTS
import PostsListContainer from './PostsList/PostsListContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

// import { useParams } from 'react-router-dom';

const Profile = ( props ) => {
  const classes = classNames( [
    styles.Profile,
    'profile',
  ] );
  // const params = useParams();

  return (
    <div className={ classes }>
      <ProfileInfoContainer/>
      <PostsListContainer/>
    </div>
  );
};

export default Profile;