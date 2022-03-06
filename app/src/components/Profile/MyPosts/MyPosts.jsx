import React from 'react';

import classNames from 'classnames/bind';
import styles from './MyPosts.module.scss';
import PostItem from './PostItem/PostItem';

import Button from '../../Button/Button';
import TextArea from '../../TextArea/TextArea';

import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../../redux/store';

const MyPosts = ( props ) => {

  const { posts, newPostText, dispatch, } = props;

  const classes = classNames( [
    styles.MyPosts,
    'example',
  ] );

  const textarea = React.createRef();

  // HANDLERS
  const handleAddPostClick = () => {
    const action = addPostActionCreator() ;
    dispatch( action );
  };
  const handleTextAreaChange = ( e ) => {
    const value = e.target.value;
    const action = updateNewPostTextActionCreator( value ) ;
    dispatch( action );
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