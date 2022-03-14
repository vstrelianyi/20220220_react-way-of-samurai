import classNames from 'classnames/bind';
import DataField from '../../DataField/DataField';
import styles from './ProfileInfo.module.scss';

const ProfileInfo = ( props ) => {
  const { profile, } = props;
  const classes = classNames( [
    styles.ProfileInfo,
    'profile-info',
  ] );

  return (
    <div className={ classes }>
      <picture>
        <source srcSet={ props?.profile?.photos?.small } type="image/webp" />
        <img src={ props?.profile?.photos?.small } alt="" />
      </picture>
      <DataField label="name: " value={ profile?.fullName }/>
    </div>
  );
};

export default ProfileInfo;