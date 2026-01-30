import { Button } from '@ui/button';
import { Card, CardHeader, CardTitle, MuiIcon } from '@ui/index';
import { useNavigate } from 'react-router-dom';
import { StatusStyled } from '../ui';
import { css } from 'styled-components';

export const FinishShopping = ({ isDataComplete, currentOrder, userContact }) => {
  const enable =
    isDataComplete.contact &&
    isDataComplete.address &&
    userContact.email &&
    currentOrder.status === 'pending';
  const navigate = useNavigate();

  function handleClickFinish() {
    if (!currentOrder.time) {
      navigate('/meu-carrinho');
    } else {
      navigate('/meus-pedidos');
    }
  }

  return (
    <Card>
      <CardHeader
        styles={css`
          width: 100%;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        `}>
        <CardTitle>
          <MuiIcon fill={1} icon="shopping_bag" size="3xl" />
          <h3 style={{ marginBottom: '0px' }}>Minhas compras</h3>
        </CardTitle>

        {currentOrder.status === 'pending' && (
          <StatusStyled $finish={true}>
            <div>
              <span className="material-symbols-rounded">priority_high</span>
              <p>Compra não finalizada</p>
            </div>
          </StatusStyled>
        )}
      </CardHeader>
      {currentOrder.status === 'pending' && (
        <Button disabled={!enable} flex onClick={handleClickFinish}>
          Finalizar a compra
        </Button>
      )}
    </Card>
  );
};

export default FinishShopping;
