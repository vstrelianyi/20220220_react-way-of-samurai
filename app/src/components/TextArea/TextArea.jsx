import classNames from 'classnames/bind';
import styles from './TextArea.module.scss';

import React from 'react';
import { forwardRef } from 'react';

const TextArea = ( props, ref ) => {
  const { className, id, onChange, value, } = props;

  const classes = classNames( [
    styles.TextArea,
    className,
    'textarea',
  ] );

  // HANDLERS
  const handleOnChange = ( e ) => {
    const value = e.target.value;
    onChange( value );
  };

  return (
    <textarea
      className={ classes }
      id={ id ? id : null }
      cols="30"
      rows="10"
      // ref={ ref }
      value={ value }
      onChange={ handleOnChange }
    ></textarea>
  );
};

export default forwardRef( TextArea );