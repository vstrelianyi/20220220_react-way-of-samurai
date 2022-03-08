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
  const handleSendMessageClick = () => {
    sendMessageClick() ;
  };
  const handleInputChange = ( value ) => {
    inputChange( value ) ;
  };

  return (
    <div className={ classes }>
      <Input className="" id="" onChange={ handleInputChange } value={ newMessageText }/>
      <Button onClick={ handleSendMessageClick }>Send Message</Button>
    </div>
  );
};

export default MessageInput;
