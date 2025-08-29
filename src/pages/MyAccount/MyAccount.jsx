import { useState } from "react";
import {
  ContainerStyled,
  H1Styled,
  DivHeaderStyled,
  DivOneTwoStyled,
  DivThreeButtonStyled,
} from "../../components/MyAccountPage/StylizedTagsMyAccountPage";
import {
  SavedAddress,
  UserProfile,
  Contact,
  FinishShopping,
} from "./ComponentsMyAccount";
import RegisterAddress from "../../components/MyAccountPage/RegisterAddress/RegisterAddress";
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

      <DivHeaderStyled>
        <H1Styled>Minha conta</H1Styled>
      </DivHeaderStyled>

      <ContainerStyled>
        {/*Minha conta e Contato*/}
        <DivOneTwoStyled>
          <UserProfile userContact={userContact} setSeeLogin={setSeeLogin} />
          <Contact isDataComplete={isDataComplete} />
        </DivOneTwoStyled>

        {/*Endereço e Finalizar compra*/}
        <DivThreeButtonStyled>
          <SavedAddress
            setSeeRegisterAddress={setSeeRegisterAddress}
            isDataComplete={isDataComplete}
            userAddress={userAddress}
          />
          <FinishShopping
            isDataComplete={isDataComplete}
            orderInfo={orderInfo}
          />
        </DivThreeButtonStyled>
      </ContainerStyled>

      {seeRegisterAddress && (
        <RegisterAddress setSeeRegisterAddress={setSeeRegisterAddress} />
      )}
    </>
  );
};

export default MyAccount;
