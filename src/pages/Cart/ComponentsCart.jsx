import styled, { css } from "styled-components";

export const MainStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;

  @media screen and (min-width: 385px) and (max-width: 414px) {
    width: calc(100% - 24px);
  }

  @media screen and (max-width: 768px) {
    padding-top: 12px;
  }
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: auto 330px;
    grid-template-rows: 100vh;
    align-items: center;
  }
  @media screen and (min-width: 1201px) {
    grid-template-columns: 950px 330px;
    justify-content: center;
  }

  opacity: ${(props) => props.$opacity};
  transition: opacity 0.5s ease;
`;

export const CartSectionStyed = styled.div`
  width: 100%;
  height: 460px;
  padding-bottom: 18px;
  margin: auto;
  border-radius: 12px;
  background-color: white;
  box-sizing: border-box;
  background-color: #ecf1f6;
  box-shadow: 0px 4px 4px -3px rgba(41, 46, 117, 0.45),
    3px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13);
  position: relative;
  overflow: hidden;
  transition: height 0.15s ease;

  @media screen and (max-width: 385px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 414px) and (max-width: 596px) {
    max-width: 400px;
  }
  @media screen and (min-width: 596px) and (max-width: 768px) {
    max-width: 575px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 19px;
  }

  @media screen and (min-width: 769px) {
    width: calc(100% - 32px);
    height: calc(100vh - 48px);
    max-height: 810px;
    margin: auto;
    overflow-y: scroll;
    border-radius: 12px;
  }

  scrollbar-width: none; /* esconde a barra */
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DivSpanDeleteStyled = styled.div`
  min-width: 44px;
  height: 44px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 7px 4px 4px;
  cursor: pointer;

  &:hover {
    background-color: #e7ecf1;
  }
`;

export const SpanStyled = styled.span`
  font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 22;
  color: #292e4e;

  @media screen and (max-width: 385px) {
    font-size: 1.55em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.58em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.59em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.6em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.61em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.62em;
  }
`;

export const ContainerDialogStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 4;
`;

export const DivDialogStyled = styled.div`
  width: calc(100% - 16px);
  height: 180px;
  max-width: 244px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  z-index: 4;
  background-color: #db2c32;
  ${(props) => props.$feedback && "background-color: rgba(18, 111, 0, 1);"};
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
  transition: height 0.15s ease;
  position: relative;
`;

export const DivToCoverStyled = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: #ebeff4;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const SpanDialogStyled = styled.span`
  font-size: 4.05em;
  padding: 5px;
  margin-bottom: 12px;
  color: rgb(99, 154, 48);
  font-weight: 700;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  cursor: default;
`;

export const PQuestionStyled = styled.p`
  width: 100%;
  margin-bottom: 24px;
  margin-top: 18px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-align: center;
  cursor: default;
  color: white;

  @media screen and (max-width: 385px) {
    font-size: 1.27em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.296em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.31em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.32em;
  }
`;

export const DivSimNaoStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
`;

export const DivPYesNoStyled = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  color: white;
  background-color: #8f1d20;

  &:hover {
    background-color: #75171b;
  }

  ${(props) =>
    props.$voltar &&
    css`
      margin-top: 12px;
      color: black;
      background-color: rgb(255, 255, 255);
      &:hover {
        background-color: #ebeff4;
      }
    `};
`;

export const PYesNoStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding-bottom: 2px;
  text-align: center;
  letter-spacing: 0.72px;
  border-radius: 4px;

  @media screen and (max-width: 385px) {
    font-size: 1.17em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.19em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.22em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.225em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.227em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.23em;
  }
`;

export const ShadowStyled = styled.div`
  width: 100%;
  height: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.01),
    rgba(0, 0, 0, 0)
  );
  background-size: 100% 100%;
  border-radius: 0px 0px 10px 10px;

  @media screen and (min-width: 769px) {
    width: calc(100% - 31px);
    margin-left: 15px;
  }
  @media screen and (min-width: 993px) {
    display: none;
  }
`;

export const DivHeadStyled = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 7px;
  box-sizing: border-box;
  margin-bottom: 16px;
  position: relative;
  border-bottom: 1px solid rgba(41, 46, 117, 0.3);
  background-color: #ecf1f6;
  z-index: 2;
  @media screen and (min-width: 769px) {
    position: sticky;
    top: 0;
    left: 0;
  }
