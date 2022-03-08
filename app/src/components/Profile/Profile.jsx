import classNames from 'classnames/bind';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.scss';

const Profile = ( props ) => {

  const { store, state, dispatch, } = props;

  const classes = classNames( [
    styles.Profile,
    'profile',
  ] );

  return (
    <div className={ classes }>
      <MyPostsContainer store={ store }/>
    </div>
  );
};

export default Profile;