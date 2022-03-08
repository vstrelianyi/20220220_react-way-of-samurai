import Dialogs from './Dialogs';

const DialogsContainer = ( props ) => {
  const { store, } = props;
  const dialogs = store.getState().chatPage.dialogs;
  const messages =  store.getState().chatPage.messages;

  return <Dialogs dialogs={ dialogs } messages={ messages }/>;
};

export default DialogsContainer;