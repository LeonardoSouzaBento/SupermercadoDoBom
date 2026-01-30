import { UserDataContext } from '@contexts/UserDataContext';
import { Icon } from '@ui/icon';
import { Button, Card, Separator, ButtonsWrapper } from '@ui/index';
import { ArrowRight, Check, Plus } from 'lucide-react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataAlert from './data-alert';
import { css } from 'styled-components';

const ButtonsWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  & > button {
    text-align: left;
  }
  & > button:last-child {
    @media screen and (min-width: 576px) {
      order: -1;
    }
  }
`;

const headerSc = css`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: auto max-content auto;
  grid-template-rows: max-content;
  align-items: center;
  margin-bottom: 1ex;
  margin-top: -9px;
  & > p {
    max-width: max-content;
    text-align: center;
    color: var(--muted-foreground);
    font-size: var(--text-base);
  }
`;

const ButtonsCard = ({ setCurrentOrder, totalAddedValue, setScaleWarnnig }) => {
  const navigate = useNavigate();
  const { userContact, isDataComplete } = useContext(UserDataContext);
  const [incompleteDataAlert, setIncompleteDataAlert] = useState(false);

  const userDataComplete = isDataComplete.contact && isDataComplete.address && userContact.email;

  const falta = 40 - totalAddedValue > 0 ? 40 - totalAddedValue : 0;

  function handleClickContinue() {
    if (falta <= 0) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const currentTime = `${hours}:${minutes}:${seconds}`;

      if (userDataComplete) {
        setCurrentOrder({ time: currentTime, status: 'completed' });
        setIncompleteDataAlert(false);
        navigate('/meus-pedidos');
      } else {
        setCurrentOrder({ time: currentTime, status: 'pending' });
        setIncompleteDataAlert(true);
        setTimeout(() => {
          navigate('/minha-conta');
        }, 4000);
      }
    } else {
      setScaleWarnnig(1.045);
      setTimeout(() => {
        setScaleWarnnig(1);
      }, 350);
    }
  }
  return (
    <Card hasHeader={false}>
      <ButtonsWrapper styles={headerSc}>
        <Separator />
        <p>Continue</p>
        <Separator />
      </ButtonsWrapper>
      <ButtonsWrapper styles={ButtonsWrapperCss}>
        <Button
          variant="primary"
          size="normal"
          disabled={falta > 0}
          onClick={handleClickContinue}
          wFull>
          {userDataComplete ? 'Finalizar Compra' : 'Continuar'}
          <Icon LucideIcon={userDataComplete ? Check : ArrowRight} />
        </Button>
        <Button
          wFull
          variant="outline"
          onClick={() => {
            navigate('/buscar-produtos');
          }}>
          <Icon LucideIcon={Plus} />
          Adicionar produtos
        </Button>
        {incompleteDataAlert && <DataAlert />}
      </ButtonsWrapper>
    </Card>
  );
};

export default ButtonsCard;
