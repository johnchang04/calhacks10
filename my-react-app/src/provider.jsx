import React, { useState } from 'react';
import AppContext from './FormContext.jsx'; 

const AppProvider = ({ children }) => {
    const [state, setState] = useState({
      data: '',
      updateData: (newData) => {
        setState({ ...state, data: newData });
      },
    });
  
    return (
      <AppContext.Provider value={state}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export default AppProvider;