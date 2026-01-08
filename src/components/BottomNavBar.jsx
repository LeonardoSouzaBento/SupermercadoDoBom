import { WrapperStyled } from '@/components/ui/bottom-nav-bar/index';
import { CartContext } from '@contexts/CartContext';
import { bottomNavBarItems } from '@data/bottomNavBarItems';
import { Button } from '@ui/button';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavButton } from './bottom-nav-bar/nav-button';

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { quantityItens, totalValueFormatted } = useContext(CartContext);

  return (
    <div>
      <WrapperStyled>
        <div id="buttons-wrapper">
          {quantityItens >= 1 && (
            <Button
              id="cart-feedback"
              size="sm"
              variant="red"
              onClick={() => {
                navigate('/meu-carrinho');
              }}>
              <span className="material-symbols-rounded" id="cartIcon">
                shopping_cart
              </span>
              R$ {totalValueFormatted}
            </Button>
          )}
          {bottomNavBarItems.map((item, index) => {
            const isActive = item.path === location.pathname;
            if (item.path === '/meu-carrinho' && quantityItens >= 1) {
              return null;
            }
            return <NavButton key={index} item={item} isActive={isActive} />;
          })}
        </div>
      </WrapperStyled>
      <div style={{ height: '72px', width: '100%', position: 'relative' }} />
    </div>
  );
}
