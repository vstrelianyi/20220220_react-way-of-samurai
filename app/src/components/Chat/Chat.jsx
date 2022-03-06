import React from 'react';

// STYLES
import classNames from 'classnames/bind';
import styles from './Chat.module.scss';

// COMPONENTS
import Messages from './Messages/Messages';
import Dialogs from './Dialogs/Dialogs';
import Input from '../Input/Input';

import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator
} from '../../redux/store';
import Button from '../Button/Button';

const Chat = ( props ) => {
  const { store, dispatch, } = props;
  const dialogs = store.getState().chatPage.dialogs;
  const messages = store.getState().chatPage.messages;
  const newMessageText = store.getState().chatPage.newMessageText;

  const classes = classNames( [
    styles.Chat,
    'chat',
  ] );

  const input = React.createRef();

  // HANDLERS
  const handleSendMessageClick = () => {
    const action = addMessageActionCreator() ;
    dispatch( action );
  };
  const handleInputChange = ( e ) => {
    const value = e.target.value;
    const action = updateNewMessageTextActionCreator( value ) ;
    dispatch( action );
  };

  return (
    <div className={ classes }>
      <Dialogs dialogs={ dialogs }/>
      <Messages messages={ messages }/>
      <div className="message-input">
        <Input className="" id="" ref={ input } onChange={ handleInputChange } value={ newMessageText }/>
        <Button onClick={ handleSendMessageClick }>Send Message</Button>
      </div>
    </div>
  );
};

export default Chat;