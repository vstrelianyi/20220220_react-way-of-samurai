import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  getUserProfileThunkCreator,
  updateNewPostText,
  addPost
} from '../../redux/profile-reducer';

// COMPONENTS
import LoaderSpinner from '../Loaders/LoaderSpinner/LoaderSpinner';
import Profile from './Profile';

class ProfileClass extends React.Component {

  componentDidMount () {
    this.props.getUserProfile( 6629 );
    console.log( this.props.isAuth );
  }

  render () {
    if ( !this.props?.profile ){
      return <LoaderSpinner isLoading={ true }/>;
    }
    if ( !this.props?.isAuth ){
      return <Navigate to="/login"/>;
    }

    return <Profile { ...this.props }/>;

  }

}

const mapStateToProps = ( state ) => {
  return {
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

export default connect( mapStateToProps, { getUserProfile: getUserProfileThunkCreator, updateNewPostText, addPost, } )( ProfileClass );
