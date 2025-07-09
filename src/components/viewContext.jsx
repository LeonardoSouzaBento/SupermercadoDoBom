import { createContext, useState, useEffect } from "react";

export const ViewContext = createContext();

export const ViewContextProvider = ({ children }) => {
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

  useEffect(() => {
    if (noSkipLogin === false) {
      const stored = localStorage.getItem("skipLogin");
      if (stored !== "false") {
        localStorage.setItem("skipLogin", JSON.stringify(false));
      }
    }
  }, [noSkipLogin]);

  const [preventClick, setPreventClick] = useState(false);
  const [seeFeedback, setSeeFeedback] = useState(false);

  const [dataProductFull, setDataProductFull] = useState(null);
  const [viewProductInFull, setViewProductInFull] = useState(false);
  const [applyBlur, setApplyBlur] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(0);

  return (
    <ViewContext.Provider
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
        applyBlur,
        setApplyBlur,
        updatedProduct,
        setUpdatedProduct,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};
