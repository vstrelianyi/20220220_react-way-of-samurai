// STYLES
import classNames from 'classnames/bind';
import styles from './ProfileData.module.scss';

// COMPONENTS
import DataField from 'components/DataField/DataField';

const ProfileData = ( props ) => {
  const { profile, userImage, email, } = props;

  const classes = classNames( [
    styles.ProfileData,
    'profile-data',
  ] );
  const { userId, fullName, lookingForAJobDescription, contacts, } = profile;

  console.log( profile );

  return (
    <div className={ classes }>

      <picture>
        <source srcSet={ userImage } type="image/webp" />
        <img src={ userImage } alt="" />
      </picture>

      <DataField label="id: " value={ userId }/>
      <DataField label="name: " value={ fullName }/>
      <DataField label="email: " value={ email }/>
      <DataField label="job description: " value={ lookingForAJobDescription }/>

      { Object.keys( contacts ).map( key => <DataField key={ key } label={ `${ key } :` } value={ contacts[key] }/> ) }
    </div>
  );
};

export default ProfileData;