import {
  ContainerStyled,
  DivOneStyled,
  SubDivOneStyled,
  ButtonLoginStyled,
  DivTwoStyled,
  DivThreeStyled,
  DivH2StatusStyled,
  DivH2Styled,
  HHeaderStyled,
  DivNameEmailStyled,
  SpanH2Styled,
  H2v2Styled,
  DivStatusStyled,
  DivNameStatus,
  NameStatusStyled,
  SpanStatusStyled,
  DivFormStyled,
  DivMeContactStyled,
  DivHeaderStyled,
  DivStyled,
  DivHalfAddressStyled,
  DivZapStyled,
  Pv2Styled,
  StrongStyled,
  DivSpanStyled,
  SpanStyled,
  DivImgUserStyled,
  ImgUserStyled,
  NameOfImgStyled,
  DivImgEmailStyled,
  DivButtonStyled,
  PLoginStlyed,
  DivAddressStyled,
} from "../components/MyAccountPage/ComponentsMyAccountPage";
import { useContext } from "react";
import { VisibilityContext } from "../contexts/VisibilityContext";

function getNameInitials(name) {
  const connectives = ["de", "do", "das", "dos", "e", "da"];

  // Divide pelos espaços
  const words = name.split(" ");

  const filteredWords = words.filter(
    (word) => !connectives.includes(word.toLowerCase())
  );

  const initials = filteredWords.map((word) => word.charAt(0).toUpperCase());

  // Junta as iniciais em uma única string
  return initials.join("");
}

const MyAccount = () => {
  const { primaryUserInfo, secundaryUserInfo } = useContext(VisibilityContext);
  const abbrev = getNameInitials(primaryUserInfo.name);
  // const [zapNumber, setZapNumber] = useState("");

  return (
    <>
      <DivHeaderStyled>
        <HHeaderStyled>Minha conta</HHeaderStyled>
      </DivHeaderStyled>

      <ContainerStyled>
        {/*Minha conta e Contato*/}
        <DivMeContactStyled>
          <DivOneStyled $account={true}>
            <DivImgEmailStyled>
              <DivImgUserStyled>
                <NameOfImgStyled>
                  {primaryUserInfo.abbrev === "" ? "UA" : abbrev}
                </NameOfImgStyled>
                <ImgUserStyled />
              </DivImgUserStyled>

              <DivNameEmailStyled>
                <H2v2Styled $nameUser={true}>
                  {primaryUserInfo.name == ""
                    ? "Usuário Anônimo"
                    : primaryUserInfo.name}
                </H2v2Styled>
                <NameStatusStyled $email={true}>
                  {primaryUserInfo.email == ""
                    ? "usuario_anonimo@email.com"
                    : primaryUserInfo.email}
                </NameStatusStyled>
              </DivNameEmailStyled>
            </DivImgEmailStyled>

            {primaryUserInfo.email === "" && (
              <SubDivOneStyled>
                <DivStatusStyled $user={true}>
                  <DivNameStatus $user={true}>
                    <NameStatusStyled>Usúario anônimo</NameStatusStyled>
                    <SpanStatusStyled className="material-symbols-outlined">
                      exclamation
                    </SpanStatusStyled>
                  </DivNameStatus>
                </DivStatusStyled>
              </SubDivOneStyled>
            )}

            <DivButtonStyled>
              <ButtonLoginStyled>
                <PLoginStlyed>Cadastre-se</PLoginStlyed>
              </ButtonLoginStyled>
            </DivButtonStyled>
          </DivOneStyled>
          <DivTwoStyled>
            <DivH2StatusStyled>
              <DivH2Styled>
                <SpanH2Styled
                  className="material-symbols-outlined"
                  $variant={"call"}
                >
                  call
                </SpanH2Styled>
                <H2v2Styled style={{ marginBottom: "0px" }}>
                  Informações para contato
                </H2v2Styled>
              </DivH2Styled>

              {/*Estado do número*/}
              {!secundaryUserInfo.contactCompleted && (
                <DivStatusStyled>
                  <DivNameStatus>
                    <NameStatusStyled>Sem um número</NameStatusStyled>
                    <SpanStatusStyled className="material-symbols-outlined">
                      exclamation
                    </SpanStatusStyled>
                  </DivNameStatus>
                </DivStatusStyled>
              )}
            </DivH2StatusStyled>
            <DivStyled>
              <DivZapStyled>
                <DivFormStyled>
                  <Pv2Styled>
                    <StrongStyled>Whatsapp ou telefone</StrongStyled> <br />
                  </Pv2Styled>
                  <Pv2Styled>Não fornecido</Pv2Styled>
                </DivFormStyled>

                {/*botão editar*/}
                <DivSpanStyled>
                  <SpanStyled className="material-symbols-outlined">
                    edit
                  </SpanStyled>
                </DivSpanStyled>
              </DivZapStyled>
            </DivStyled>
          </DivTwoStyled>
        </DivMeContactStyled>

        {/*Endereço*/}
        <DivThreeStyled>
          <DivH2StatusStyled>
            <DivH2Styled>
              <SpanH2Styled className="material-symbols-rounded">
                location_home
              </SpanH2Styled>
              <H2v2Styled style={{ marginBottom: "0px" }}>
                Endereço para entrega
              </H2v2Styled>
            </DivH2Styled>

            {!secundaryUserInfo.addressCompleted && (
              <DivStatusStyled>
                <DivNameStatus>
                  <NameStatusStyled>Sem endereço</NameStatusStyled>
                  <SpanStatusStyled className="material-symbols-outlined">
                    exclamation
                  </SpanStatusStyled>
                </DivNameStatus>
              </DivStatusStyled>
            )}
          </DivH2StatusStyled>

          <DivStyled>
            <div
              style={{
                position: "relative",
              }}
            >
              <DivAddressStyled>
                <DivHalfAddressStyled style={{ marginBottom: "16px" }}>
                  <DivFormStyled style={{ width: "58%" }}>
                    <Pv2Styled>
                      <StrongStyled>Rua:</StrongStyled>
                    </Pv2Styled>
                    <Pv2Styled>Não fornecido</Pv2Styled>
                  </DivFormStyled>

                  <DivFormStyled>
                    <Pv2Styled>
                      <StrongStyled>Número:</StrongStyled>
                    </Pv2Styled>
                    <Pv2Styled>Não fornecido</Pv2Styled>
                  </DivFormStyled>
                </DivHalfAddressStyled>

                <DivHalfAddressStyled>
                  <DivFormStyled style={{ width: "58%" }}>
                    <Pv2Styled>
                      <StrongStyled>Complemento:</StrongStyled>
                    </Pv2Styled>
                    <Pv2Styled>Não fornecido</Pv2Styled>
                  </DivFormStyled>

                  <DivFormStyled>
                    <DivFormStyled>
                      <Pv2Styled>
                        <StrongStyled>Cidade (UF):</StrongStyled>
                      </Pv2Styled>
                      <Pv2Styled>Não fornecido</Pv2Styled>
                    </DivFormStyled>
                  </DivFormStyled>
                </DivHalfAddressStyled>
              </DivAddressStyled>

              <DivSpanStyled $address={true}>
                <SpanStyled className="material-symbols-outlined">
                  edit
                </SpanStyled>
              </DivSpanStyled>
            </div>
          </DivStyled>
        </DivThreeStyled>
      </ContainerStyled>
    </>
  );
};

export default MyAccount;
