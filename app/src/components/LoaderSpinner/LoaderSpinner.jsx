import styles from './LoaderSpinner.module.scss';
import classNames from 'classnames';

const LoaderSpinner = ( props ) => {
  const { className, isLoading, } = props;

  const classes = classNames( [
    styles.LoaderSpinner,
    'lds-ring',
    className?.includes( 'small' ) ? styles.SpinnerCircle : null,
  ] );

  return (
    isLoading && <div className={ classes }>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoaderSpinner;