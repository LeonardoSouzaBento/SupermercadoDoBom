import { PButtonBase } from '@components/GenericStylizedTags';
import {Button} from '@ui/button';
import { useNavigate } from 'react-router-dom';
import {
  ButtonLoginStyled,
  DivOneStyled,
  H2v2Styled,
  ProfileCardHeaderStyled,
  SpanEditStyled,
  SpanH2Styled,
  StatusWrapperStyled
} from '../StylizedTags';

export const UserProfile = ({ userContact }) => {
  const nameUser = userContact.email
    ? userContact.name
      ? userContact.name
      : 'Usuário sem nome'
    : 'Usuário anônimo';
  const navigate = useNavigate();

  // function handleEditNameUser() {

  // }

  return (
    <DivOneStyled>
      <ProfileCardHeaderStyled>
        <div>
          <div>
            {!userContact.photoUrl && (
              <SpanH2Styled className="material-symbols-rounded" $user={true}>
                {!userContact.name ? 'person_alert' : 'person'}
              </SpanH2Styled>
            )}
            <img src={userContact.photoUrl || null} />
          </div>

          <div>
            <H2v2Styled $nameUser={true}>{nameUser}</H2v2Styled>
            <p>
              {!userContact.email ? 'usuario_anonimo@email.com' : userContact.email}
            </p>
          </div>
        </div>

        <Button size="icon">
          <SpanEditStyled className="material-symbols-rounded">edit</SpanEditStyled>
        </Button>
      </ProfileCardHeaderStyled>

      {(!userContact.email || !userContact.name) && (
        <StatusWrapperStyled $user={true}>
          <div>
            <span className="material-symbols-rounded">
              {!userContact.email || !userContact.name ? 'priority_high' : 'check'}
            </span>
            <p>{!userContact.email ? 'Usúario anônimo' : 'Sem seu nome'}</p>
          </div>
        </StatusWrapperStyled>
      )}

      {!userContact.email && (
        <ButtonLoginStyled
          onClick={() => {
            navigate('/fazer-login');
          }}>
          <PButtonBase>Entrar com e-mail</PButtonBase>
        </ButtonLoginStyled>
      )}
    </DivOneStyled>
  );
};

export default UserProfile;
