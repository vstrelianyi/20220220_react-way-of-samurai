import classNames from 'classnames/bind';
import styles from './UsersList.module.scss';

import UserItem from './UserItem/UserItem';

const UsersList = ( props ) => {
  const { users, setUsers, followUser, unFollowUser, } = props;

  const classes = classNames( [
    styles.UsersList,
    'UsersList',
  ] );

  if ( users.length < 3 ){
    setUsers( [ { id: 1, name: 'Kitana', status: '', location: { city: 'Kyiv', country: 'Ukraine', }, isFollowed: false, image: '', description: '', }, ] );
  }

  return (
    <div className={ classes }>
      { users && users.map ( user => <UserItem key={ user.id } user={ user }/> )  }
    </div>
  );
};

export default UsersList;