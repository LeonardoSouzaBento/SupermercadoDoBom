import { createContext, useState, useEffect } from 'react';

export const ViewContext = createContext();

export const ViewContextProvider = ({ children }) => {
  
    const [tipForRecruiter, setTipForRecruiter] = useState(() => {
      const stored = localStorage.getItem('tipForRecruiter');
      return stored ? JSON.parse(stored) : false; // valor padrão: false
    });

    useEffect(() => {
      localStorage.setItem('tipForRecruiter', JSON.stringify(tipForRecruiter));
    }, [tipForRecruiter]);

    const [preventClick, setPreventClick] = useState(false); // prevenir click durante a dica
    const [viewFeedback, setViewFeedback] = useState(false);
    
  return (
    <ViewContext.Provider value={{tipForRecruiter, setTipForRecruiter, preventClick, setPreventClick, viewFeedback, setViewFeedback}}>
      {children}
    </ViewContext.Provider>
  );
};