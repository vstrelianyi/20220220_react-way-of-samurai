import classNames from 'classnames/bind';
import styles from './MyPosts.module.scss';
import PostItem from './PostItem/PostItem';

const MyPosts = () => {
  const classes = classNames( [
    styles.MyPosts,
    'example',
  ] );

  return (
    <div className={ classes }>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Add Post</button>

      <ul>
        <PostItem/>
      </ul>
    </div>
  );
};

export default MyPosts;