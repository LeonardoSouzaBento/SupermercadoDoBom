import { useEffect, useState } from "react";
import {
  MainStyled,
  H1Styled,
  HeaderStyled,
  DivOneTwoStyled,
  DivThreeButtonStyled,
} from "./StylizedTags";
import Contact from "./Components/Contact";
import SavedAddress from "./Components/SavedAddress";
import FinishShopping from "./Components/FinishShopping";
import UserProfile from "./Components/UserProfile";
import RegisterAddress from "./RegisterAddress/RegisterAddress";
import Login from "../../components/Login/Login";
import { useContext } from "react";
import { VisibilityContext } from "../../contexts/VisibilityContext";
import { CartContext } from "../../contexts/CartContext";

const MyAccount = () => {
  const { userContact, isDataComplete, seeLogin, setSeeLogin } =
    useContext(VisibilityContext);
  const { orderInfo, setOrderInfo, userAddress, cartProducts } =
    useContext(CartContext);
  const [seeRegisterAddress, setSeeRegisterAddress] = useState(false);

  useEffect(() => {
    if (cartProducts.length !== 0 && !orderInfo.status) {
      setOrderInfo({ ...orderInfo, status: "pending" });
    }
    if (cartProducts.length === 0) {
      setOrderInfo({ ...orderInfo, status: "" });
    }
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }, []);

  return (
    <>
      {seeLogin && <Login setSeeLogin={setSeeLogin} onMyAccount={true} />}

      <HeaderStyled>
        <H1Styled>Minha conta</H1Styled>
      </HeaderStyled>

      <MainStyled>
        {/*Minha conta e Contato*/}
        <DivOneTwoStyled>
          <UserProfile userContact={userContact} />
          <Contact />
        </DivOneTwoStyled>

        {/*Endereço e Finalizar compra*/}
        <DivThreeButtonStyled>
          <SavedAddress
            setSeeRegisterAddress={setSeeRegisterAddress}
            isDataComplete={isDataComplete}
            userAddress={userAddress}
            userContact={userContact}
          />
          <FinishShopping
            userContact={userContact}
            isDataComplete={isDataComplete}
            orderInfo={orderInfo}
          />
        </DivThreeButtonStyled>
      </MainStyled>

      {seeRegisterAddress && (
        <RegisterAddress setSeeRegisterAddress={setSeeRegisterAddress} />
      )}
    </>
  );
};

export default MyAccount;
