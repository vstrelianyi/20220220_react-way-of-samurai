// STYLES
import classNames from 'classnames/bind';
import styles from './ProfileInfo.module.scss';

// COMPONENTS
import DataField from '../../DataField/DataField';

// IMAGES
import image_default from 'images/users/default.png';

const ProfileInfo = ( props ) => {
  const { profile, email, uploadPhoto, } = props;
  const classes = classNames( [
    styles.ProfileInfo,
    'profile-info',
  ] );

  const userImage = profile?.photos?.small ? profile?.photos?.small : image_default;

  const handleFileSelected = ( e ) => {
    const file = e.target.files[0];
    uploadPhoto( file );
  };

  return (
    <div className={ classes }>
      <picture>
        <source srcSet={ userImage } type="image/webp" />
        <img src={ userImage } alt="" />
      </picture>
      <input className="mb-20" type="file" onChange={ handleFileSelected }/>
      <DataField label="id: " value={ profile?.userId }/>
      <DataField label="name: " value={ profile?.fullName }/>
      <DataField label="email: " value={ email }/>
    </div>
  );
};

export default ProfileInfo;