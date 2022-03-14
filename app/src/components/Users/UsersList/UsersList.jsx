// STYLES
import classNames from 'classnames/bind';
import styles from './UsersList.module.scss';

// COMPONENTS
import UserItem from './UserItem/UserItem';

const classes = classNames( [
  styles.UsersList,
  'users-list',
] );

const UsersList = ( props ) => {
  const { users, toggleIsFollowed, isButtonsDisabled, } = props;

  return (
    <div className={ classes }>
      { users ?
        users.map ( user => <UserItem key={ user.id } user={ user } toggleIsFollowed={ toggleIsFollowed } isButtonsDisabled={ isButtonsDisabled }/> ) :
        <p>no users found</p>
      }
    </div>
  );
};

export default UsersList;
