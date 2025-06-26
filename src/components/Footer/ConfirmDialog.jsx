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
  background-color: rgba(0, 0, 0, 0.12);
`;

const DivStyled = styled.div`
  width: calc(100% - 16px);
  max-width: 400px;
  height: ${props => props.$heightDiv};
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
  background-image: linear-gradient(
    to bottom,
    hsl(12, 95%, 44%),
    hsl(12, 95%, 62%)
  );
  background-size: 100% 50%;
  background-position: center top;
  background-repeat: no-repeat;
  background-color: hsl(12, 95%, 62%);
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  transition: height 0.15s ease;
  ${(props) => props.$feedback && "background-size: 0% 0%;"};
  ${(props) => props.$feedback && "background-color: hsl(12, 95%, 59.5%);"}

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
  color: rgb(232, 67, 67);
  font-weight: 600;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.09);
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
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1.15em;
  text-align: center;
  cursor: default;
  color: white;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.24em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.25em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.26em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.27em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.3em;
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

//esconder
const DivSimNaoStyled = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  gap: 12px;
`;

const GenericPStyled = styled.p`
  width: 100%;
  font-family: "Quicksand", Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding: 12px 0px;
  box-sizing: border-box;
  text-align: center;
  letter-spacing: 0.72px;
  border-radius: 4px;
  cursor: default;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.03em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.05em;
  }
`;

const PSimStyled = styled(GenericPStyled)`
  background-color: rgb(184, 0, 0);
  color: white;
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.105em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.11em;
  }
  transition: background-color 0.1s ease;

  &:hover {
    background-color: rgb(168, 0, 0);
  }
`;

const PVoltarStyled = styled(GenericPStyled)`
  background-color: rgb(255, 255, 255);
  font-weight: 500;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

export default function ConfirmDialog({
  setViewConfirm,
  canHandleClick,
}) {
  const { setCartProducts } = useContext(CartContext);
  const { viewFeedback, setViewFeedback } = useContext(ViewContext);
  const [heightDiv, setHeightDiv] = useState('163px');

  const handleConfirmCancel = (action) => {
    if (action === 1 && canHandleClick) {
      setHeightDiv('105px');
      setViewFeedback(true);
      setCartProducts([]);

      setTimeout(() => {
        setViewConfirm(false);
        setViewFeedback(false);
        setHeightDiv('163px')
      }, 2100);
    }
    else if (action === 0 && canHandleClick) {
      setViewConfirm(false);
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
