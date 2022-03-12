import classNames from 'classnames/bind';
import styles from './MyPosts.module.scss';
import PostItem from './PostItem/PostItem';

import Button from '../../Button/Button';
import TextArea from '../../TextArea/TextArea';

const MyPosts = ( props ) => {

  const { posts, newPostText, postTextChange,	addPostClick, } = props;

  const classes = classNames( [
    styles.MyPosts,
    'my-posts',
  ] );

  // HANDLERS
  const handlePostTextChange = ( value ) => {
    postTextChange( value );
  };
  const handleKeyPress = ( e ) => {
    if ( e.key === 'Enter' ){
      addPostClick( newPostText ) ;
    }
  };
  const handleAddPostClick = () => {
    addPostClick( newPostText );
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

export default MyPosts;