// REACT
import { useEffect, useState, useRef } from 'react';

// STYLES
import classNames from 'classnames/bind';
import styles from './ProfileStatus.module.scss';

const ProfileStatusHooks = ( props ) => {
  const { setUserStatus, } = props;
  const classes = classNames( [
    styles.ProfileStatus,
    'profile-status',
  ] );

  const [ editMode, setEditMode, ] = useState( false );
  const [ status, setStatus, ] = useState( props.status );
  const input = useRef( null );

  // HANDLERS
  const activateEditMode = () => {
    setEditMode( true );
  };

  const deactivateEditMode = () => {
    setEditMode( false );
    setStatus( input.current.value );
    setUserStatus( input.current.value );
  };

  const handleInputChange = ( e ) => {
    const value = e.target.value;
    setStatus( value );
  };

  const handleKeyPress = ( e ) => {
    if ( e.key === 'Enter' ){
      setEditMode( false );
      setStatus( input.current.value );
      setUserStatus( input.current.value );
    }
  };

  // HOOKS
  useEffect( () => {
    if ( editMode ){
      input.current.focus();
    }
  }, [ editMode, ] );

  return (
    <div className={ classes }>
      { editMode ?
        <input
          value={ status }
          ref={ input }
          onChange={ handleInputChange }
          onBlur={ deactivateEditMode }
          onKeyPress={ handleKeyPress }
        /> :
        <span onDoubleClick={ activateEditMode }>{ status }</span>
      }
    </div>
  );
};

export default ProfileStatusHooks;