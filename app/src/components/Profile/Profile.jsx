import StoreContext from '../../store-context';

import classNames from 'classnames/bind';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.scss';

const Profile = ( props ) => {
  const classes = classNames( [
    styles.Profile,
    'profile',
  ] );

  return (
    <div className={ classes }>
      <StoreContext.Consumer>{
        store => (
          <MyPostsContainer store={ store }/>
        )
      }
      </StoreContext.Consumer>
    </div>
  );
};

export default Profile;