import { Button } from '@ui/button';
import { Card, CardHeader, CardTitle, Icon, MuiIcon } from '@ui/index';
import { useNavigate } from 'react-router-dom';
import { StatusSc } from './ui';
import { css } from 'styled-components';
import { ShoppingCart } from 'lucide-react';

const FinishShopping = ({ isDataComplete, currentOrder, userContact }) => {
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
         <Icon Icon={ShoppingCart} fill='currentColor' strokeWidth={"thin"} size={"2xl"} />
          <h3 style={{ marginBottom: '0px' }}>Minhas compras</h3>
        </CardTitle>

        {currentOrder.status === 'pending' && (
          <StatusSc $finish={true}>
            <div>
              <span className="material-symbols-rounded">priority_high</span>
              <p>Compra não finalizada</p>
            </div>
          </StatusSc>
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

export { FinishShopping };
