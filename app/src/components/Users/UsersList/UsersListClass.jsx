import classNames from 'classnames/bind';
import styles from './UsersListClass.module.scss';

import UserItem from './UserItem/UserItem';

import axios from 'axios';
import Button from '../../Button/Button';

import React from 'react';
import Pagination from '../../Pagination/Pagination';
// import LoaderBox from '../../LoaderBox/LoaderBox';
// import LoaderDots from '../../LoaderDots/LoaderDots';
import LoaderSpinner from '../../Loaders/LoaderSpinner/LoaderSpinner';

class UsersListClass extends React.Component {
  componentDidMount () {
    // this.getUsers();
  }

  getUsers () {
    axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`, {
      withCredentials: true,
    } )
      .then( res => {
        const items = res.data.items;
        this.props.setUsers( items );
      } );
  }

  onPageChanged ( page ) {
    this.props.toggleIsLoadingAC( !this.props.isLoading );
    this.props.setCurrentPage( page );
    axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`, {
      withCredentials: true,
    } )
      .then( res => {
        const { items, totalCount, } = res.data;
        console.log( items, totalCount );
        this.props.setUsers( items );
        this.props.setTotalUsersCount( totalCount );
        this.props.toggleIsLoadingAC( !this.props.isLoading );
      } );
  }

  toggleIsFollowed ( userId, isFollowed ) {
    if ( isFollowed ){
      // this.props.unFollowUser( userId );
      axios.delete( `https://social-network.samuraijs.com/api/1.0/follow/${ userId }`, {
        withCredentials: true,
        headers: {
          'API-KEY': 'bfafa524-74eb-4f38-9d5f-3510957232c7',
        },
      } )
        .then( res => {
          const resultCode = res.data;
        } );
    }
    else {
      // this.props.followUser( userId );
      axios.post( `https://social-network.samuraijs.com/api/1.0/follow/${ userId }`, {
        withCredentials: true,
        headers: {
          'API-KEY': 'bfafa524-74eb-4f38-9d5f-3510957232c7',
        },
      } )
        .then( res => {
          const resultCode = res.data;
        } );
    }
  }

  render () {
    const classes = classNames( [
      styles.UsersListClass,
      'users-list',
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

export default UsersListClass;