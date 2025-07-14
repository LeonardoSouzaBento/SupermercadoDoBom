import styled, { css } from "styled-components";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext";
import { VisibilityContext } from "../VisibilityContext";

const ContainerStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.15);
`;

const DivStyled = styled.div`
  width: calc(100% - 16px);
  max-width: 400px;
  height: ${(props) => props.$heightDiv};
  padding: 24px 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  position: absolute;
  right: 8px;
  bottom: 8px;
  background-color: #db2c32;
  /* box-shadow: 0px -10px 30px rgba(41, 46, 117, 0.24); */
  transition: height 0.15s ease;
  ${(props) => props.$feedback && "background-size: 0% 0%;"};

  @media screen and (max-width: 450px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

const DivSpanStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
  position: relative;
`;

const SpanStyled = styled.span`
  font-size: 3.7em;
  padding: 5px;
  color: #c2272c;
  font-weight: 700;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 0px 15px 30px rgba(41, 46, 117, 0.09);
  position: absolute;
  transform: translateY(-85%);
  z-index: 1;
  cursor: default;
  ${(props) => props.$feedback && "color: rgb(99, 154, 48);"};
  ${(props) => props.$feedback && "scale: 0.9;"};
`;

const PQuestionStyled = styled.p`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 14px;
  margin-top: 10px;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: center;
  cursor: default;
  color: white;

  @media screen and (max-width: 374px) {
    font-size: 1.35em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.37em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.38em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.39em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.4em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.41em;
  }
`;

const DivSimNaoStyled = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  gap: 12px;
`;

const PSimStyled = styled.p`
  width: 100%;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding: 12.5px 0px;
  padding-bottom: 14.5px;
  box-sizing: border-box;
  text-align: center;
  letter-spacing: 0.72px;
  border-radius: 8px;
  cursor: default;
  background-color: #8f1d20;
  color: white;

  &:hover {
    background-color: #75171b;
  }
  transition: background-color 0.1s ease;
  @media screen and (max-width: 374px) {
    font-size: 1.05em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.06em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.07em;
  }
`;

const PVoltarStyled = styled(PSimStyled)`
  color: black;
  background-color: rgb(255, 255, 255);
  &:hover {
    background-color: #ebeff4;
  }
  text-shadow: 0.2px 0.2px 0px black;
`;

const DivFeedBackStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const PFeedBackStyled = styled(PQuestionStyled)`
  color: white;
  scale: 1.19;
  padding: 6px 0px;
  padding-top: 8px;
`;

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
