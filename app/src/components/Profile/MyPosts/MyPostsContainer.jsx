import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ( props ) => {

  const { store, } = props;

  const posts = store.getState().profilePage.posts;
  const newPostText = store.getState().profilePage.newPostText;

  const addPostClick = () => {
    const action = addPostActionCreator() ;
    store.dispatch( action );
  };
  const postTextChange = ( value ) => {
    const action = updateNewPostTextActionCreator( value ) ;
    store.dispatch( action );
  };

  return <MyPosts postTextChange={ postTextChange } addPostClick={ addPostClick } posts={ posts } newPostText={ newPostText }/>;
};

export default MyPostsContainer;