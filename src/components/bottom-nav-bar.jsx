import { CartContext } from '@contexts/CartContext';
import { bottomNavBarItems } from '@data/bottomNavBarItems';
import { Button } from '@ui/button';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavButton, WrapperStyled } from './bottom-nav-bar/index';
import { MuiIcon } from '@ui/index';
import { css } from 'styled-components';

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { quantityItens, totalValueFormatted } = useContext(CartContext);

  return (
    <div>
      <WrapperStyled>
        <div id="buttons-wrapper">
          {bottomNavBarItems.map((item, index) => {
            const isActive = item.path === location.pathname;
            if (item.path === '/meu-carrinho' && quantityItens >= 1) {
              return null;
            }
            return <NavButton key={index} item={item} isActive={isActive} />;
          })}
          {quantityItens >= 1 && (
            <Button
              id="cart-feedback"
              size="sm"
              variant="red"
              styles={css`
                gap: 0.5ex !important;
                padding: 0 0.75em !important;
                @media screen and (min-width: 375px) {
                  padding: 0 1em !important;
                  gap: 1ex !important;
                }
                @media screen and (min-width: 430px) {
                  min-width: max-content;
                }
              `}
              onClick={() => {
                navigate('/meu-carrinho');
              }}>
              <MuiIcon icon="shopping_cart" id="cartIcon" fill={1} size="3xl" weight={400} />
              R$ {totalValueFormatted}
            </Button>
          )}
        </div>
      </WrapperStyled>
      <div style={{ height: '72px', width: '100%', position: 'relative' }} />
    </div>
  );
}

