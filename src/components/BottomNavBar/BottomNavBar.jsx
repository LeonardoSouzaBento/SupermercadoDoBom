import { CartContext } from '@contexts/CartContext';
import Button from '@ui/button';
import { House, ScrollText, Search, ShoppingCart, User } from 'lucide-react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CartInfo from './cart-info';

const navItems = [
  {
    path: '/meu-carrinho',
    icon: 'shopping_cart',
    lucidIcon: ShoppingCart,
    active: false,
    display: '',
  },
  {
    path: '/meus-pedidos',
    icon: 'contract',
    lucidIcon: ScrollText,
    active: false,
  },
  {
    path: '/minha-conta',
    icon: 'person',
    lucidIcon: User,
    active: false,
  },
  {
    path: '/buscar-produtos',
    icon: 'search',
    lucidIcon: Search,
    active: false,
  },
  {
    path: '/',
    icon: 'home',
    lucidIcon: House,
    active: false,
  },
];

const WrapperStyled = styled.div`
  & > div:first-child {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;
    background-color: transparent;
    position: fixed;
    left: 0;
    bottom: 0.6rem;
    z-index: 4;

    @media screen and (max-width: 576px) {
      justify-content: center;
    }
    & > div:first-child {
      width: calc(100% - 16px);
      max-width: 42rem;
      height: 5.6rem;
      padding: 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-radius: 1.2rem;
      background-color: var(--primary);
      background-image: linear-gradient(45deg, var(--primary-hover), var(--primary));
      box-shadow: var(--shadow-md);

      @media screen and (min-width: 577px) {
        margin-right: 0.8rem;
      }
    }
  }
  /* espaço para o navbar */
  & > div:last-child {
    height: 7.2rem;
    width: 100%;
    position: relative;
  }
`;

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { quantityItens } = useContext(CartContext);

  return (
    <WrapperStyled>
      <div>
        <div>
          {quantityItens >= 1 && <CartInfo />}
          {navItems.map((item, index) => {
            const isActive = item.path === location.pathname;
            const isCartItemHidden = item.path === '/meu-carrinho' && quantityItens >= 1;
            return (
              <Button
                size="icon"
                variant="primary"
                key={index}
                className={`${isActive ? 'active-button' : ''} ${
                  isCartItemHidden ? 'button-hide' : ''
                }`}
                onClick={() => {
                  if (!isActive) {
                    navigate(item.path);
                  }
                }}>
                <item.lucidIcon strokeWidth={1.8} color="white" size={24} />
              </Button>
            );
          })}
        </div>
      </div>
      <div />
    </WrapperStyled>
  );
}
