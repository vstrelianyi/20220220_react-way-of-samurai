// STYLES
import classNames from 'classnames';
import styles from './SingleUser.module.scss';

// IMAGES
import image_default from '../../../images/users/default.png';

// COMPONENTS
import DataField from '../../DataField/DataField';

const SingleUser = ( props ) => {
  const { profile, } = props;

  const classes = classNames( [
    styles.SingleUser,
    'single-user',
  ] );

  const userImage = profile?.photos?.small ? profile?.photos?.small : image_default;

  return (
    <div className={ classes }>
      <picture>
        <source srcSet={ userImage } type="image/webp" />
        <img src={ userImage } alt="" />
      </picture>
      <DataField  label="name: " value={ profile?.fullName }/>
    </div>
  );
};

export default SingleUser;