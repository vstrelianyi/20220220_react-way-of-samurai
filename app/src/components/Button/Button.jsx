import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const Button = ( props ) => {
  const { children, } = props;

  const classes = classNames( [
    styles.Button,
    'button',
  ] );

  return (
    <button className={ classes }>{ children }</button>
  );
};

export default Button;