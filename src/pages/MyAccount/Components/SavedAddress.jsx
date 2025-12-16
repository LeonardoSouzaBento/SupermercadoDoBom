import { useState } from "react";
import {
  DivThreeStyled,
  DivH2StatusStyled,
  HeaderH2Styled,
  SpanH2Styled,
  H2v2Styled,
  DivStatusStyled,
  DivNameStatus,
  SpanStatusStyled,
  NameStatusStyled,
  DivStyled,
  DivAddressStyled,
  DivHalfAddressStyled,
  DivFormStyled,
  Pv2Styled,
  DivSpanStyled,
  SpanEditStyled,
  SpanCheckStyled,
  H3Styled,
} from "../StylizedTags";
import { DivToCoverStyled } from "@components/GenericStylizedTags";
import { useNavigate } from "react-router-dom";

export const SavedAddress = ({
  setSeeRegisterAddress,
  isDataComplete,
  userContact,
  userAddress,
}) => {
  function GetInitialsNameState() {
    const palavras = userAddress.estado.split(" ");
    const iniciais = palavras.map((palavra) => palavra.charAt(0));
    const result = iniciais.join("");
    return result;
  }
  const initialNameState = GetInitialsNameState();
  const [seeLoginWarn, setSeeLoginWarn] = useState(false);
  const navigate = useNavigate();

  function showLoginWarn() {
    setSeeLoginWarn(true);
    setTimeout(() => {
      setSeeLoginWarn(false);
      navigate("/fazer-login");
    }, 3000);
  }

  function handleRegisterAddress() {
    if (userContact.email) {
      setSeeRegisterAddress(true);
    } else {
      showLoginWarn();
    }
  }

  return (
    <DivThreeStyled>
      {isDataComplete.address && (
        <SpanCheckStyled className="material-symbols-outlined">
          check
        </SpanCheckStyled>
      )}

      <DivH2StatusStyled>
        <HeaderH2Styled>
          <SpanH2Styled className="material-symbols-rounded">
            location_home
          </SpanH2Styled>
          <H2v2Styled style={{ marginBottom: "0px" }}>
            Endereço para entrega
          </H2v2Styled>
        </HeaderH2Styled>

        {!isDataComplete.address && (
          <DivStatusStyled $address={true}>
            <DivNameStatus>
              <SpanStatusStyled className="material-symbols-rounded">
                {isDataComplete.address ? "check" : "exclamation"}
              </SpanStatusStyled>
              <NameStatusStyled>
                {isDataComplete.address ? "Endereço salvo" : "Sem endereço"}
              </NameStatusStyled>
            </DivNameStatus>
          </DivStatusStyled>
        )}
      </DivH2StatusStyled>

      <DivStyled>
        <DivAddressStyled>
          <DivHalfAddressStyled $first={true}>
            <DivFormStyled $first={true}>
              <H3Styled>Rua:</H3Styled>
              <Pv2Styled>
                {!userAddress.rua ? "Não fornecido" : userAddress.rua}
              </Pv2Styled>
            </DivFormStyled>

            <DivFormStyled>
              <H3Styled>Número:</H3Styled>
              <Pv2Styled>
                {!userAddress.numero ? "Não fornecido" : userAddress.numero}
              </Pv2Styled>
            </DivFormStyled>
          </DivHalfAddressStyled>

          <DivHalfAddressStyled>
            <DivFormStyled $first={true}>
              <H3Styled>Complemento:</H3Styled>
              <Pv2Styled>
                {!userAddress.complemento
                  ? "Não fornecido (opcional)"
                  : userAddress.complemento}
              </Pv2Styled>
            </DivFormStyled>

            <DivFormStyled>
              <DivFormStyled>
                <H3Styled>Cidade (UF):</H3Styled>
                <Pv2Styled>
                  {!userAddress.cidade
                    ? "Não fornecido"
                    : `${userAddress.cidade} (${
                        initialNameState ? initialNameState : userAddress.estado
                      })`}
                </Pv2Styled>
              </DivFormStyled>
            </DivFormStyled>
          </DivHalfAddressStyled>

          <DivSpanStyled
            $address={true}
            $first={true}
            onClick={handleRegisterAddress}
          >
            <SpanEditStyled className="material-symbols-rounded">
              edit
            </SpanEditStyled>
          </DivSpanStyled>

          {seeLoginWarn && (
            <DivToCoverStyled>
              <H2v2Styled
                $nameUser={true}
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "var(--secondary-hover)",
                  scale: 1.1,
                  fontWeight: 400,
                }}
              >
                Faça login primeiro!
              </H2v2Styled>
            </DivToCoverStyled>
          )}
        </DivAddressStyled>
      </DivStyled>
    </DivThreeStyled>
  );
};

export default SavedAddress;


