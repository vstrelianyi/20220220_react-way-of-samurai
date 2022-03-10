import classNames from 'classnames/bind';
import Button from '../../../Button/Button';
import styles from './UserItem.module.scss';

const UserItem = ( props ) => {
  const { user, } = props;

  const classes = classNames( [
    styles.UserItem,
    'user-item',
  ] );

  return (
    <div className={ classes }>

      <div className="col">
        <picture>
          <source srcSet={ user.image } type="image/webp" />
          <img src={ user.image } alt="" />
        </picture>
        <Button>Follow</Button>
      </div>

      <div className="col">
        <div className="left">
          <span className="name">{ user.name }</span>
          <span className="country">{ user.description }</span>
        </div>
        <div className="right">
          <span className="country">{ user.location.country }</span>
          <span className="city">{ user.location.city }</span>
        </div>
      </div>

    </div>
  );
};

export default UserItem;