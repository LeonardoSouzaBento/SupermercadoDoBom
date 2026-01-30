import { Button } from '@ui/button';
import { Icon, MuiIcon } from '@ui/index';
import { Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HeaderSc, StatusSc, WrapperSc } from './ui';

export const Profile = ({ userContact }) => {
  const nameUser = userContact.email
    ? userContact.name
      ? userContact.name
      : 'Usuário sem nome'
    : 'Usuário anônimo';
  const navigate = useNavigate();

  // function handleEditNameUser() {

  // }

  return (
    <WrapperSc>
      <HeaderSc>
        <div>
          <div id="photo-wrapper">
            {!userContact.photoUrl && (
              <MuiIcon
                icon={!userContact.name ? 'person_alert' : 'person'}
                size="3xl"
                weight={600}
                fill={1}
              />
            )}
            <img src={userContact.photoUrl || null} />
          </div>

          <div id="name-email-wrapper">
            <h3>{nameUser}</h3>
            <p>{!userContact.email ? 'usuario_anonimo@email.com' : userContact.email}</p>
          </div>
        </div>

        <Button size="icon-sm" variant="secondary">
          <MuiIcon icon="edit" size="3xl" weight={600} />
        </Button>
      </HeaderSc>

      {(!userContact.email || !userContact.name) && (
        <StatusSc $user={true}>
          <div>
            <span className="material-symbols-rounded">
              {!userContact.email || !userContact.name ? 'priority_high' : 'check'}
            </span>
            <p>{!userContact.email ? 'Usúario anônimo' : 'Sem seu nome'}</p>
          </div>
        </StatusSc>
      )}

      {!userContact.email && (
        <Button
          variant="outline"
          wFull
          onClick={() => {
            navigate('/fazer-login');
          }}>
          <Icon LucideIcon={Mail} size="sm" />
          Entrar com e-mail
        </Button>
      )}
    </WrapperSc>
  );
};
