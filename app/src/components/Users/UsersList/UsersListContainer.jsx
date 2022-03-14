
// REDUX
import { connect } from 'react-redux';
import {
  followUser,
  unFollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
  toggleIsButtonsDisabled
} from '../../../redux/users-reducer';

// COMPONENTS
import React from 'react';
import Pagination from '../../Pagination/Pagination';
import LoaderSpinner from '../../Loaders/LoaderSpinner/LoaderSpinner';
import Button from '../../Button/Button';
import UsersList from './UsersList';

// DAL
import axios from 'axios';
import { usersAPI } from '../../../api/api';

class UsersListClass extends React.Component {
  componentDidMount () {
    // this.getUsers();
    console.log( this.props );
  }

  onGetUsersButtonClick ( ) {
    usersAPI.getUsers( this.props.currentPage, this.props.pageSize )
      .then( data => {
        const items = data.items;
        this.props.setUsers( items );
      } );
  }

  onPageChanged ( page ) {
    this.props.toggleIsLoading( !this.props.isLoading );
    this.props.setCurrentPage( page );

    usersAPI.getUsers( page, this.props.pageSize )
      .then( data => {
        const { items, totalCount, } = data;
        console.log( items, totalCount );
        this.props.setUsers( items );
        this.props.setTotalUsersCount( totalCount );
        this.props.toggleIsLoading( !this.props.isLoading );
      } );
  }

  toggleIsFollowed ( userId, isFollowed ) {
    this.props.toggleIsButtonsDisabled( true, userId );
    if ( isFollowed ){
      this.props.unFollowUser( userId );
      axios.delete( `https://social-network.samuraijs.com/api/1.0/follow/${ userId }`, {
        withCredentials: true,
        headers: {
          'API-KEY': 'bfafa524-74eb-4f38-9d5f-3510957232c7',
        },
      } )
        .then( res => {
          const resultCode = res.data;
          this.props.toggleIsButtonsDisabled( false, userId );
        } );
    }
    else {
      this.props.followUser( userId );
      axios.post( `https://social-network.samuraijs.com/api/1.0/follow/${ userId }`, {
        withCredentials: true,
        headers: {
          'API-KEY': 'bfafa524-74eb-4f38-9d5f-3510957232c7',
        },
      } )
        .then( res => {
          const resultCode = res.data;
          this.props.toggleIsButtonsDisabled( false, userId );
        } );
    }
  }

  render () {

    const pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );

    return (
      <>
        <Pagination pagesCount={ pagesCount } currentPage={ this.props.currentPage } onPageChanged={ this.onPageChanged.bind( this ) }/>
        { this.props.isLoading ?
          <LoaderSpinner isLoading={ this.props.isLoading }/> :
          <UsersList users={ this.props.users } isButtonsDisabled={ this.props.isButtonsDisabled }  toggleIsFollowed={ this.toggleIsFollowed.bind( this ) }/>
        }
        <Button onClick={ this.onGetUsersButtonClick.bind( this ) }>Get Users</Button>
      </>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    isButtonsDisabled: state.usersPage.isButtonsDisabled,
  };
};

const UsersListContainer = connect( mapStateToProps, {
  followUser,
  unFollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
  toggleIsButtonsDisabled,
} )( UsersListClass );

export default UsersListContainer;
