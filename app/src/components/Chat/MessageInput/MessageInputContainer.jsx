import MessageInput from './MessageInput';

import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator
} from '../../../redux/chat-reducer';

const MessageInputContainer = ( props ) => {
  const { store, } = props;

  const newMessageText =  store.getState().chatPage.newMessageText;

  const sendMessageClick = () => {
    if ( !newMessageText ) return;

    const action = addMessageActionCreator() ;
    store.dispatch( action );
  };
  const inputChange = ( value ) => {
    const action = updateNewMessageTextActionCreator( value ) ;
    store.dispatch( action );
  };

  return <MessageInput newMessageText={ newMessageText } sendMessageClick={ sendMessageClick } inputChange={ inputChange }/>;
};

export default MessageInputContainer;
