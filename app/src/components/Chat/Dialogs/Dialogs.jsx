import classNames from 'classnames/bind';
import styles from './Dialogs.module.scss';

const Dialogs = () => {
  const classes = classNames( [
    styles.Dialogs,
    'dialogs',
  ] );

  const dialogs = [
    { id: 0, name: 'Andrew', },
    { id: 1, name: 'Alex', },
    { id: 2, name: 'Sonya', },
  ];

  return (
    <div className={ classes }>
      <div className="dialog">
        { dialogs.map( dialog => <div className="dialog-item" key={ dialog.id }>{ dialog.name }</div> ) }
      </div>
    </div>
  );
};

export default Dialogs;