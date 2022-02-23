import classNames from 'classnames/bind';
import styles from './Dialogs.module.scss';

const Dialogs = () => {
  const classes = classNames( [
    styles.Dialogs,
    'dialogs',
  ] );

  return (
    <div className={ classes }>
      <div className="dialog">
        <div className="dialog-item">Andrew</div>
        <div className="dialog-item">Alex</div>
        <div className="dialog-item">Sonya</div>
      </div>
    </div>
  );
};

export default Dialogs;