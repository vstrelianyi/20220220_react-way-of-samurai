import classNames from 'classnames/bind';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.scss';

const Profile = ( props ) => {

  const { posts, addPost, updateNewPostText, } = props;

  const classes = classNames( [
    styles.Profile,
    'profile',
  ] );

  return (
    <div className={ classes }>
      <MyPosts posts={ posts } addPost={ addPost } updateNewPostText={ updateNewPostText }/>
    </div>
  );
};

export default Profile;