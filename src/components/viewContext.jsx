import { createContext, useState, useEffect } from "react";

export const ViewContext = createContext();

export const ViewContextProvider = ({ children }) => {
  const [tipForRecruiter, setTipForRecruiter] = useState(() => {
    const stored = localStorage.getItem("tipForRecruiter");
    return stored ? JSON.parse(stored) : false; // valor padrão: false
  });
  useEffect(() => {
    localStorage.setItem("tipForRecruiter", JSON.stringify(tipForRecruiter));
  }, [tipForRecruiter]);

  const [noSkipLogin, setNoSkipLogin] = useState(() => {
    const stored = localStorage.getItem("skipLogin");
    return stored ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    if (noSkipLogin === false) {
      const stored = localStorage.getItem("skipLogin");
      if (stored !== "false") {
        localStorage.setItem("skipLogin", JSON.stringify(false));
      }
    }
  }, [noSkipLogin]);

  const [preventClick, setPreventClick] = useState(false);
  const [viewFeedback, setViewFeedback] = useState(false);

  return (
    <ViewContext.Provider
      value={{
        tipForRecruiter,
        setTipForRecruiter,
        preventClick,
        setPreventClick,
        viewFeedback,
        setViewFeedback,
        noSkipLogin, 
        setNoSkipLogin
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};
