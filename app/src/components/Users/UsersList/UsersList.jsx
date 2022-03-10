import classNames from 'classnames/bind';
import styles from './UsersList.module.scss';

import UserItem from './UserItem/UserItem';

const UsersList = ( props ) => {
  const { users, followUser, unFollowUser, } = props;

  const classes = classNames( [
    styles.UsersList,
    'UsersList',
  ] );

  console.log( users );

  return (
    <div className={ classes }>
      { users && users.map ( user => <UserItem key={ user.id } user={ user }/> )  }
    </div>
  );
};

export default UsersList;