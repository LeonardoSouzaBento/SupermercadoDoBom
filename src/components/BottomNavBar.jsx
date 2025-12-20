import { WrapperStyled } from '@/components/ui/bottom-nav-bar/index';
import { mdIcon } from '@/styles/lucideIcons';
import { CartContext } from '@contexts/CartContext';
import { bottomNavBarItems } from '@data/bottomNavBarItems';
import Button from '@ui/button';
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* 

  {
    path: '/meu-carrinho',
    icon: 'shopping_cart',
    lucidIcon: ShoppingCart,
    active: false,
    display: '',
  },*/

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
                <span className="material-symbols-outlined" id="cartIcon">
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
            return (
              <Button
                size="lg-icon"
                variant="primary"
                key={index}
                onClick={() => {
                  if (!isActive) {
                    navigate(item.path);
                  }
                }}>
                <item.lucidIcon {...mdIcon} />
              </Button>
            );
          })}
        </div>
      </div>
      <div id="space-for-bottom-nav-bar" />
    </WrapperStyled>
  );
}
