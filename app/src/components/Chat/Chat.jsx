import classNames from 'classnames/bind';
import styles from './Chat.module.scss';

import Messages from './Messages/Messages';
import Dialogs from './Dialogs/Dialogs';

const Chat = () => {
  const classes = classNames( [
    styles.Chat,
    'chat',
  ] );

  return (
    <div className={ classes }>
      <Dialogs/>
      <Messages/>
    </div>
  );
};

export default Chat;