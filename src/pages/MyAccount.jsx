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
  SubDivStyled,
  DivMeContactStyled,
  DivHeaderStyled,
  DivStyled,
  DivAddressStyled,
  DivPStyled,
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

  return (
    <>
      <DivHeaderStyled>
        <HHeaderStyled>Minha conta</HHeaderStyled>
      </DivHeaderStyled>

      <ContainerStyled>
        {/*Contato*/}
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
            {/*Aviso de login anonimo*/}
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
              <PLoginStlyed>Entrar ou Criar Conta</PLoginStlyed>
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
              <DivPStyled $variant={"zap"}>
                <Pv2Styled>
                  <StrongStyled>Whatsapp ou telefone</StrongStyled> <br />
                  Não fornecido
                </Pv2Styled>

                {/*botão editar*/}
                <DivSpanStyled>
                  <SpanStyled className="material-symbols-outlined">
                    edit
                  </SpanStyled>
                </DivSpanStyled>
              </DivPStyled>
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
                borderRadius: "8px",
                position: "relative",
                border: "1px solid rgb(188, 188, 188)",
              }}
            >
              <DivAddressStyled style={{ paddingBottom: "10px" }}>
                <SubDivStyled style={{ width: "58%" }}>
                  <Pv2Styled>
                    <StrongStyled>Rua </StrongStyled>
                  </Pv2Styled>
                  <Pv2Styled>Não fornecido</Pv2Styled>
                </SubDivStyled>

                <SubDivStyled>
                  <Pv2Styled>
                    <StrongStyled>Número </StrongStyled>
                  </Pv2Styled>
                  <Pv2Styled>Não fornecido</Pv2Styled>
                </SubDivStyled>
              </DivAddressStyled>

              <DivAddressStyled style={{ paddingTop: "10px" }}>
                <SubDivStyled style={{ width: "58%" }}>
                  <Pv2Styled>
                    <StrongStyled> Complemento </StrongStyled> <br />
                    Não fornecido
                  </Pv2Styled>
                </SubDivStyled>

                <SubDivStyled>
                  <Pv2Styled>
                    <StrongStyled> Cidade (UF) </StrongStyled> <br />
                    Não fornecido
                  </Pv2Styled>
                </SubDivStyled>
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