`;

export const HHeadStyled = styled.h1`
  width: 100%;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: 600;
  padding-bottom: 2px;
  padding-left: 37px;
  color: #292e4e;

  @media screen and (max-width: 385px) {
    font-size: 1.27em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.296em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.31em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.32em;
  }
`;

export const ContainerProductList = styled.div`
  padding: 0px 12px;
  @media screen and (max-width: 414px) {
    padding: 0px;
  }
`;

export const DivSeeAllStyled = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  position: absolute;
  bottom: -1px;
  left: 0;
  background-color: #ecf1f6;
  box-shadow: 0px -1.5px 4px rgba(41, 46, 117, 0.15);
  z-index: 2;
  cursor: pointer;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const PSeeAllStyled = styled.p`
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.93em;
  user-select: none;

  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 0.94em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 0.95em;
  }
`;

export const SpanSeeAllStyled = styled.span`
  font-weight: 400;
  font-size: 1.65em;
  padding-top: 2px;

  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.68em;
    padding-top: 2.5px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.7em;
    padding-top: 3px;
  }
`;

/*seção Finalizar*/
export const FinishSectionStyled = styled.div`
  width: 100%;
  margin: auto;
  padding-bottom: 48px;

  @media screen and (min-width: 769px) {
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-bottom: 0px;
  }
`;

export const DivContinueStyled = styled.div`
  height: auto;
  width: 100%;
  padding: 18px 12px;
  padding-bottom: 24px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 4px -3px rgba(41, 46, 117, 0.45),
    3px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13);
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 385px) {
    width: calc(100% - 36px);
  }
  @media screen and (min-width: 385px) and (max-width: 414px) {
    width: calc(100% - 20px);
  }
  @media screen and (min-width: 414px) and (max-width: 596px) {
    max-width: 370px;
  }
  @media screen and (min-width: 596px) and (max-width: 768px) {
    max-width: 400px;
  }
  @media screen and (min-width: 769px) {
    display: block;
    margin: 0;
  }
`;

export const DivAvisoStyled = styled.div`
  width: 100%;
  height: max-content;
  margin: auto;
  display: flex;
  align-items: center;
  border-radius: 3px;
  padding: 15px 18px;
  box-sizing: border-box;
  background-color: hsl(358, 71.5%, 49%);
  position: relative;
  overflow: hidden;
  scale: ${(props) => props.$scale};
  transition: scale 0.3s ease;
  will-change: transform;
`;

export const PAvisoStyled = styled.p`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: white;

  @media screen and (max-width: 375px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.19em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.195em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.2em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.21em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.22em;
  }
`;

export const DivValueStyled = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 22px;
  margin-bottom: 8px;
  padding: 0px 5px;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
`;

export const DivStyled = styled.div`
  width: 100%;
  height: 38px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const PValueStyled = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  cursor: default;

  @media screen and (max-width: 385px) {
    font-size: 1.08em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.09em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.152em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.122em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.132em;
  }
`;

export const DivPContinueStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.08s ease;
  background-color: ${(props) =>
    props.$nocontinue ? "hsl(158, 83.30%, 57.60%)" : "rgb(21, 128, 0)"};
  &:hover {
    background-color: ${(props) =>
      !props.$nocontinue ? "rgba(18, 111, 0, 1)" : "hsl(158, 100%, 62%)"};
  }
`;

export const PContinueStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding-bottom: 2px;
  cursor: pointer;
  color: white;
  @media screen and (max-width: 385px) {
    font-size: 1.17em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.19em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.22em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.225em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.227em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.23em;
  }
`;

//botão adicionar
export const DivAddStyled = styled.div`
  width: 100%;
  margin: auto;
  height: 40px;
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 4px -3px rgba(41, 46, 117, 0.45),
    3px -3px 3px -2px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13);
  cursor: pointer;

  &:hover {
    outline: 1px solid rgba(41, 46, 117, 0.3);
  }
  @media screen and (max-width: 385px) {
    width: calc(100% - 36px);
  }
  @media screen and (min-width: 385px) and (max-width: 414px) {
    width: calc(100% - 20px);
  }
  @media screen and (min-width: 414px) and (max-width: 596px) {
    max-width: 370px;
  }
  @media screen and (min-width: 596px) and (max-width: 768px) {
    max-width: 400px;
  }
  @media screen and (min-width: 769px) {
    order: 2;
    margin: 0;
  }
`;

export const PAddStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #292e4e;
  @media screen and (max-width: 385px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.2em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.205em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.206em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.207em;
  }
`;
