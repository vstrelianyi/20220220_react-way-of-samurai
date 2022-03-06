import classNames from 'classnames/bind';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.scss';

const Profile = ( props ) => {

  const { store, dispatch, } = props;
  const posts = store.getState().profilePage.posts;
  const newPostText = store.getState().profilePage.newPostText;

  const classes = classNames( [
    styles.Profile,
    'profile',
  ] );

  return (
    <div className={ classes }>
      <MyPosts posts={ posts } newPostText={ newPostText } dispatch={ dispatch }/>
    </div>
  );
};

export default Profile;