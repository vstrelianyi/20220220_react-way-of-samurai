import classNames from 'classnames/bind';
// import { Outlet } from 'react-router-dom';
import styles from './Users.module.scss';
import UsersContainer from './UsersContainer';

const Users = ( props ) => {
  const classes = classNames( [
    styles.Users,
    'users',
  ] );

  return (
    <div className={ classes }>
      <UsersContainer/>
      { /* <Outlet/> */ }
    </div>
  );
};

export default Users;