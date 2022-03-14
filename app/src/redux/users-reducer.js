// https://mortalkombat.fandom.com/wiki/Shao_Kahn/Gallery

// IMAGES
import shao from '../images/users/shao.webp';
import sonya from '../images/users/sonya.webp';

const initialState = {
  users: [
    { id: 0, name: 'Shao Kahn', status: '', location: { city: 'Kyiv', country: 'Ukraine', }, isFollowed: true, image: shao, description: '', },
    { id: 1, name: 'Sonya Blade', status: '', location: { city: 'Kyiv', country: 'Ukraine', }, isFollowed: false, image: sonya, description: '', },
  ],
  pageSize: 5,
  totalUsersCount: 10,
  currentPage: 1,
  isLoading: false,
  isButtonsDisabled: [ 0, 1, ],
};

const usersReducer = ( state = initialState, action ) => {
  const { type, } = action;
  switch ( type ){
  case 'FOLLOW_USER':{
    const { payload: { userId, }, } = action;

    return {
      ...state,
      users: state.users.map( user => {
        if ( user.id === userId ){
          return { ...user, isFollowed: true, };
        }

        return user;
      } ),
    };
  }
  case 'UNFOLLOW_USER':{
    const { payload: { userId, }, } = action;

    return {
      ...state,
      users: state.users.map( user => {
        if ( user.id === userId ){
          return { ...user, isFollowed: false, };
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
  case 'TOGGLE_IS_LOADING':{
    const { payload: { isLoading, }, } = action;

    return {
      ...state,
      isLoading: isLoading,
    };
  }
  case 'TOGGLE_IS_BUTTONS_DISABLED':{
    const { payload: { isLoading, userId, }, } = action;

    return {
      ...state,
      isButtonsDisabled: isLoading ?
        [ state.isButtonsDisabled.filter( id => id != userId ), ] :
        state.isButtonsDisabled.filter( id => id != userId ),
    };
  }

  default:{
    return state;
  }
  }
};

export default usersReducer;

// ACTION CREATORS
const followUser = ( userId ) => {
  return {
    type: 'FOLLOW_USER',
    payload: { userId, },
  };
};
const unFollowUser = ( userId ) => {
  return {
    type: 'UNFOLLOW_USER',
    payload: { userId, },
  };
};
const setUsers = ( users ) => {
  return {
    type: 'SET_USERS',
    payload: { users, },
  };
};
const setCurrentPage = ( currentPage ) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: { currentPage, },
  };
};
const setTotalUsersCount = ( totalUsers  ) => {
  return {
    type: 'SET_TOTAL_USERS_COUNT',
    payload: { totalUsers, },
  };
};
const toggleIsLoading = ( isLoading  ) => {
  return {
    type: 'TOGGLE_IS_LOADING',
    payload: { isLoading, },
  };
};
const toggleIsButtonsDisabled = ( isLoading, userId ) => {
  return {
    type: 'TOGGLE_IS_BUTTONS_DISABLED',
    payload: { isLoading, userId, },
  };
};

export {
  followUser,
  unFollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
  toggleIsButtonsDisabled
};