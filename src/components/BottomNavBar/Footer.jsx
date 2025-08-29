import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "./ConfirmDialog";
import {
  PPrecoStyled,
  FooterStyled,
  CartDescStyled,
  DivDeleteAndCart,
  DivCartStyled,
  SpanCartStyled,
  DivDeleteStyled,
  SpanDeleteStyled,
  DivPStyled,
  PItensStyled,
} from "./StylizedTagsNavBar";

export default function Footer() {
  const { quantityItens, totalValueFormatted } = useContext(CartContext);
  const navigate = useNavigate();
  const [viewConfirm, setViewConfirm] = useState(false);
  const [canHandleClick, setCanHandleClick] = useState(false);

  if (quantityItens <= 0 && viewConfirm === false) {
    return null;
  }

  if (viewConfirm === false) {
    return (
      <FooterStyled>
        <CartDescStyled
          onPointerDown={(e) => {
            if (e.button === 2) {
              return;
            }
            window.startClickTime = Date.now();
          }}
          onPointerUp={(e) => {
            if (e.button === 2) {
              return;
            }
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
                if (e.button === 2) {
                  return;
                }
                e.stopPropagation(e);
                setCanHandleClick(false);
                setTimeout(() => setCanHandleClick(true), 200);
                setViewConfirm(true);
              }}
            >
              <SpanDeleteStyled className="material-symbols-rounded">
                delete
              </SpanDeleteStyled>
            </DivDeleteStyled>

            <DivCartStyled>
              <SpanCartStyled className="material-symbols-rounded">
                shopping_cart
              </SpanCartStyled>
            </DivCartStyled>
          </DivDeleteAndCart>

          <DivPStyled>
            <PPrecoStyled>R$ {totalValueFormatted}</PPrecoStyled>
            <PItensStyled>
              {quantityItens} {quantityItens == 1 ? "item" : "itens"}
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
