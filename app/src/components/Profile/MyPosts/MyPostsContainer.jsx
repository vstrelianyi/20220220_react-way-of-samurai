import {
  addPostActionCreator,
  updateNewPostTextActionCreator
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
      const action = updateNewPostTextActionCreator( value ) ;
      dispatch( action );
    },
    addPostClick: () => {
      const action = addPostActionCreator();
      dispatch( action );
    },
  };
};

const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )( MyPosts );

export default MyPostsContainer;
