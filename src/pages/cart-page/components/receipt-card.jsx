import { UserDataContext } from '@contexts/UserDataContext';
import { Button } from '@ui/button';
import { Card, CardHeader } from '@ui/card';
import { CardContent, CardTitle, Icon, MuiIcon, ButtonsWrapper, WrapperForm } from '@ui/index';
import { ArrowRight, Check, Plus } from 'lucide-react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import DataAlert from './data-alert';

const mainWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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
`;

const selectPCss = css`
  & > p {
    color: var(--muted-foreground);
    font-size: var(--text-lg);
    font-weight: 500;
    margin-bottom: 0.5ex;
  }
`;

const ReceiptCard = () => {
  const [selected, setSelected] = useState('entregar');

  return (
    <Card>
      <CardHeader separator={false} mb={1}>
        <CardTitle>
          <MuiIcon icon="delivery_truck_speed" size="h3" />
          <h3>Recebimento</h3>
        </CardTitle>
      </CardHeader>
      <CardContent styles={mainWrapperCss}>
        <WrapperForm
          pt="1ex"
          styles={css`
            gap: 0;
          `}>
          <CardTitle styles={selectPCss}>
            <p>Selecione</p>
          </CardTitle>
          <ButtonsWrapper styles={ButtonsWrapperCss}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelected('entregar');
              }}
              selected={selected === 'entregar'}
              styles={css`
                justify-content: start;
              `}>
              <MuiIcon
                icon={selected === 'entregar' ? 'select_check_box' : 'check_box_outline_blank'}
                fill={selected === 'entregar' ? 1 : 0}
                size="h3"
                weight={550}
                margin="0 0 1px"
              />
              Entregar
            </Button>
            <Button
              variant="ghost"
              size="sm"
              selected={selected === 'retirar'}
              onClick={() => {
                setSelected('retirar');
              }}
              styles={css`
                justify-content: start;
              `}>
              <MuiIcon
                icon={selected === 'retirar' ? 'select_check_box' : 'check_box_outline_blank'}
                fill={selected === 'retirar' ? 1 : 0}
                size="h3"
                weight={550}
              />
              Retirar no estabelecimento
            </Button>
          </ButtonsWrapper>
        </WrapperForm>
      </CardContent>
    </Card>
  );
};

export default ReceiptCard;
