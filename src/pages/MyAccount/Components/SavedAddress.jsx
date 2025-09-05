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
  StrongStyled,
  DivSpanStyled,
  SpanEditStyled,
} from "../StylizedTags";

export const SavedAddress = ({
  setSeeRegisterAddress,
  isDataComplete,
  userAddress,
}) => {
  function GetInitialsNameState() {
    const palavras = userAddress.estado.split(" ");
    const iniciais = palavras.map((palavra) => palavra.charAt(0));
    const result = iniciais.join("");
    return result;
  }
  const initialNameState = GetInitialsNameState();

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
          <DivStatusStyled>
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
              <Pv2Styled>
                <StrongStyled>Rua:</StrongStyled>
              </Pv2Styled>
              <Pv2Styled>
                {!userAddress.rua ? "Não fornecido" : userAddress.rua}
              </Pv2Styled>
            </DivFormStyled>

            <DivFormStyled>
              <Pv2Styled>
                <StrongStyled>Número:</StrongStyled>
              </Pv2Styled>
              <Pv2Styled>
                {!userAddress.numero ? "Não fornecido" : userAddress.numero}
              </Pv2Styled>
            </DivFormStyled>
          </DivHalfAddressStyled>

          <DivHalfAddressStyled>
            <DivFormStyled $first={true}>
              <Pv2Styled>
                <StrongStyled>Complemento:</StrongStyled>
              </Pv2Styled>
              <Pv2Styled>
                {!userAddress.complemento
                  ? "Não fornecido (opcional)"
                  : userAddress.complemento}
              </Pv2Styled>
            </DivFormStyled>

            <DivFormStyled>
              <DivFormStyled>
                <Pv2Styled>
                  <StrongStyled>Cidade (UF):</StrongStyled>
                </Pv2Styled>
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
            onClick={() => {
              setSeeRegisterAddress(true);
            }}
          >
            <SpanEditStyled className="material-symbols-rounded">
              edit
            </SpanEditStyled>
          </DivSpanStyled>
        </DivAddressStyled>
      </DivStyled>
    </DivThreeStyled>
  );
};

export default SavedAddress;