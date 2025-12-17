import React from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "@contexts/CartContext";
import { useContext } from "react";
import styled from "styled-components";
import { PricePStyled } from "@components/Product/ProductItem&List/StylizedTags";

const DivCartInfoStyled = styled.div`
  height: 4.4rem;
  width: max-content;
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-radius: 0.8rem;
  color: var(--white-foreground);
  background-color: var(--secondary);

  &:hover {
    background-color: var(--secondary-hover);
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & span {
    font-variation-settings: "FILL" 1, "wght" 350, "GRAD" 12, "opsz" 30;
    
    padding-top: 0.2rem;
  }
  & > p {
    scale: 1.03;
    padding-bottom: 0.2rem;
    letter-spacing: 0.75px;
    font-weight: 450;
  }
`;

const CartInfo = () => {
  const navigate = useNavigate();
  const { totalValueFormatted } = useContext(CartContext);

  return (
    <DivCartInfoStyled
      onClick={() => {
        navigate("/meu-carrinho");
      }}
    >
      <div>
        <span className="material-symbols-outlined" id="cartIcon">
          shopping_cart
        </span>
      </div>
      <PricePStyled>R$ {totalValueFormatted}</PricePStyled>
    </DivCartInfoStyled>
  );
};

export default CartInfo;


