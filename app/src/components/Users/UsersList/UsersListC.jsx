import classNames from 'classnames/bind';
import styles from './UsersList.module.scss';

import UserItem from './UserItem/UserItem';

import axios from 'axios';
import Button from '../../Button/Button';

import React from 'react';
import Pagination from '../../Pagination/Pagination';

class UsersListС extends React.Component {
  componentDidMount () {
    // this.getUsers();
  }

  getUsers () {
    axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }` )
      .then( res => {
        const items = res.data.items;
        this.props.setUsers( items );
      } );
  }

  onPageChanged ( page ) {
    this.props.setCurrentPage( page );
    axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }` )
      .then( res => {
        const { items, totalCount, } = res.data;
        console.log( items, totalCount );
        this.props.setUsers( items );
        this.props.setTotalUsersCount( totalCount );
      } );
  }

  render () {
    const classes = classNames( [
      styles.UsersList,
      'UsersList',
    ] );

    const pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );

    return (
      <div className={ classes }>
        <Pagination pagesCount={ pagesCount } currentPage={ this.props.currentPage } onPageChanged={ this.onPageChanged.bind( this ) }/>
        { this.props.users &&  this.props.users.map ( user => <UserItem key={ user.id } user={ user }/> )  }
        <Button onClick={ this.getUsers.bind( this ) }>Get Users</Button>
      </div>
    );
  }
}

export default UsersListС;