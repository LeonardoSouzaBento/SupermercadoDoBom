import { useContext, useState } from "react";
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
  height: 60px;
  background-color: transparent;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;
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
  background-color: #C90C12;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 577px) and (max-width: 992px) {
    max-width: 440px;
  }
  @media screen and (min-width: 993px) {
    max-width: 470px;
  }
`;

const DivCancelECart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  gap: 10px;
  padding-left: 4px;
`;

const DivCartStyled = styled.div`
  border-radius: 50%;
  height: 100%;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivCancelStyled = styled(DivCartStyled)`
  height: 36px;
  width: 36px;
  border-radius: 4px;
  background-color: #630609;
`;

const SpanCancelStyled = styled.span`
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 12, "opsz" 30;
  color: rgb(255, 255, 255);
  font-size: 1.45em;
  font-weight: 500;
`;

const DivSetaStyled = styled(DivCartStyled)`
  width: fit-content;
  margin-left: -4px;
`;

const DivCartSetaStyled = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  gap: 0px;
`;

const SpanCartStyled = styled.span`
  color: white;
  font-size: 1.74em;
  font-weight: 500;
  font-variation-settings: "FILL" 1;

  @media screen and (max-width: 374px) {
    font-size: 1.6em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.7em;
  }
`;

const SpanSetaStyled = styled(SpanCartStyled)`
  @media screen and (max-width: 374px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.6em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.7em;
  }
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
  font-family: "Lato", Arial, Helvetica, sans-serif;
  font-weight: 700;
  letter-spacing: 0.71px;
  padding-bottom: 2px;
  color: white;

  @media screen and (max-width: 374px) {
    font-size: 1.14em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.18em;
  }
`;

const PItensStyled = styled(PPrecoStyled)`
  padding-right: 18px;
`;

export default function Footer() {
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
          <DivCancelECart>
            <DivCancelStyled
              onPointerDown={(e) => {
                e.stopPropagation(e);
                setCanHandleClick(false);
                setTimeout(() => setCanHandleClick(true), 200);
                setViewConfirm(true);
              }}
            >
              <SpanCancelStyled className="material-symbols-outlined">
                delete
              </SpanCancelStyled>
            </DivCancelStyled>

            <DivCartSetaStyled>
              <DivCartStyled>
                <SpanCartStyled className="material-symbols-outlined">
                  shopping_cart
                </SpanCartStyled>
              </DivCartStyled>
              <DivSetaStyled>
                <SpanSetaStyled className="material-symbols-outlined">
                  chevron_right
                </SpanSetaStyled>
              </DivSetaStyled>
            </DivCartSetaStyled>
          </DivCancelECart>

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
      ></ConfirmDialog>
    );
  }
}
