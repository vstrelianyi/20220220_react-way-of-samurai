import classNames from 'classnames/bind';
import styles from './MyPosts.module.scss';
import PostItem from './PostItem/PostItem';

const MyPosts = () => {
  const classes = classNames( [
    styles.MyPosts,
    'example',
  ] );

  const posts = [
    { id: 0, message: 'Hi, how are you', likesCount: 12, },
    { id: 1, message: 'Its my first post', likesCount: 12, },
  ];

  return (
    <div className={ classes }>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Add Post</button>

      <div className='posts-list'>
        { posts.map( post => <PostItem key={ post.id } message={ post.message } likesCount={ post.likesCount }/> ) }
      </div>
    </div>
  );
};

export default MyPosts;