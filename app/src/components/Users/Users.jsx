import classNames from 'classnames/bind';
// import { Outlet } from 'react-router-dom';
import styles from './Users.module.scss';
import UsersListContainer from './UsersList/UsersListContainer';

const Users = ( props ) => {
  const classes = classNames( [
    styles.Users,
    'users',
  ] );

  return (
    <div className={ classes }>
      <UsersListContainer/>
      { /* <Outlet/> */ }
    </div>
  );
};

export default Users;