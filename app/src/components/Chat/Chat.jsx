import React from 'react';

// STYLES
import classNames from 'classnames/bind';
import styles from './Chat.module.scss';

// COMPONENTS
import MessagesContainer from './Messages/MessagesContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import MessageInputContainer from './MessageInput/MessageInputContainer';

const Chat = ( props ) => {
  const classes = classNames( [
    styles.Chat,
    'chat',
  ] );

  return (
    <div className={ classes }>
      <DialogsContainer/>
      <MessagesContainer/>
      <MessageInputContainer/>
    </div>
  );
};

export default Chat;