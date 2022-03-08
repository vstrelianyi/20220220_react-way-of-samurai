import React from 'react';

import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const Input = ( props ) => {
  const { className, id, onChange, value, } = props;

  const classes = classNames( [
    styles.Input,
    className,
    'input',
  ] );

  const handleInputChange = ( e ) => {
    const value = e.target.value;
    onChange( value );
  };

  return (
    <input
      className={ classes }
      id={ id ? id : null }
      value={ value }
      onChange={ handleInputChange }
    />
  );
};

export default Input;