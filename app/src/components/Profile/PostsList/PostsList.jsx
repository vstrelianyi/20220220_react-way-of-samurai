// STYLES
import classNames from 'classnames/bind';
import styles from './PostsList.module.scss';

// COMPONENTS
import PostItem from './PostItem/PostItem';
import Button from '../../Button/Button';
import TextArea from '../../TextArea/TextArea';

const PostsList = ( props ) => {
  const { posts, newPostText, updateNewPostText,	addPost, } = props;

  const classes = classNames( [
    styles.PostsList,
    'my-posts',
  ] );

  // HANDLERS
  const handlePostTextChange = ( value ) => {
    updateNewPostText( value );
  };
  const handleKeyPress = ( e ) => {
    if ( e.key === 'Enter' ){
      addPost( newPostText ) ;
    }
  };
  const handleAddPostClick = () => {
    addPost( newPostText );
  };

  return (
    <div className={ classes }>
      <TextArea className="" id="" value={ newPostText } onChange={ handlePostTextChange } onKeyUp={ handleKeyPress }/>
      <Button onClick={ handleAddPostClick }>Add Post</Button>

      <div className='posts-list'>
        { posts.map( post => <PostItem key={ post.id } message={ post.message } likesCount={ post.likesCount }/> ) }
      </div>
    </div>
  );
};

export default PostsList;