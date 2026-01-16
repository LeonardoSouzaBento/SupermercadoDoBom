import { CartContext } from '@contexts/CartContext';
import { HomeDivsContext } from '@contexts/HomeDivsContext';
import { Button } from '@ui/button';
import { Icon } from '@ui/icon';
import { Plus } from 'lucide-react';
import { useContext } from 'react';

export default function ButtonAdd({ product, setQuantity }) {
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
    <Button id="button-add" variant="secondary" size="sm-icon" onPointerUp={handlePointerUpAdd}>
      <Icon size="xl" LucideIcon={Plus} />
    </Button>
  );
}
