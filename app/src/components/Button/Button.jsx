import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const Button = ( props ) => {
  const { children, onClick, isDisabled, type, } = props;

  const classes = classNames( [
    styles.Button,
    'button',
  ] );

  return (
    <button className={ classes } onClick={ onClick } disabled={ isDisabled } type={ type ? type : null }>{ children }</button>
  );
};

export default Button;