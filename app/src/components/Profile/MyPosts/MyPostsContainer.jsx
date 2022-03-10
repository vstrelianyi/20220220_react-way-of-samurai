import {
  addPostAС,
  updateNewPostTextAC
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

// REDUX
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    postTextChange: ( value ) => {
      const action = updateNewPostTextAC( value ) ;
      dispatch( action );
    },
    addPostClick: ( newPostText ) => {
      if ( !newPostText ) return;
      const action = addPostAС( newPostText );
      dispatch( action );
    },
  };
};

const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )( MyPosts );

export default MyPostsContainer;
