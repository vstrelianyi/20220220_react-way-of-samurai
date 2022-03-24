// REDUX
import { connect } from 'react-redux';
import {
  setCurrentPage,
  getUsersThunkCreator,
  followUserThunkCreator,
  unFollowUserThunkCreator
} from '../../../redux/users-reducer';

// COMPONENTS
import React from 'react';
import Pagination from '../../Pagination/Pagination';
import LoaderSpinner from '../../Loaders/LoaderSpinner/LoaderSpinner';
import Button from '../../Button/Button';
import UsersList from './UsersList';

class UsersListClass extends React.Component {
  componentDidMount () {
    this.props.getUsers( this.props.currentPage, this.props.pageSize );
  }

  onPageChanged ( page ) {
    this.props.getUsers( page, this.props.pageSize );
  }

  onGetUsersButtonClick ( ) {

  }

  toggleIsFollowed ( userId, followed ) {
    if ( followed ){
      this.props.unFollowUser( userId );
    }
    else {
      this.props.followUser( userId );
    }
  }

  render () {
    const pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );

    return (
      <>
        <Pagination pagesCount={ pagesCount } currentPage={ this.props.currentPage } onPageChanged={ this.onPageChanged.bind( this ) }/>
        { this.props.isLoading ?
          <LoaderSpinner isLoading={ this.props.isLoading }/> :
          <UsersList users={ this.props.users } isButtonsDisabled={ this.props.isButtonsDisabled } toggleIsFollowed={ this.toggleIsFollowed.bind( this ) }/>
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
  setCurrentPage,
  getUsers: getUsersThunkCreator,
  followUser: followUserThunkCreator,
  unFollowUser: unFollowUserThunkCreator,
} )( UsersListClass );

export default UsersListContainer;
