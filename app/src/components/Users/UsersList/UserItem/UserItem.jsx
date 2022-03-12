import classNames from 'classnames/bind';
import Button from '../../../Button/Button';
import DataField from '../../../DataField/DataField';
import styles from './UserItem.module.scss';

const UserItem = ( props ) => {
  const { user, toggleIsFollowed, } = props;

  const classes = classNames( [
    styles.UserItem,
    'user-item',
    'bordered',
  ] );

  const handleFollowClick = () => {
    toggleIsFollowed( user.id, user?.isFollowed );
  };

  return (
    <div className={ classes }>

      <div className="col">
        <picture>
          <source srcSet={ user?.image } type="image/webp" />
          <img src={ user?.image } alt="" />
        </picture>
        {  <Button onClick={ handleFollowClick }>{ user?.isFollowed ? 'Unfollow' : 'Follow' }</Button> }
      </div>

      <div className="col">
        <div className="left">
          <DataField label="name:" value={ user?.name }/>
          <DataField label="description:" value={ user?.description }/>
        </div>
        <div className="right">
          <DataField label="country:" value={ user?.location?.country }/>
          <DataField label="city:" value={ user?.location?.city }/>
        </div>
      </div>

    </div>
  );
};

export default UserItem;