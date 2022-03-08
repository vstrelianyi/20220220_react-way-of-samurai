import React from 'react';
const StoreContext = React.createContext( null );

const Provider = ( props )	=> {
  const { children, store, } = props;

  return (
    <StoreContext.Provider value={ store }>
      { children }
    </StoreContext.Provider>
  );
};

export default StoreContext;

export { Provider };