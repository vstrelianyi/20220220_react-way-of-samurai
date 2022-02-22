import classNames from 'classnames/bind';
import styles from './PostItem.module.scss';

const PostItem = () => {
  const classes = classNames( [
    styles.PostItem,
    'post-item',
  ] );

  return (
    <div className={ classes }>PostItem</div>
  );
};

export default PostItem;