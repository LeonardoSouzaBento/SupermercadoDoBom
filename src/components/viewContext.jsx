import { createContext, useState } from 'react';

export const ViewContext = createContext();

export const ViewContextProvider = ({ children }) => {
  
    const [tipForRecruiter, setTipForRecruiter] = useState(false);
    const [preventClick, setPreventClick] = useState(false); // prevenir click durante a dica

    
  return (
    <ViewContext.Provider value={{tipForRecruiter, setTipForRecruiter, preventClick, setPreventClick}}>
      {children}
    </ViewContext.Provider>
  );
};