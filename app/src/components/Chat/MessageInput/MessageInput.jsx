import classNames from 'classnames/bind';
import styles from './MessageInput.module.scss';

import Input from '../../Input/Input';
import Button from '../../Button/Button';

const MessageInput = ( props ) => {
  const { newMessageText, sendMessageClick,	inputChange, } = props;

  const classes = classNames( [
    styles.MessageInput,
    'message-input',
  ] );

  // HANDLERS
  const handleInputChange = ( value ) => {
    inputChange( value ) ;
  };
  const handleKeyPress = ( e ) => {
    if ( e.key === 'Enter' ){
      sendMessageClick( newMessageText ) ;
    }
  };
  const handleSendMessageClick = () => {
    sendMessageClick( newMessageText ) ;
  };

  return (
    <div className={ classes }>
      <Input className="" id="" onChange={ handleInputChange } onKeyUp={ handleKeyPress } value={ newMessageText }/>
      <Button onClick={ handleSendMessageClick }>Send Message</Button>
    </div>
  );
};

export default MessageInput;
