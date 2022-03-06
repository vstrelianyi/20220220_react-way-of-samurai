import classNames from 'classnames/bind';
import styles from './TextArea.module.scss';

import React, { forwardRef } from 'react';

const TextArea = ( props, ref ) => {
  const { className, id, onChange, value, } = props;

  const classes = classNames( [
    styles.TextArea,
    className,
    'textarea',
  ] );

  return (
    <textarea
      className={ classes }
      id={ id ? id : null }
      cols="30"
      rows="10"
      ref={ ref }
      value={ value }
      onChange={ onChange }
    ></textarea>
  );
};

export default forwardRef( TextArea );