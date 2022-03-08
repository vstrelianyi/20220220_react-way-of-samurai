import React from 'react';
import StoreContext from '../../store-context';

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
      <StoreContext.Consumer>{
        store => (
          <>
            <DialogsContainer store={ store }/>
            <MessagesContainer store={ store }/>
            <MessageInputContainer store={ store }/>
          </>
        )	}
      </StoreContext.Consumer>
    </div>
  );
};

export default Chat;