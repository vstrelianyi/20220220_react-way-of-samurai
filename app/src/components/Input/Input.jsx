import React, { forwardRef } from 'react';

import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const Input = ( props, ref ) => {
  const { className, id, onChange, value, } = props;

  const classes = classNames( [
    styles.Input,
    className,
    'input',
  ] );

  return (
    <input
      className={ classes }
      id={ id ? id : null }
      ref={ ref }
      value={ value }
      onChange={ onChange }
    />
  );
};

export default forwardRef( Input );