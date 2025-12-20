import { UserDataContext } from '@contexts/UserDataContext.js';
import Button from '@ui/button';
import { CardHeader } from '@ui/Card.jsx';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import {
  ContainerStyled,
  PValueStyled,
  ReceiptOptionStyled,
  SpanReceiptStyled,
} from '../StylizedTags.jsx';
import { SectionStyled } from '../ui/index.js';
import DataAlert from './DataAlert';

const ReceiptAndContinueSection = ({ setScaleWarnnig, setCurrentOrder, totalAddedValue }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('entregar');
  const [incompleteDataAlert, setIncompleteDataAlert] = useState(false);
  const { userContact, isDataComplete } = useContext(UserDataContext);

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
    <>
      <ContainerStyled>
        <SectionStyled>
          <CardHeader
            icon={<span className="material-symbols-rounded">delivery_truck_speed</span>}
            title="Recebimento"
          />

          <ReceiptOptionStyled
            $variant={'retirar'}
            $selected={selected == 'retirar'}
            onClick={() => {
              setSelected('retirar');
            }}>
            <PValueStyled $selected={selected == 'retirar'}>
              Retirar no estabelecimento
            </PValueStyled>
            <SpanReceiptStyled
              className="material-symbols-rounded"
              $selected={selected == 'retirar'}>
              {selected === 'retirar' ? 'check_box' : 'check_box_outline_blank'}
            </SpanReceiptStyled>
          </ReceiptOptionStyled>

          <ReceiptOptionStyled
            $variant={'entregar'}
            $selected={selected == 'entregar'}
            onClick={() => {
              setSelected('entregar');
            }}>
            <PValueStyled $selected={selected == 'entregar'}>Entregar</PValueStyled>
            <SpanReceiptStyled
              className="material-symbols-rounded"
              $selected={selected == 'entregar'}>
              {selected === 'entregar' ? 'check_box' : 'check_box_outline_blank'}
            </SpanReceiptStyled>
          </ReceiptOptionStyled>
        </SectionStyled>

        <Button
          variant="primary"
          size="normal"
          disabled={falta > 0}
          onClick={handleClickContinue}
          customStyles={css`
            width: 100%;
          `}>
          {userDataComplete ? 'Finalizar Compra' : 'Continuar'}
        </Button>
      </ContainerStyled>
      {incompleteDataAlert && <DataAlert />}
    </>
  );
};

export default ReceiptAndContinueSection;
