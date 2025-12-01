import { useState, useEffect, useContext } from "react";
import { UserDataContext } from "../Contexts/UserDataContext";
import { CartContext } from "../Contexts/CartContext";

/*Schemas*/
const userAddressSchema = {
  rua: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "mg",
  estado: "",
  lat: "",
  lng: "",
};

const UserContactSchema = {
  name: "",
  email: "",
  photoUrl: "",
  phone: "",
};

const isDataCompleteSchema = {
  contact: false,
  address: false,
};

const currentOrderSchema = {
  time: "",
  status: "",
  cartProducts: []
};

export const UserDataProvider = ({ children }) => {
  const { setCartProducts, setCurrentOrder } = useContext(CartContext);

  /*Token*/
  const [idToken, setIdToken] = useState(() => {
    const stored = localStorage.getItem("token");
    return stored ? JSON.parse(stored) : null;
  });
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(idToken));
  }, [idToken]);

  /*Dados de contato*/
  const [userContact, setUserContact] = useState(() => {
    const storedInfo = localStorage.getItem("userContact");
    return storedInfo ? JSON.parse(storedInfo) : UserContactSchema;
  });
  useEffect(() => {
    localStorage.setItem("userContact", JSON.stringify(userContact));
  }, [userContact]);

  /*Dados de endereço*/
  const [userAddress, setUserAddress] = useState(() => {
    const userAddress = localStorage.getItem("userAddress");
    return userAddress ? JSON.parse(userAddress) : userAddressSchema;
  });
  useEffect(() => {
    localStorage.setItem("userAddress", JSON.stringify(userAddress));
  }, [userAddress]);

  /*Dados completos?*/
  const [isDataComplete, setIsDataComplete] = useState(() => {
    const storedInfo = localStorage.getItem("isDataComplete");
    return storedInfo ? JSON.parse(storedInfo) : isDataCompleteSchema;
  });
  useEffect(() => {
    localStorage.setItem("isDataComplete", JSON.stringify(isDataComplete));
  }, [isDataComplete]);

  /*Desconecção do usuario*/
  const [userDisconnected, setUserDisconnected] = useState(() => {
    const stored = localStorage.getItem("userDisconnected");
    return stored ? JSON.parse(stored) : false;
  });
  useEffect(() => {
    localStorage.setItem("userDisconnected", JSON.stringify(userDisconnected));
  }, [userDisconnected]);

  /*Itens pesquisados*/
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    if (userDisconnected) {
      setCartProducts([]);
      setCurrentOrder(currentOrderSchema);
      setUserDisconnected(false);
    }
  }, [userDisconnected]);
  
  return (
    <UserDataContext.Provider
      value={{
        isDataComplete,
        setIsDataComplete,
        userContact,
        setUserContact,
        userAddress,
        setUserAddress,
        idToken,
        setIdToken,
        userDisconnected,
        setUserDisconnected,
        searchProducts,
        setSearchProducts,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

