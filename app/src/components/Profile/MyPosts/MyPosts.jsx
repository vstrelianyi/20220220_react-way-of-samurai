import React from 'react';

import classNames from 'classnames/bind';
import styles from './MyPosts.module.scss';
import PostItem from './PostItem/PostItem';

import Button from '../../Button/Button';
import TextArea from '../../TextArea/TextArea';

const MyPosts = ( props ) => {

  const { posts, addPost, newPostText, updateNewPostText, } = props;

  const classes = classNames( [
    styles.MyPosts,
    'example',
  ] );

  const textarea = React.createRef();

  const handleAddPostClick = () => {
    const value = textarea.current.value;
    console.log( value );
    // addPost( { id: 10, message: value, likesCount: 0, } );
    // console.log(  );
  };

  const handleTextAreaChange = ( e ) => {
    const value = e.target.value;
    updateNewPostText( value );
  };

  return (
    <div className={ classes }>
      <TextArea className="test" id="test" ref={ textarea } onChange={ handleTextAreaChange }value={ newPostText }/>
      <Button onClick={ handleAddPostClick }>Add Post</Button>

      <div className='posts-list'>
        { posts.map( post => <PostItem key={ post.id } message={ post.message } likesCount={ post.likesCount }/> ) }
      </div>
    </div>
  );
};

export default MyPosts;