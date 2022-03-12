import classNames from 'classnames/bind';
import styles from './UsersList.module.scss';

import UserItem from './UserItem/UserItem';

import axios from 'axios';
import Button from '../../Button/Button';

import React from 'react';
import Pagination from '../../Pagination/Pagination';
// import LoaderBox from '../../LoaderBox/LoaderBox';
// import LoaderDots from '../../LoaderDots/LoaderDots';
import LoaderSpinner from '../../LoaderSpinner/LoaderSpinner';

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
    this.props.toggleIsLoadingAC( !this.props.isLoading );
    this.props.setCurrentPage( page );
    axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }` )
      .then( res => {
        const { items, totalCount, } = res.data;
        console.log( items, totalCount );
        this.props.setUsers( items );
        this.props.setTotalUsersCount( totalCount );
        this.props.toggleIsLoadingAC( !this.props.isLoading );
      } );
  }

  toggleIsFollowed ( userId, isFollowed ) {
    console.log( userId, isFollowed );
    if ( isFollowed ){
      this.props.unFollowUser( userId );
    }
    else {
      this.props.followUser( userId );
    }
  }

  render () {
    const classes = classNames( [
      styles.UsersList,
      'UsersList',
    ] );

    const pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );

    return (
      <>
        <Pagination pagesCount={ pagesCount } currentPage={ this.props.currentPage } onPageChanged={ this.onPageChanged.bind( this ) }/>
        { this.props.isLoading ? <LoaderSpinner isLoading={ this.props.isLoading }/> : (
          <div className={ classes }>
            { this.props.users &&  this.props.users.map ( user => <UserItem key={ user.id } user={ user } toggleIsFollowed={ this.toggleIsFollowed.bind( this ) }/> )  }
          </div>
        ) }
        <Button onClick={ this.getUsers.bind( this ) }>Get Users</Button>
      </>
    );
  }
}

export default UsersListС;