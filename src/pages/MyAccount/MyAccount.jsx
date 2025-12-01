import { useEffect, useState, useContext } from "react";
import { CartContext } from "@contexts/CartContext";
import { UserDataContext } from "@contexts/UserDataContext";
import { VisibilityContext } from "@contexts/VisibilityContext";
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
import BottomNavBar from "@components/BottomNavBar/BottomNavBar";

const MyAccount = () => {
  const { userContact, isDataComplete, userAddress } =
    useContext(UserDataContext);
  const { currentOrder, setCurrentOrder, cartProducts } = useContext(CartContext);
  const { setOnMyAccount } = useContext(VisibilityContext);
  const [seeRegisterAddress, setSeeRegisterAddress] = useState(false);

  useEffect(() => {
    setOnMyAccount(true);
    const pendingOrderInfo = cartProducts.length !== 0 && !currentOrder.status;
    const voidCart = cartProducts.length === 0;

    if (pendingOrderInfo) {
      setCurrentOrder({ ...currentOrder, status: "pending" });
    }
    if (voidCart) {
      setCurrentOrder({ ...currentOrder, status: "" });
    }
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }, []);

  return (
    <>
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
            currentOrder={currentOrder}
          />
        </DivThreeButtonStyled>
      </MainStyled>

      {seeRegisterAddress && (
        <RegisterAddress setSeeRegisterAddress={setSeeRegisterAddress} />
      )}
      <BottomNavBar />
    </>
  );
};

export default MyAccount;


