import { createContext, useState } from 'react';

export const ViewContext = createContext();

export const ViewContextProvider = ({ children }) => {
    const [viewSuggestion, setviewSuggestion] = useState(false); // Sugestão de busca
    const [preventClick, setPreventClick] = useState(false); // prevenir click durante a sugestão

    const [viewOptions, setViewOptions] = useState(false);
    
  return (
    <ViewContext.Provider value={{viewOptions, setViewOptions, viewSuggestion, setviewSuggestion, preventClick, setPreventClick}}>
      {children}
    </ViewContext.Provider>
  );
};