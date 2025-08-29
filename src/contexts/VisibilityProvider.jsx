import { useState, useEffect } from "react";
import { VisibilityContext } from "./VisibilityContext";

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

  const [preventClick, setPreventClick] = useState(false);
  const [seeFeedback, setSeeFeedback] = useState(false);

  const [dataProductFull, setDataProductFull] = useState(null);
  const [viewProductInFull, setViewProductInFull] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(0);

  //estados para login
  const [seeLogin, setSeeLogin] = useState(() => {
    const stored = localStorage.getItem("seeLogin");
    return stored ? JSON.parse(stored) : true;
  });
  useEffect(() => {
    localStorage.setItem("seeLogin", JSON.stringify(seeLogin));
  }, [seeLogin]);

  const [idToken, setIdToken] = useState(() => {
    const stored = localStorage.getItem("token");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(idToken));
  }, [idToken]);

  const [userContact, setUserContact] = useState(() => {
    const storedInfo = localStorage.getItem("userContact");
    return storedInfo
      ? JSON.parse(storedInfo)
      : {
          name: "",
          email: "",
          photoUrl: "",
          phone: ""
        };
  });

  useEffect(() => {
    localStorage.setItem("userContact", JSON.stringify(userContact));
  }, [userContact]);

  const [isDataComplete, setIsDataComplete] = useState(() => {
    const storedInfo = localStorage.getItem("isDataComplete");
    return storedInfo
      ? JSON.parse(storedInfo)
      : {
          contact: false,
          address: false,
        };
  });

  useEffect(() => {
    localStorage.setItem(
      "isDataComplete",
      JSON.stringify(isDataComplete)
    );
  }, [isDataComplete]);

  return (
    <VisibilityContext.Provider
      value={{
        tipForRecruiter,
        setTipForRecruiter,
        preventClick,
        setPreventClick,
        seeFeedback,
        setSeeFeedback,
        dataProductFull,
        setDataProductFull,
        viewProductInFull,
        setViewProductInFull,
        updatedProduct,
        setUpdatedProduct,
        seeLogin,
        setSeeLogin,
        isDataComplete,
        setIsDataComplete,
        userContact, 
        setUserContact,
        idToken,
        setIdToken,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};
