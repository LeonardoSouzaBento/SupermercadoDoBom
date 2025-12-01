import { useState, useEffect } from "react";
import { VisibilityContext } from "@contexts/VisibilityContext";

export const VisibilityProvider = ({ children }) => {
  const supermarketName = "Supermercado Do Bom";
  
  //dica para recrutador
  const [tipForRecruiter, setTipForRecruiter] = useState(() => {
    const stored = localStorage.getItem("tipForRecruiter");
    return stored ? JSON.parse(stored) : true;
  });
  useEffect(() => {
    localStorage.setItem("tipForRecruiter", JSON.stringify(tipForRecruiter));
  }, [tipForRecruiter]);
  const [preventClick, setPreventClick] = useState(false);

  /*feedback cancelar compra*/
  const [seeFeedback, setSeeFeedback] = useState(false);

  /*estados do produto em tela cheia*/
  const [dataProductFull, setDataProductFull] = useState(null);
  const [viewProductInFull, setViewProductInFull] = useState(false);
  // const [updateProduct, setUpdateProduct] = useState(null);

  //estados para login
  const [seeLogin, setSeeLogin] = useState(() => {
    const stored = localStorage.getItem("seeLogin");
    return stored ? JSON.parse(stored) : true;
  });
  useEffect(() => {
    localStorage.setItem("seeLogin", JSON.stringify(seeLogin));
  }, [seeLogin]);

  const [onMyAccount, setOnMyAccount] = useState(() => {
    const stored = localStorage.getItem("onMyAccount");
    return stored ? JSON.parse(stored) : false;
  });
  useEffect(() => {
    localStorage.setItem("onMyAccount", JSON.stringify(onMyAccount));
  }, [onMyAccount]);

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
        seeLogin,
        setSeeLogin,
        onMyAccount,
        setOnMyAccount,
        supermarketName,
        // updateProduct,
        // setUpdateProduct,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};


