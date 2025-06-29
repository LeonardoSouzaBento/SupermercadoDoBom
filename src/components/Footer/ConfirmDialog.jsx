import styled, { css } from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { ViewContext } from "../viewContext";

const ContainerStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 4;
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
  border-radius: 8px;
  position: absolute;
  right: 8px;
  bottom: 8px;
  background-color: #DB2C32;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 1);
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
  color: #C2272C;
  font-weight: 600;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
  position: absolute;
  transform: translateY(-90%);
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
  font-size: 1.15em;
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
    font-size: 1.40em;
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
  font-weight: 600;
  padding: 11px 0px;
  padding-bottom: 13px;
  box-sizing: border-box;
  text-align: center;
  letter-spacing: 0.72px;
  border-radius: 4px;
  cursor: default;
  background-color: #8F1D20;
  color: white;

  &:hover {
    background-color: #75171B;
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
    background-color: rgb(230, 230, 230);
  }
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


export default function ConfirmDialog({ setViewConfirm, canHandleClick, setApplyBlur }) {
  const { setCartProducts } = useContext(CartContext);
  const { viewFeedback, setViewFeedback } = useContext(ViewContext);
  const [heightDiv, setHeightDiv] = useState("163px");

  const handleConfirmCancel = (action) => {
    if (action === 1 && canHandleClick) {
      setHeightDiv("105px");
      setViewFeedback(true);
      setCartProducts([]);

      setTimeout(() => {
        setViewConfirm(false);
        setViewFeedback(false);
        setApplyBlur(false);
        setHeightDiv("163px");
      }, 2100);
    } else if (action === 0 && canHandleClick) {
      setViewConfirm(false);
      setApplyBlur(false);
    }
  };

  return (
    <ContainerStyled>
      <DivStyled $feedback={viewFeedback} $heightDiv={heightDiv}>
        <DivSpanStyled>
          <SpanStyled
            className="material-symbols-outlined"
            $feedback={viewFeedback}
          >
            {viewFeedback ? "check" : "exclamation"}
          </SpanStyled>

          {viewFeedback == false && (
            <PQuestionStyled>Cancelar a compra?</PQuestionStyled>
          )}
        </DivSpanStyled>

        {/*Botoes de sim ou não*/}
        {viewFeedback === false && (
          <DivSimNaoStyled>
            <PSimStyled
              onPointerDown={() => {
                handleConfirmCancel(1);
              }}
            >
              Sim, cancelar
            </PSimStyled>

            <PVoltarStyled
              onPointerDown={() => {
                handleConfirmCancel(0);
              }}
            >
              Voltar
            </PVoltarStyled>
          </DivSimNaoStyled>
        )}

        {viewFeedback && (
          <DivFeedBackStyled>
            <PFeedBackStyled>Cancelada!</PFeedBackStyled>
          </DivFeedBackStyled>
        )}
      </DivStyled>
    </ContainerStyled>
  );
}
