import { UserDataContext } from '@contexts/UserDataContext.js';
import Button from '@ui/button';
import { CardHeader } from '@ui/Card.jsx';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { SpanReceiptStyled } from '../StylizedTags.jsx';
import { SectionStyled } from '../ui/index.js';
import DataAlert from './data-alert.jsx';

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
      <SectionStyled>
        <div>
          <CardHeader
            icon={<span className="material-symbols-rounded">delivery_truck_speed</span>}
            title="Recebimento"
          />

          <Button
            variant="transparent"
            $selected={selected == 'retirar'}
            onClick={() => {
              setSelected('retirar');
            }}>
            Retirar no estabelecimento
            <SpanReceiptStyled
              className="material-symbols-rounded"
              $selected={selected == 'retirar'}>
              {selected === 'retirar' ? 'check_box' : 'check_box_outline_blank'}
            </SpanReceiptStyled>
          </Button>

          <Button
            variant="transparent"
            $selected={selected == 'entregar'}
            onClick={() => {
              setSelected('entregar');
            }}>
            Entregar
            <SpanReceiptStyled
              className="material-symbols-rounded"
              $selected={selected == 'entregar'}>
              {selected === 'entregar' ? 'check_box' : 'check_box_outline_blank'}
            </SpanReceiptStyled>
          </Button>
        </div>

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
      </SectionStyled>
      {incompleteDataAlert && <DataAlert />}
    </>
  );
};

export default ReceiptAndContinueSection;
