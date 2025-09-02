import { useState } from "react";
import {
  MainStyled,
  H1Styled,
  HeaderStyled,
  DivOneTwoStyled,
  DivThreeButtonStyled,
} from "./StylizedTags";
import {
  SavedAddress,
  UserProfile,
  Contact,
  FinishShopping,
} from "./Components";
import RegisterAddress from "./RegisterAddress/RegisterAddress";
import Login from "../../components/Login/Login";
import { useContext } from "react";
import { VisibilityContext } from "../../contexts/VisibilityContext";
import { CartContext } from "../../contexts/CartContext";

const MyAccount = () => {
  const { userContact, isDataComplete, seeLogin, setSeeLogin } =
    useContext(VisibilityContext);
  const { orderInfo, userAddress } = useContext(CartContext);
  const [seeRegisterAddress, setSeeRegisterAddress] = useState(false);

  return (
    <>
      {seeLogin && <Login setSeeLogin={setSeeLogin} onMyAccount={true} />}

      <HeaderStyled>
        <H1Styled>Minha conta</H1Styled>
      </HeaderStyled>

      <MainStyled>
        {/*Minha conta e Contato*/}
        <DivOneTwoStyled>
          <UserProfile userContact={userContact} setSeeLogin={setSeeLogin} />
          <Contact />
        </DivOneTwoStyled>

        {/*Endereço e Finalizar compra*/}
        <DivThreeButtonStyled>
          <SavedAddress
            setSeeRegisterAddress={setSeeRegisterAddress}
            isDataComplete={isDataComplete}
            userAddress={userAddress}
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
