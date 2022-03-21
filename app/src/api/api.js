import axios from 'axios';

const instance = axios.create(
  {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      'API-KEY': 'bfafa524-74eb-4f38-9d5f-3510957232c7',
    },
  }
);

const usersAPI = {
  getUsers ( currentPage, pageSize ) {
    return instance.get( `users?page=${ currentPage }&count=${ pageSize }` )
      .then( res => {
        return res.data;
      } )
      .catch( error => {
        console.log( error );
      } );
  },

  getUser ( userId ) {
    return instance.get( `profile/${ userId }` )
      .then( res => {
        return res.data;
      } )
      .catch( error => {
        console.log( error );
      } );
  },

  follow ( userId ) {
    return instance.post( `follow/${ userId }` )
      .then( res => {
        const { resultCode, } = res.data;

        return resultCode;
      } )
      .catch( error => {
        console.log( 'API.follow', error );
      } );
  },

  unfollow ( userId ) {
    return instance.delete( `follow/${ userId }` )
      .then( res => {
        const { resultCode, } = res.data;

        return resultCode;
      } )
      .catch( error => {
        console.log( 'API.unfollow', error );
      } );
  },
};

const authAPI = {
  me () {
    return instance.get( 'auth/me' )
      .then( res => {
        return res.data.data;
      } )
      .catch( error => {
        console.log( error );
      } );
  },
  login ( data ) {
    return instance.post( 'auth/login', data )
      .then( res => {
        return res.data;
      } )
      .catch( error => {
        console.log( error );
      } );
  },
};

const profileAPI = {
  getProfile ( userId ) {
    return instance.get( `profile/${ userId }` )
      .then( res => {
        return res.data;
      } )
      .catch( error => {
        console.log( error );
      } );
  },
  getStatus ( userId ) {
    return instance.get( `profile/status/${ userId }` )
      .then( res => {
        return res.data;
      } )
      .catch( error => {
        console.log( error );
      } );
  },
  updateStatus ( status ) {
    return instance.put( 'profile/status', { status: status, } )
      .then( res => {
        return res.data;
      } )
      .catch( error => {
        console.log( error );
      } );
  },
};

export {
  usersAPI,
  authAPI,
  profileAPI
};