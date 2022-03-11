import classNames from 'classnames/bind';
import styles from './UsersList.module.scss';

import UserItem from './UserItem/UserItem';

import axios from 'axios';
import Button from '../../Button/Button';

import React from 'react';

class UsersListС extends React.Component {
  componentDidMount () {
    this.getUsers();
  }

  getUsers () {
    axios.get( 'https://social-network.samuraijs.com/api/1.0/users' )
      .then( res => {
        const items = res.data.items;
        this.props.setUsers( items );
      } );
  }

  render () {
    const classes = classNames( [
      styles.UsersList,
      'UsersList',
    ] );

    return (
      <div className={ classes }>
        { this.props.users &&  this.props.users.map ( user => <UserItem key={ user.id } user={ user }/> )  }
        <Button onClick={ this.getUsers.bind( this ) }>Get Users</Button>
      </div>
    );
  }
}

export default UsersListС;