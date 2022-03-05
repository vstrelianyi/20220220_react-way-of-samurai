import classNames from 'classnames/bind';
import styles from './MyPosts.module.scss';
import PostItem from './PostItem/PostItem';

import Button from '../../Button/Button';

const MyPosts = ( props ) => {

  const { posts, } = props;

  const classes = classNames( [
    styles.MyPosts,
    'example',
  ] );

  return (
    <div className={ classes }>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <Button>Add Post</Button>

      <div className='posts-list'>
        { posts.map( post => <PostItem key={ post.id } message={ post.message } likesCount={ post.likesCount }/> ) }
      </div>
    </div>
  );
};

export default MyPosts;