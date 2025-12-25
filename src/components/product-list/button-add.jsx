import { mdIcon } from '@/styles/lucideIcons';
import { CartContext } from '@contexts/CartContext';
import { HomeDivsContext } from '@contexts/HomeDivsContext';
import Button from '@ui/button';
import { Plus } from 'lucide-react';
import { useContext } from 'react';
import { css } from 'styled-components';

export const ButtonAdd = ({ product, setQuantity }) => {
  const { handleQuantityChange } = useContext(CartContext);
  const { isDraggingRef } = useContext(HomeDivsContext);
  function handlePointerUpAdd(e) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    if (!isDraggingRef.current) {
      setQuantity(1);
      handleQuantityChange(product, true);
      isDraggingRef.current = false;
    }
  }

  return (
    <Button
      id="button-add"
      variant="outline"
      size="sm-icon"
      customStyles={css`
        color: var(--primary);
        background-color: var(--white-foreground) !important;
      `}
      onPointerUp={handlePointerUpAdd}>
      <Plus {...mdIcon}/>
    </Button>
  );
};
