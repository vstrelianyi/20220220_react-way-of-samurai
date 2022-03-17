// STYLES
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

// COMPONENTS
import PostsList from './PostsList/PostsList';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';

// import { useParams } from 'react-router-dom';

const Profile = ( props ) => {
  const { profile, posts, newPostText, updateNewPostText, addPost, } = props;

  const classes = classNames( [
    styles.Profile,
    'profile',
  ] );

  return (
    <div className={ classes }>
      <ProfileStatus/>
      <ProfileInfo profile={ profile }/>
      <PostsList posts={ posts } newPostText={ newPostText }  updateNewPostText={ updateNewPostText } addPost={ addPost }/>
    </div>
  );
};

export default Profile;