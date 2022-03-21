// STYLES
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

// COMPONENTS
import PostsList from './PostsList/PostsList';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import FormAddPost from 'components/Forms/FormAddPost/FormAddPost';

// import { useParams } from 'react-router-dom';

const Profile = ( props ) => {
  const { profile, status, setUserStatus, posts, addPost, } = props;

  const classes = classNames( [
    styles.Profile,
    'profile',
  ] );

  return (
    <div className={ classes }>
      <ProfileStatus status={ status } setUserStatus={ setUserStatus }/>
      <ProfileInfo profile={ profile }/>
      <FormAddPost addPost={ addPost }/>
      <PostsList posts={ posts }/>
    </div>
  );
};

export default Profile;