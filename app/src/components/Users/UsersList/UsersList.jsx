import classNames from 'classnames/bind';
import styles from './UsersList.module.scss';

import UserItem from './UserItem/UserItem';

import axios from 'axios';
import Button from '../../Button/Button';

const UsersList = ( props ) => {
  const { users, pageSize, totalUsersCount, setUsers, followUser, unFollowUser, } = props;

  const classes = classNames( [
    styles.UsersList,
    'UsersList',
  ] );

  const getUsers = () => {
    axios.get( 'https://social-network.samuraijs.com/api/1.0/users' )
      .then( res => {
        const items = res.data.items;
        setUsers( items );
      } );
  };

  // if ( users.length < 3 ){
  //   setUsers( [ { id: 1, name: 'Kitana', status: '', location: { city: 'Kyiv', country: 'Ukraine', }, isFollowed: false, image: '', description: '', }, ] );
  // }

  return (
    <div className={ classes }>
      { users && users.map ( user => <UserItem key={ user.id } user={ user }/> )  }
      <Button onClick={ getUsers }>Get Users</Button>
    </div>
  );
};

export default UsersList;