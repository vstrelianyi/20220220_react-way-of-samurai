import classNames from 'classnames/bind';
import Button from '../../../Button/Button';
import DataField from '../../../DataField/DataField';
import styles from './UserItem.module.scss';

const UserItem = ( props ) => {
  const { user, } = props;

  const classes = classNames( [
    styles.UserItem,
    'user-item',
    'bordered',
  ] );

  return (
    <div className={ classes }>

      <div className="col">
        <picture>
          <source srcSet={ user?.image } type="image/webp" />
          <img src={ user?.image } alt="" />
        </picture>
        { user?.isFollowed ? <Button>Unfollow</Button> : <Button>Follow</Button> }
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