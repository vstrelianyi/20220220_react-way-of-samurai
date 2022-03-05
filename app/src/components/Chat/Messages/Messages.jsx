import classNames from 'classnames/bind';
import styles from './Messages.module.scss';

const Messages = () => {
  const classes = classNames( [
    styles.Messages,
    'messages',
  ] );

  const messages = [
    { id: 0, text: 'Hi', },
    { id: 1, text: 'Hi there!', },
  ];

  return (
    <div className={ classes }>
      { messages.map( message => <div className="message-item" key={ message.id }>{ message.text }</div> ) }
    </div>
  );
};

export default Messages;