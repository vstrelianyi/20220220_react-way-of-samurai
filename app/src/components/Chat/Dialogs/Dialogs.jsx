import classNames from 'classnames/bind';
import styles from './Dialogs.module.scss';

// COMPONENTS

const Dialogs = ( props ) => {
  const classes = classNames( [
    styles.Dialogs,
    'dialogs',
  ] );

  const { dialogs, } = props;

  return (
    <div className={ classes }>
      <div className="dialog">
        { dialogs.map( dialog => <div className="dialog-item" key={ dialog.id }>{ dialog.name }</div> ) }
      </div>
    </div>
  );
};

export default Dialogs;