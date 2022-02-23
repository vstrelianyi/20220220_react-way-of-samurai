import classNames from 'classnames/bind';
import styles from './Messages.module.scss';

const Messages = () => {
  const classes = classNames( [
    styles.Messages,
    'messages',
  ] );

  return (
    <div className={ classes }>
      <div className="message-item">Hi</div>
      <div className="message-item">Hi there!</div>
    </div>
  );
};

export default Messages;