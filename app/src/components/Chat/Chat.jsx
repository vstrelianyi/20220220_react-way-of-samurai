import classNames from 'classnames/bind';
import styles from './Chat.module.scss';

import Messages from './Messages/Messages';
import Dialogs from './Dialogs/Dialogs';

const Chat = ( props ) => {
  const { dialogs, messages, } = props;
  const classes = classNames( [
    styles.Chat,
    'chat',
  ] );

  return (
    <div className={ classes }>
      <Dialogs dialogs={ dialogs }/>
      <Messages messages={ messages }/>
    </div>
  );
};

export default Chat;