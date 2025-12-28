import Button from '@ui/button';
import { useNavigate } from 'react-router-dom';
import {
  DivH2StatusStyled,
  DivOneStyled,
  H2v2Styled,
  HeaderH2Styled,
  SpanH2Styled,
  StatusWrapperStyled
} from '../StylizedTags';

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
    <DivOneStyled $orders={true}>
      <DivH2StatusStyled $orders={true}>
        <HeaderH2Styled $orders={true}>
          <SpanH2Styled className="material-symbols-rounded">shopping_bag</SpanH2Styled>
          <H2v2Styled style={{ marginBottom: '0px' }}>Minhas compras</H2v2Styled>
        </HeaderH2Styled>

        {currentOrder.status === 'pending' && (
          <StatusWrapperStyled $finish={true}>
            <div>
              <span className="material-symbols-rounded">priority_high</span>
              <p>Compra não finalizada</p>
            </div>
          </StatusWrapperStyled>
        )}
      </DivH2StatusStyled>
      {currentOrder.status === 'pending' && (
        <Button disabled={!enable} onClick={handleClickFinish}>
          Finalizar a compra
        </Button>
      )}
    </DivOneStyled>
  );
};

export default FinishShopping;
