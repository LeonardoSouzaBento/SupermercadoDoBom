import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { VisibilityContext } from "../../contexts/VisibilityContext";
import {
  ContainerStyled,
  DivStyled,
  DivSpanStyled,
  PQuestionStyled,
  DivSimNaoStyled,
  PSimStyled,
  PVoltarStyled,
  DivFeedBackStyled,
  PFeedBackStyled,
  SpanStyled,
} from "./StylizedTagsNavBar";

export default function ConfirmDialog({ setViewConfirm, canHandleClick }) {
  const { setCartProducts } = useContext(CartContext);
  const { seeFeedback, setSeeFeedback } = useContext(VisibilityContext);
  const [heightDiv, setHeightDiv] = useState("163px");
  const [opacityDialog, setOpacityDialog] = useState(false);

  const handleConfirmCancel = (e, action) => {
    if (e.button === 2) {
      return;
    }
    if (action === 1 && canHandleClick) {
      setHeightDiv("105px");
      setSeeFeedback(true);
      setCartProducts([]);

      setTimeout(() => {
        setViewConfirm(false);
        setSeeFeedback(false);
        setHeightDiv("163px");
      }, 2100);
    } else if (action === 0 && canHandleClick) {
      setOpacityDialog(false);
      setTimeout(() => {
        setViewConfirm(false);
      }, 300);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setOpacityDialog(true);
    }, 200);
  }, []);

  return (
    <ContainerStyled
      style={{
        opacity: opacityDialog ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <DivStyled $feedback={seeFeedback} $heightDiv={heightDiv}>
        <DivSpanStyled>
          <SpanStyled
            className="material-symbols-rounded"
            $feedback={seeFeedback}
          >
            {seeFeedback ? "check" : "exclamation"}
          </SpanStyled>

          {seeFeedback == false && (
            <PQuestionStyled>Cancelar a compra?</PQuestionStyled>
          )}
        </DivSpanStyled>

        {/*Botoes de sim ou não*/}
        {seeFeedback === false && (
          <DivSimNaoStyled>
            <PSimStyled
              onPointerDown={(e) => {
                handleConfirmCancel(e, 1);
              }}
            >
              Sim, cancelar
            </PSimStyled>

            <PVoltarStyled
              onPointerDown={(e) => {
                handleConfirmCancel(e, 0);
              }}
            >
              Voltar
            </PVoltarStyled>
          </DivSimNaoStyled>
        )}

        {seeFeedback && (
          <DivFeedBackStyled>
            <PFeedBackStyled>Cancelada!</PFeedBackStyled>
          </DivFeedBackStyled>
        )}
      </DivStyled>
    </ContainerStyled>
  );
}
