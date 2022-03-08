import classNames from 'classnames/bind';
import styles from './Messages.module.scss';

import Messages from '../Messages/Messages';

const MessagesContainer = ( props ) => {

  const { store, } = props;

  const messages = store.getState().chatPage.messages;

  return <Messages messages={ messages }/>;
};

export default MessagesContainer;