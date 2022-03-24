// selector - функция которая принимает стейт и возвращает из него только нужные свойства

const getUsers = ( state ) => {
  return state.usersPage.users;
};
const getPageSize = ( state ) => {
  return state.usersPage.pageSize;
};
const getTotalUsersCount = ( state ) => {
  return state.usersPage.totalUsersCount;
};
const getCurrentPage = ( state ) => {
  return state.usersPage.currentPage;
};
const getIsLoading = ( state ) => {
  return state.usersPage.isLoading;
};
const getIsButtonsDisabled = ( state ) => {
  return state.usersPage.isButtonsDisabled;
};

export {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsLoading,
  getIsButtonsDisabled
};