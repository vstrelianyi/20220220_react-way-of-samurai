// https://mortalkombat.fandom.com/wiki/Shao_Kahn/Gallery

// IMAGES
import shao from '../images/users/shao.webp';
import sonya from '../images/users/sonya.webp';

const initialState = {
  users: [
    { id: 0, name: 'Shao Kahn', status: '', location: { city: 'Kyiv', country: 'Ukraine', }, followed: true, image: shao, description: '', },
    { id: 1, name: 'Sonya Blade', status: '', location: { city: 'Kyiv', country: 'Ukraine', }, followed: false, image: sonya, description: '', },
  ],
};

const usersReducer = ( state = initialState, action ) => {
  const { type, } = action;
  switch ( type ){
  case 'FOLLOW':{
    const { payload: { userId, }, } = action;

    return {
      ...state,
      users: state.users.map( user => {
        if ( user.id === userId ){
          return { ...user, followed: true, };
        }

        return user;
      } ),
    };
  }
  case 'UNFOLLOW':{
    const { payload: { userId, }, } = action;

    return {
      ...state,
      users: state.users.map( user => {
        if ( user.id === userId ){
          return { ...user, followed: false, };
        }

        return user;
      } ),
    };
  }
  case 'SET_USERS':{
    const { payload: { users, }, } = action;

    return {
      ...state,
      users: [ ...state.users, ...users, ],
    };
  }
  default:{
    return state;
  }
  }
};

export default usersReducer;

const followAC = ( userId ) => {
  return {
    type: 'FOLLOW',
    payload: { userId, },
  };
};
const unFollowAC = ( userId ) => {
  return {
    type: 'UNFOLLOW',
    payload: { userId, },
  };
};
const setUsersAC = ( users ) => {
  return {
    type: 'SET_USERS',
    payload: { users, },
  };
};

export {
  followAC,
  unFollowAC,
  setUsersAC
};