import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "./ConfirmDialog";

const FooterStyled = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: transparent;
  position: fixed;
  left: 0;
  bottom: 8px;
  z-index: 2;

  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;

const CartDescStyled = styled.div`
  width: 90%;
  max-width: 400px;
  height: 44px;
  min-height: 44px;
  margin-right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #383d6a;
  border-radius: 22px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color:hsl(234, 30.90%, 28%);
  }

  @media screen and (max-width: 576px) {
    margin-right: 0px;
  }
`;

const DivDeleteAndCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  gap: 10px;
`;

const DivCartStyled = styled.div`
  height: 100%;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpanCartStyled = styled.span`
  color: white;
  font-size: 1.65em;
  font-weight: 300;
  font-variation-settings: "FILL" 1;
`;

const DivDeleteStyled = styled(DivCartStyled)`
  box-sizing: border-box;
  padding-left: 4px;
  background-color: #292e4e;

  &:hover {
    background-color: hsl(255, 35.5%, 18%);
  }
`;

const SpanDeleteStyled = styled.span`
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 12, "opsz" 30;
  color: rgb(255, 255, 255);
  font-size: 1.43em;
  font-weight: 500;
`;

//Divs dos ps
const DivPStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const PPrecoStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  letter-spacing: 0.71px;
  padding-bottom: 2px;
  color: white;

  @media screen and (max-width: 374px) {
    font-size: 1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.05em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.1em;
  }
`;

const PItensStyled = styled(PPrecoStyled)`
  padding-right: 18px;
`;

export default function Footer({ setApplyBlur }) {
  const { totalQuantity, totalValueFormatted } = useContext(CartContext);
  const navigate = useNavigate();
  const [viewConfirm, setViewConfirm] = useState(false);
  const [canHandleClick, setCanHandleClick] = useState(false);

  if (totalQuantity <= 0 && viewConfirm === false) {
    return null;
  }

  if (viewConfirm === false) {
    return (
      <FooterStyled>
        <CartDescStyled
          onPointerDown={() => {
            window.startClickTime = Date.now();
          }}
          onPointerUp={(e) => {
            const duration = Date.now() - window.startClickTime;
            if (duration < 300) {
              setTimeout(() => {
                navigate("/meu-carrinho");
              }, 100);
            }
          }}
        >
          <DivDeleteAndCart>
            <DivDeleteStyled
              onPointerDown={(e) => {
                e.stopPropagation(e);
                setCanHandleClick(false);
                setTimeout(() => setCanHandleClick(true), 200);
                setViewConfirm(true);
                setApplyBlur(true);
              }}
            >
              <SpanDeleteStyled className="material-symbols-outlined">
                delete
              </SpanDeleteStyled>
            </DivDeleteStyled>

            <DivCartStyled>
              <SpanCartStyled className="material-symbols-outlined">
                shopping_cart
              </SpanCartStyled>
            </DivCartStyled>
          </DivDeleteAndCart>

          <DivPStyled>
            <PPrecoStyled>R$ {totalValueFormatted}</PPrecoStyled>
            <PItensStyled>
              {totalQuantity} {totalQuantity == 1 ? "item" : "itens"}
            </PItensStyled>
          </DivPStyled>
        </CartDescStyled>
      </FooterStyled>
    );
  }
  if (viewConfirm) {
    return (
      <ConfirmDialog
        setViewConfirm={setViewConfirm}
        canHandleClick={canHandleClick}
        setApplyBlur={setApplyBlur}
      ></ConfirmDialog>
    );
  }
}
