import { useContext } from "react";
import { CartContext } from "@contexts/CartContext";
import { HomeDivsContext } from "@contexts/HomeDivsContext";
import Button from "@ui/button";
import { Plus } from "lucide-react";
import { mdIcon, smIcon } from "@/styles/lucideIcons";

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
    <Button id="button-add" variant="primary" size="sm-icon" onPointerUp={handlePointerUpAdd}>
      <Plus {...smIcon}/>
    </Button>
  );
};
