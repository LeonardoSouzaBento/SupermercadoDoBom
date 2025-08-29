import { useState, useEffect, useContext } from "react";
import {
  DivBodyStyled,
  MainDivStyled,
  DivSpanCloseStyled,
  SpanCloseStyled,
  DivTitleStyled,
  H1Styled,
  ButtonStyled,
} from "./StylizedTags";
// import GetLocationReturn from "./GetLocationReturn";
import CepInput from "./Components/CepInput";
import { VisibilityContext } from "../../../contexts/VisibilityContext";
import AddressForm from "./Components/AddressForm";
import GetLocationButton from "./Components/GetLocationButton";

const RegisterAddress = ({ setSeeRegisterAddress }) => {
  const [opacityRegAddress, setOpacityRegAddress] = useState(0);
  const [seeAdressForm, setSeeAddressForm] = useState(false);
  const [opacityReturn, setOpacityReturn] = useState(0);
  const [formData, setFormData] = useState({
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    lat: "",
    lng: "",
  });
  const { idToken } = useContext(VisibilityContext);
  //-11.186615346993204, lng: -40.26740712716049

  useEffect(() => {
    setTimeout(() => {
      setOpacityRegAddress(1);
    }, 200);
  }, []);

  useEffect(() => {
    if (opacityRegAddress === 0) {
      setTimeout(() => {
        setSeeRegisterAddress(false);
      }, 300);
    }
  }, [opacityRegAddress, setSeeRegisterAddress]);

  return (
    <DivBodyStyled $opacity={opacityRegAddress}>
      <MainDivStyled>
        <DivTitleStyled>
          <H1Styled>Cadastrar endereço</H1Styled>
          <DivSpanCloseStyled onClick={()=>{setOpacityRegAddress(0)}}>
            <SpanCloseStyled className="material-symbols-rounded">
              close
            </SpanCloseStyled>
          </DivSpanCloseStyled>
        </DivTitleStyled>

        {seeAdressForm ? (
          <AddressForm
            setOpacityRegAddress={setOpacityRegAddress}
            opacityReturn={opacityReturn}
            formData={formData}
            setFormData={setFormData}
            setSeeAddressForm={setSeeAddressForm}
          />
        ) : (
          <>
            {/*3 Opções de preenchimento*/}
            <GetLocationButton
              setOpacityReturn={setOpacityReturn}
              setFormData={setFormData}
              setSeeAddressForm={setSeeAddressForm}
              idToken={idToken}
            />

            <CepInput
              opacityReturn={opacityReturn}
              setSeeAddressForm={setSeeAddressForm}
              setFormData={setFormData}
            />

            <ButtonStyled
              $variant={"digitarTudo"}
              onClick={() => {
                setSeeAddressForm(true);
              }}
            >
              Digitar todos os dados
            </ButtonStyled>
          </>
        )}
      </MainDivStyled>
    </DivBodyStyled>
  );
};

export default RegisterAddress;
