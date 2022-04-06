import { useState } from 'react';

// STYLES
import classNames from 'classnames/bind';
import styles from './ProfileInfo.module.scss';

// COMPONENTS
import FormProfileData from 'components/Forms/FormProfileData/FormProfileData';

// IMAGES
import image_default from 'images/users/default.png';
import ProfileData from './ProfileData/ProfileData';
import Button from 'components/Button/Button';

const ProfileInfo = ( props ) => {
  const { profile, email, uploadPhoto, updateProfile, } = props;
  const classes = classNames( [
    styles.ProfileInfo,
    'profile-info',
  ] );

  const userImage = profile?.photos?.small ? profile?.photos?.small : image_default;

  const [ isEditMode, setIsEditMode, ] = useState( false );

  // HANDLERS
  const handleFileSelected = ( e ) => {
    const file = e.target.files[0];
    uploadPhoto( file );
  };

  const handleEditModeClick = () => {
    setIsEditMode( prevState => {
      return !prevState;
    } );
  };

  return (
    <div className={ classes }>
      <input className="mb-20" type="file" onChange={ handleFileSelected }/>
      <Button className="mb-20" onClick={ handleEditModeClick }>{ isEditMode ? 'View Mode' : 'Edit Mode' }</Button>
      { isEditMode ? (
        <FormProfileData updateProfile={ updateProfile }/>
      ) :
        <ProfileData profile= { profile } userImage={ userImage } email={ email }/>
      }
    </div>
  );
};

export default ProfileInfo;