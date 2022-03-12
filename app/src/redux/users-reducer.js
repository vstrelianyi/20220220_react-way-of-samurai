// https://mortalkombat.fandom.com/wiki/Shao_Kahn/Gallery

// IMAGES
import shao from '../images/users/shao.webp';
import sonya from '../images/users/sonya.webp';

const initialState = {
  users: [
    { id: 0, name: 'Shao Kahn', status: '', location: { city: 'Kyiv', country: 'Ukraine', }, isFollowed: true, image: shao, description: '', },
    { id: 1, name: 'Sonya Blade', status: '', location: { city: 'Kyiv', country: 'Ukraine', }, isFollowed: false, image: sonya, description: '', },
  ],
  pageSize: 100,
  totalUsersCount: 10,
  currentPage: 1,
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
      users: [
        // ...state.users,
        ...users,
      ],
    };
  }
  case 'SET_CURRENT_PAGE':{
    const { payload: { currentPage, }, } = action;

    return {
      ...state,
      currentPage: currentPage,
    };
  }
  case 'SET_TOTAL_USERS_COUNT':{
    const { payload: { totalUsers, }, } = action;

    return {
      ...state,
      totalUsersCount: totalUsers,
    };
  }

  default:{
    return state;
  }
  }
};

export default usersReducer;

// ACTION CREATORS
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
const setCurrentPageAC = ( currentPage ) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: { currentPage, },
  };
};
const setTotalUsersCountAC = ( totalUsers  ) => {
  return {
    type: 'SET_TOTAL_USERS_COUNT',
    payload: { totalUsers, },
  };
};

export {
  followAC,
  unFollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC
};