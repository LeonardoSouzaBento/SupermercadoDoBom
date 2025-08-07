import { createContext, useState, useEffect } from "react";

export const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
  //dica para recrutador
  const [tipForRecruiter, setTipForRecruiter] = useState(() => {
    const stored = localStorage.getItem("tipForRecruiter");
    return stored ? JSON.parse(stored) : true;
  });
  useEffect(() => {
    const stored = localStorage.getItem("tipForRecruiter");
    if (stored !== "false" || stored !== false) {
      localStorage.setItem("tipForRecruiter", JSON.stringify(false));
    }
  }, [tipForRecruiter]);

  //estado de login
  const [noSkipLogin, setNoSkipLogin] = useState(() => {
    const stored = localStorage.getItem("skipLogin");
    return stored ? JSON.parse(stored) : true;
  });

  const [seeLogin, setSeeLogin] = useState(() => {
    const stored = localStorage.getItem("skipLogin");
    return stored ? JSON.parse(stored) : true;
  });

  // useEffect(() => {
  //   if (noSkipLogin === false) {
  //     const stored = localStorage.getItem("skipLogin");
  //     if (stored !== "false") {
  //       localStorage.setItem("skipLogin", JSON.stringify(false));
  //     }
  //   }
  // }, [noSkipLogin]);

  const [preventClick, setPreventClick] = useState(false);
  const [seeFeedback, setSeeFeedback] = useState(false);

  const [dataProductFull, setDataProductFull] = useState(null);
  const [viewProductInFull, setViewProductInFull] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(0);

  return (
    <VisibilityContext.Provider
      value={{
        tipForRecruiter,
        setTipForRecruiter,
        preventClick,
        setPreventClick,
        seeFeedback,
        setSeeFeedback,
        noSkipLogin,
        setNoSkipLogin,
        dataProductFull,
        setDataProductFull,
        viewProductInFull,
        setViewProductInFull,
        updatedProduct,
        setUpdatedProduct,
        seeLogin,
        setSeeLogin,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};
