import classNames from 'classnames/bind';
import styles from './Dialogs.module.scss';

// COMPONENTS
import { Navigate } from 'react-router-dom';

const Dialogs = ( props ) => {
  const classes = classNames( [
    styles.Dialogs,
    'dialogs',
  ] );

  const { dialogs, isAuth, } = props;

  if ( !isAuth ){
    return <Navigate to="/login"/>;
  }

  return (
    <div className={ classes }>
      <div className="dialog">
        { dialogs.map( dialog => <div className="dialog-item" key={ dialog.id }>{ dialog.name }</div> ) }
      </div>
    </div>
  );
};

export default Dialogs;