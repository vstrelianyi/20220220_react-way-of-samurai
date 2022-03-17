import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getUserProfileThunkCreator,
  getUserStatusThunkCreator,
  setUserStatusThunkCreator,
  updateNewPostText,
  addPost
} from '../../redux/profile-reducer';

// COMPONENTS
import LoaderSpinner from '../Loaders/LoaderSpinner/LoaderSpinner';
import Profile from './Profile';

// HOC
import withAuthRedirect from '../../hoc/withAuthRedirect';

class ProfileClass extends React.Component {

  componentDidMount () {
    this.props.getUserProfile( 6629 );
    this.props.getUserStatus( 6629 );
  }

  render () {
    if ( !this.props?.profile ){
      return <LoaderSpinner isLoading={ true }/>;
    }

    return <Profile { ...this.props }/>;

  }
}

const mapStateToProps = ( state ) => {
  return {
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    status: state.profilePage.status,
  };
};

export default compose(
  connect( mapStateToProps, { getUserProfile: getUserProfileThunkCreator, setUserStatus: setUserStatusThunkCreator, getUserStatus: getUserStatusThunkCreator, updateNewPostText, addPost, } ),
  withAuthRedirect
)( ProfileClass );
