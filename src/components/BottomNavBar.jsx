import { WrapperStyled } from '@/components/ui/bottom-nav-bar/index';
import { mdIcon } from '@/styles/lucideIcons';
import { CartContext } from '@contexts/CartContext';
import { bottomNavBarItems } from '@data/bottomNavBarItems';
import Button from '@ui/button';
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { quantityItens, totalValueFormatted } = useContext(CartContext);

  return (
    <WrapperStyled>
      <div>
        <div>
          {quantityItens >= 1 && (
            <div
              id="cart-feedback"
              onClick={() => {
                navigate('/meu-carrinho');
              }}>
              <div>
                <span className="material-symbols-rounded" id="cartIcon">
                  shopping_cart
                </span>
              </div>
              <p>R$ {totalValueFormatted}</p>
            </div>
          )}
          {quantityItens < 1 && (
            <Button
              size="lg-icon"
              variant="primary"
              onClick={() => {
                navigate('/meu-carrinho');
              }}>
              <ShoppingCart {...mdIcon} />
            </Button>
          )}
          {bottomNavBarItems.map((item, index) => {
            const isActive = item.path === location.pathname;
            return <NavButton key={index} item={item} isActive={isActive} />;
          })}
        </div>
      </div>
      <div id="space-for-bottom-nav-bar" />
    </WrapperStyled>
  );
}

const NameButtonStyled = styled.p`
  font-size: var(--text-sm-button);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SelectedDivStyled = styled.div`
  height: 2.8px;
  width: 100%;
  border-radius: 999px;
  background-color: var(--primary);
`;

const LinkStyled = styled(Link)`
  min-width: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 1ex;
  flex-shrink: 0;
  border-radius: 0.9rem;
  box-sizing: border-box;
  transition: all 150ms ease;
  &:focus-visible {
    outline: 0.2rem solid transparent;
    outline-offset: 0.2rem;
    box-shadow: var(--shadow-xs);
  }
  & > svg {
    flex-shrink: 0;
  }
`;

const NavButton = ({ item, isActive }) => {
  return (
    <Button
      size="lg-icon"
      variant="transparent"
      customStyles={css`
        color: var(--primary);
        flex-direction: column;
        gap: 2px;
      `}>
      <LinkStyled to={item.path}>
        <item.lucidIcon {...mdIcon} />
        {/* <NameButtonStyled>{item.name}</NameButtonStyled> */}
      </LinkStyled>

      {isActive && <SelectedDivStyled />}
    </Button>
  );
};
