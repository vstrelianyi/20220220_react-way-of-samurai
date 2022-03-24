// https://mortalkombat.fandom.com/wiki/Shao_Kahn/Gallery

// DAL
import { usersAPI } from '../api/api';

// IMAGES
import shao from '../images/users/shao.webp';
import sonya from '../images/users/sonya.webp';

const initialState = {
  users: [
    // { id: 0, name: 'Shao Kahn', status: '', location: { city: 'Kyiv', country: 'Ukraine', }, followed: true, image: shao, description: '', },
    // { id: 1, name: 'Sonya Blade', status: '', location: { city: 'Kyiv', country: 'Ukraine', }, followed: false, image: sonya, description: '', },
  ],
  pageSize: 5,
  totalUsersCount: 10,
  currentPage: 1,
  isLoading: false,
  isButtonsDisabled: [ 0, 1, ],
  userProfile: null,
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
          return { ...user, followed: true, };
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
  case 'SET_USER_PROFILE':{
    const { payload: { profile, }, } = action;

    return {
      ...state,
      userProfile: profile,
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
  case 'TOGGLE_IS_BUTTON_DISABLED':{
    const { payload: { isLoading, userId, }, } = action;

    return {
      ...state,
      isButtonsDisabled: isLoading ?
        [ ...state.isButtonsDisabled, userId, ] :
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
const setUserProfile = ( profile ) => {
  return {
    type: 'SET_USER_PROFILE',
    payload: { profile, },
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
    type: 'TOGGLE_IS_BUTTON_DISABLED',
    payload: { isLoading, userId, },
  };
};

// THUNKS
const getUsersThunkCreator = ( page, pageSize, isLoading ) => {
  return ( dispatch ) => {
    dispatch( toggleIsLoading( isLoading ) );

    usersAPI.getUsers( page, pageSize )
      .then( data => {
        const { items, totalCount, } = data;
        dispatch( setTotalUsersCount( totalCount ) );
        dispatch( setUsers( items ) );
        dispatch( toggleIsLoading( false ) );
        dispatch( setCurrentPage( page ) );
      } );
  };
};

const getUserThunkCreator = ( userId ) => {
  return ( dispatch ) => {
    dispatch( setUserProfile( null ) );
    usersAPI.getUser( userId )
      .then( data => {
        const profile = data;
        dispatch( setUserProfile( profile ) );
      } )
      .catch( error => {
        console.log( error );
        dispatch( setUserProfile( undefined ) );
      } );
  };
};

const followUserThunkCreator = ( userId ) => {
  return ( dispatch ) => {
    dispatch( toggleIsButtonsDisabled( true, userId ) );
    usersAPI.follow( userId )
      .then( resultCode => {
        if ( resultCode === 0 ){
          dispatch( followUser( userId ) );
          dispatch( toggleIsButtonsDisabled( false, userId ) );
        }
      } );
  };
};

const unFollowUserThunkCreator = ( userId ) => {
  return ( dispatch ) => {
    dispatch( toggleIsButtonsDisabled( true, userId ) );
    usersAPI.unfollow( userId )
      .then( resultCode => {
        if ( resultCode === 0 ){
          dispatch( unFollowUser( userId ) );
          dispatch( toggleIsButtonsDisabled( false, userId ) );
        }
      } );
  };
};

export {
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
  getUsersThunkCreator,
  getUserThunkCreator,
  followUserThunkCreator,
  unFollowUserThunkCreator
};