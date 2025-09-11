import {
  DivOneStyled,
  UserHeaderDivStyled,
  DivImgEmailStyled,
  DivImgUserStyled,
  SpanH2Styled,
  ImgUserStyled,
  DivNameEmailStyled,
  H2v2Styled,
  NameStatusStyled,
  DivSpanStyled,
  SpanEditStyled,
  DivStatusStyled,
  DivNameStatus,
  SpanStatusStyled,
  DivButtonStyled,
  ButtonLoginStyled,
} from "../StylizedTags";
import { PContinueStyled } from "../../Cart/StylizedTags";

export const UserProfile = ({ userContact, setSeeLogin }) => {

  const nameUser = userContact.email
  ? (userContact.name ? userContact.name : "Usuário sem nome")
  : "Usuário anônimo";

  // function handleEditNameUser() {
    
  // }

  return (
    <DivOneStyled>
      <UserHeaderDivStyled>
        <DivImgEmailStyled>
          <DivImgUserStyled>
            {!userContact.photoUrl && (
              <SpanH2Styled className="material-symbols-rounded" $user={true}>
                {!userContact.name ? "person_alert" : "person"}
              </SpanH2Styled>
            )}
            <ImgUserStyled src={userContact.photoUrl || null} />
          </DivImgUserStyled>

          <DivNameEmailStyled>
            <H2v2Styled $nameUser={true}>{nameUser}</H2v2Styled>
            <NameStatusStyled $email={true}>
              {!userContact.email
                ? "usuario_anonimo@email.com"
                : userContact.email}
            </NameStatusStyled>
          </DivNameEmailStyled>
        </DivImgEmailStyled>

        <DivSpanStyled $editUser={true}>
          <SpanEditStyled className="material-symbols-outlined">
            edit
          </SpanEditStyled>
        </DivSpanStyled>
      </UserHeaderDivStyled>

      {(!userContact.email || !userContact.name) && (
        <DivStatusStyled $user={true}>
          <DivNameStatus
            $user={true}
            $hide={userContact.email && userContact.name}
          >
            <SpanStatusStyled className="material-symbols-outlined">
              {!userContact.email || !userContact.name
                ? "exclamation"
                : "check"}
            </SpanStatusStyled>
            <NameStatusStyled $hide={userContact.email && userContact.name}>
              {!userContact.email ? "Usúario anônimo" : "Sem seu nome"}
            </NameStatusStyled>
          </DivNameStatus>
        </DivStatusStyled>
      )}

      {!userContact.email && (
        <DivButtonStyled
          onClick={() => {
            setSeeLogin(true);
          }}
        >
          <ButtonLoginStyled>
            <PContinueStyled>Entrar com e-mail</PContinueStyled>
          </ButtonLoginStyled>
        </DivButtonStyled>
      )}
    </DivOneStyled>
  );
};

export default UserProfile;
