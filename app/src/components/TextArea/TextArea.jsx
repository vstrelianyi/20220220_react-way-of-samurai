import classNames from 'classnames/bind';
import styles from './TextArea.module.scss';

import React, { forwardRef } from 'react';

const TextArea = ( props, ref ) => {
  const { className, id, onChange, newPostText, } = props;

  const classes = classNames( [
    styles.TextArea,
    className,
    'textarea',
  ] );

  return (
    <textarea className={ classes } id={ id } cols="30" rows="10" ref={ ref } value={ newPostText } onChange={ onChange }></textarea>
  );
};

export default forwardRef( TextArea );