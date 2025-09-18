import { useState, useEffect, useContext } from "react";
import { VisibilityContext } from "./VisibilityContext";
import { CartContext } from "./CartContext";
import { voidUserContact, voidIsDataComplete } from "./voidConsts";

export const VisibilityProvider = ({ children }) => {
  const { setCartProducts, setOrderInfo, setUserAddress } =
    useContext(CartContext);
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

  const [onMyAccount, setOnMyAccount] = useState(() => {
    const stored = localStorage.getItem("onMyAccount");
    return stored ? JSON.parse(stored) : false;
  });

  const [userContact, setUserContact] = useState(() => {
    const storedInfo = localStorage.getItem("userContact");
    return storedInfo ? JSON.parse(storedInfo) : voidUserContact;
  });

  useEffect(() => {
    localStorage.setItem("userContact", JSON.stringify(userContact));
  }, [userContact]);

  const [isDataComplete, setIsDataComplete] = useState(() => {
    const storedInfo = localStorage.getItem("isDataComplete");
    return storedInfo ? JSON.parse(storedInfo) : voidIsDataComplete;
  });

  useEffect(() => {
    localStorage.setItem("isDataComplete", JSON.stringify(isDataComplete));
  }, [isDataComplete]);

  const [userDisconnected, setUserDisconnected] = useState(() => {
    const stored = localStorage.getItem("userDisconnected");
    return stored ? JSON.parse(stored) : false;
  });

  const supermarketName = "Supermercado Do Bom";

  useEffect(() => {
    // if (userDisconnected) {
    //   setCartProducts([]);
    //   setUserAddress(voidUserAddress);
    //   setOrderInfo(voidOrderInfo);
    //   setIdToken(null);
    //   setUserContact(voidUserContact);
    //   setIsDataComplete(voidIsDataComplete);
    // }
    localStorage.setItem("userDisconnected", JSON.stringify(userDisconnected));
  }, [userDisconnected, setCartProducts, setOrderInfo, setUserAddress]);

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
        userDisconnected,
        setUserDisconnected,
        onMyAccount,
        setOnMyAccount,
        supermarketName
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};
