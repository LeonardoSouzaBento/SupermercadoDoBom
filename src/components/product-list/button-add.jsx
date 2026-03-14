import { useCartContext } from '@/contexts';
import { HomeDivsContext } from "@/contexts/index";
import { Button } from '@ui/button';
import { Icon } from '@ui/icon';
import { Plus } from 'lucide-react';
import { useContext } from 'react';

export default function ButtonAdd({ product, setQuantity }) {
  const { handleQuantityChange } = useCartContext();
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
    <Button id="button-add" variant="secondary" size="icon-sm" onPointerUp={handlePointerUpAdd}>
      <Icon size="xl" Icon={Plus} />
    </Button>
  );
}

