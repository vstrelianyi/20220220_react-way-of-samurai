import React from 'react';

import classNames from 'classnames/bind';
import styles from './MyPosts.module.scss';
import PostItem from './PostItem/PostItem';

import Button from '../../Button/Button';
import TextArea from '../../TextArea/TextArea';

const MyPosts = ( props ) => {

  const { posts, newPostText, dispatch, } = props;

  const classes = classNames( [
    styles.MyPosts,
    'example',
  ] );

  const textarea = React.createRef();

  // HANDLERS
  const handleAddPostClick = () => {
    dispatch( { type: 'ADD_POST', payload: {}, } );
  };
  const handleTextAreaChange = ( e ) => {
    const value = e.target.value;
    dispatch( { type: 'UPDATE_NEW_POST_TEXT', payload: { text: value, }, } );
  };

  return (
    <div className={ classes }>
      <TextArea className="" id="" ref={ textarea } onChange={ handleTextAreaChange } value={ newPostText }/>
      <Button onClick={ handleAddPostClick }>Add Post</Button>

      <div className='posts-list'>
        { posts.map( post => <PostItem key={ post.id } message={ post.message } likesCount={ post.likesCount }/> ) }
      </div>
    </div>
  );
};

export default MyPosts;