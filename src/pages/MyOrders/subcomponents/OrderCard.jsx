import { useContext, useRef, useState } from "react";
import {
  CardContainer,
  DateTag,
  StatusBadge,
  PriceSection,
  Price,
  ItemCount,
  ItemsList,
  DetailsButton,
  ItemRow,
} from "../StylizedTags";
import { CartContext } from "@contexts/CartContext";
import OrderDetails from "./OrderDetails";

const OrderCard = () => {
  const { totalAddedValue, cartProducts, currentOrder } = useContext(CartContext);
  const orderData = {
    orderDate: currentOrder.time,
    status: currentOrder.status,
    totalPrice: totalAddedValue,
    itemCount: cartProducts.length,
    items: [cartProducts[0], cartProducts[1]],
  };

  const [viewDetails, setViewDetails] = useState(false);
  const isDraggingRef = useRef(null);

  const startPositionRef = useRef({ x: 0, y: 0 });
  const DRAG_THRESHOLD = 5;

  const handlePointerDown = (e) => {
    isDraggingRef.current = false;
    startPositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerMove = (e) => {
    if (
      Math.abs(e.clientX - startPositionRef.current.x) > DRAG_THRESHOLD ||
      Math.abs(e.clientY - startPositionRef.current.y) > DRAG_THRESHOLD
    ) {
      isDraggingRef.current = true;
    }
  };

  const handleClick = (e) => {
    if (e.buttom === 2) {
      return;
    }
    if (!isDraggingRef.current) {
      setViewDetails(true);
      isDraggingRef.current = false;
    }
  };

  return (
    <CardContainer>
      <DateTag>{orderData.orderDate}</DateTag>

      <StatusBadge>{orderData.status}</StatusBadge>

      <PriceSection>
        <Price>{orderData.totalPrice}</Price>
        <ItemCount>
          {orderData.itemCount} {orderData.itemCount > 1 ? "Itens" : "Item"}
        </ItemCount>
      </PriceSection>

      <ItemsList>
        {orderData.items.map((item, index) => (
          <ItemRow key={index}>
            <p>{item.items[index].name}</p>
            <p>{item.items[index].quant}</p>
          </ItemRow>
        ))}
      </ItemsList>

      <DetailsButton
        onPointerDown={handlePointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={handleClick}
      >
        Ver detalhes da compra
      </DetailsButton>

      {viewDetails && <OrderDetails />}
    </CardContainer>
  );
};

export default OrderCard;


