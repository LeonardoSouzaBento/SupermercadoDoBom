import { Button } from '@ui/button';
import { MuiIcon } from '@ui/index';
import { useNavigate } from 'react-router-dom';
import { CardHeaderStyled, CardTitleStyled, StatusStyled, WrapperStyled } from '../ui';

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
    <WrapperStyled $orders={true}>
      <CardHeaderStyled $orders={true}>
        <CardTitleStyled $orders={true}>
          <MuiIcon fill={1} icon="shopping_bag" size="3xl" />
          <h3 style={{ marginBottom: '0px' }}>Minhas compras</h3>
        </CardTitleStyled>

        {currentOrder.status === 'pending' && (
          <StatusStyled $finish={true}>
            <div>
              <span className="material-symbols-rounded">priority_high</span>
              <p>Compra não finalizada</p>
            </div>
          </StatusStyled>
        )}
      </CardHeaderStyled>
      {currentOrder.status === 'pending' && (
        <Button disabled={!enable} fullWidth onClick={handleClickFinish}>
          Finalizar a compra
        </Button>
      )}
    </WrapperStyled>
  );
};

export default FinishShopping;

