import { createContext, useState } from 'react';

export const ViewContext = createContext();

export const ViewContextProvider = ({ children }) => {
    const [viewSuggestion, setviewSuggestion] = useState(false); // Sugestão de busca
    const [preventClick, setPreventClick] = useState(false); // prevenir click durante a sugestão

    
  return (
    <ViewContext.Provider value={{viewSuggestion, setviewSuggestion, preventClick, setPreventClick}}>
      {children}
    </ViewContext.Provider>
  );
};