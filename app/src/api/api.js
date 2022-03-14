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
      .then( res => res.data );
  },
};

export {
  usersAPI
};