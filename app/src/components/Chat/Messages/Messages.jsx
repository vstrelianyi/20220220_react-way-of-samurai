import classNames from 'classnames/bind';
import styles from './Messages.module.scss';

const Messages = ( props ) => {

  const { messages, } = props;

  const classes = classNames( [
    styles.Messages,
    'messages',
  ] );

  return (
    <div className={ classes }>
      { messages.map( message => <div className="message-item" key={ message.id }>{ message.text }</div> ) }
    </div>
  );
};

export default Messages;