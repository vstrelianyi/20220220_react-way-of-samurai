import React from 'react';

// STYLES
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

import { useRef  } from 'react';

const Input = ( props ) => {
  const { className, id, onChange, onKeyUp, onBlur, value, name, label, } = props;

  const classes = classNames( [
    styles.Input,
    className,
    'input',
  ] );

  const handleInputChange = ( e ) => {
    const value = e.target.value;
    onChange( value );
  };

  const handleKeyPress = ( e ) => {
    onKeyUp( e );
  };

  const handleOnBlur = ( e ) => {
    console.log( 'handleOnBlur' );
    onBlur( e );
  };

  return (
    <label className={ classes } htmlFor={ id }>
      { label && <span>{ label }</span> }
      <input
        id={ id ? id : null }
        value={ value }
        name={ name ? name : null }
        onChange={ handleInputChange }
        onKeyUp= { handleKeyPress }
        onBlur={ handleOnBlur }
      />
    </label>
  );
};

export default Input;