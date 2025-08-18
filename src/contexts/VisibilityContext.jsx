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
    const stored = localStorage.getItem("noSkipLogin");
    return stored ? JSON.parse(stored) : true;
  });
  const [seeLogin, setSeeLogin] = useState(() => {
    const stored = localStorage.getItem("seeLogin");
    return stored ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    localStorage.setItem("seeLogin", JSON.stringify(seeLogin));
  }, [seeLogin]);

  useEffect(() => {
    localStorage.setItem("noSkipLogin", JSON.stringify(noSkipLogin));
  }, [noSkipLogin]);

  const [preventClick, setPreventClick] = useState(false);
  const [seeFeedback, setSeeFeedback] = useState(false);

  const [dataProductFull, setDataProductFull] = useState(null);
  const [viewProductInFull, setViewProductInFull] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(0);

  const [primaryUserInfo, setPrimaryUserInfo] = useState(() => {
    const storedInfo = localStorage.getItem("primaryUserInfo");
    return storedInfo
      ? JSON.parse(storedInfo)
      : {
          name: "",
          abbrev: "",
          email: "",
        };
  });

  const [secundaryUserInfo, setSecundaryUserInfo] = useState(() => {
    const storedInfo = localStorage.getItem("secundaryUserInfo");
    return storedInfo
      ? JSON.parse(storedInfo)
      : {
          contactCompleted: false,
          addressCompleted: false,
        };
  });

  useEffect(() => {
    localStorage.setItem("primaryUserInfo", JSON.stringify(primaryUserInfo));
  }, [primaryUserInfo]);

  useEffect(() => {
    localStorage.setItem(
      "secundaryUserInfo",
      JSON.stringify(secundaryUserInfo)
    );
  }, [secundaryUserInfo]);

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
        secundaryUserInfo,
        setSecundaryUserInfo,
        primaryUserInfo,
        setPrimaryUserInfo,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};
