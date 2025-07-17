import styled, { css } from "styled-components";

export const MainStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;

  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: auto 340px;
    grid-template-rows: auto;
    align-items: flex-start;
    gap: 16px;
    box-sizing: border-box;
    padding: 0px 16px;
    padding-top: 24px;
  }
  @media screen and (min-width: 1201px) {
    grid-template-columns: 950px auto;
  }

  opacity: ${(props) => props.$opacity};
  transition: opacity 0.5s ease;
`;

export const CartSectionStyed = styled.div`
  width: 100%;
  height: 460px;
  padding-bottom: 24px;
  margin: auto;
  border-radius: 0px 0px 16px 16px;
  box-sizing: border-box;
  box-shadow: 0px 3px 3px -2px rgba(41, 46, 117, 0.5),
    3px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13);
  position: relative;
  transition: height 0.15s ease;
  background-color: white;
  overflow: hidden;

  @media screen and (min-width: 385px) and (max-width: 414px) {
    padding-bottom: 12px;
  }
  @media screen and (min-width: 414px) and (max-width: 596px) {
    max-width: 400px;
  }
  @media screen and (min-width: 596px) and (max-width: 768px) {
    max-width: 575px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 48px);
    max-height: 810px;
    border-radius: 16px;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const DivHeadStyled = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  background-color: #383d6a;
  color: white;
  border-radius: 0px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;
  }
`;

export const HHeadStyled = styled.h1`
  width: 100%;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: 400;
  padding-bottom: 2px;
  padding-left: 37px;

  @media screen and (max-width: 385px) {
    font-size: 1.27em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.285em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.29em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.31em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.33em;
  }
`;

export const DivSpanDeleteStyled = styled.div`
  min-width: 56px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: hsl(234, 30.9%, 28%);
  }
`;

export const SpanStyled = styled.span`
  font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 22;

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

export const DivSeeAllStyled = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  position: absolute;
  bottom: -1px;
  left: 0;
  background-color: #ecf0f5;
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

  @media screen and (max-width: 769px) {
    padding-bottom: 56px;
  }

  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const DivContinueStyled = styled.div`
  height: auto;
  width: 100%;
  padding: 24px;
  padding-bottom: 25px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 3px 3px -2px rgba(41, 46, 117, 0.5),
    3px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13);
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 385px) {
    width: calc(100% - 36px);
  }
  @media screen and (min-width: 385px) and (max-width: 414px) {
    width: calc(100% - 48px);
  }
  @media screen and (min-width: 414px) and (max-width: 596px) {
    max-width: 370px;
  }
  @media screen and (min-width: 596px) and (max-width: 768px) {
    max-width: 380px;
  }
  @media screen and (min-width: 769px) {
    width: 320px;
    display: block;
    margin: 0;
  }
`;

export const DivAvisoStyled = styled.div`
  width: 100%;
  height: max-content;
  padding: 16px 18px;
  margin: auto;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #db2c32;
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

export const DivAllValuesStyled = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  margin-bottom: 12px;
`;

export const DivOneValueStyled = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(41, 46, 117, 0.3);
`;

export const PValueStyled = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  cursor: default;
  padding-bottom: 2px;

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
  background-color: ${(props) => (props.$nocontinue ? "#E3E7EC" : "#383d6a")};
  &:hover {
    background-color: ${(props) =>
      !props.$nocontinue ? "hsla(234, 31%, 28%, 1)" : "#C2C6CA"};
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

export const DivAddStyled = styled.div`
  width: 100%;
  margin: auto;
  height: 48px;
  margin-top: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 3px 3px -2px rgba(41, 46, 117, 0.5),
    3px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13);

  cursor: pointer;

  &:hover {
    outline: 1px solid rgba(41, 46, 117, 0.3);
  }
  @media screen and (max-width: 385px) {
    width: calc(100% - 36px);
  }
  @media screen and (min-width: 385px) and (max-width: 414px) {
    width: calc(100% - 48px);
  }
  @media screen and (min-width: 414px) and (max-width: 596px) {
    max-width: 370px;
  }
  @media screen and (min-width: 596px) and (max-width: 768px) {
    max-width: 380px;
  }
  @media screen and (min-width: 769px) {
    order: 2;
    margin: 0;
    width: 320px;
  }
`;

export const PAddStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
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

//caixa de diálogo
export const ContainerDialogStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
`;

export const DivDialogStyled = styled.div`
  width: calc(100% - 16px);
  max-width: 300px;
  padding-bottom: 24px;
  margin-right: 12px;
  margin-top: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
  background-color: white;
  overflow: hidden;
  ${(props) => props.$feedback && "background-color: #488658;"};
  box-shadow: 0px 3px 3px -1px rgba(41, 46, 117, 0.18),
    3px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13);
  transition: height 0.15s ease;
  position: relative;
`;

export const DivToCoverStyled = styled.div`
  width: 100vw;
  height: 100%;
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
  color: #2cdb5a;
  font-weight: 700;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  cursor: default;
`;

export const DivQuestionStyled = styled.div`
  width: 100%;
  height: 56px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PQuestionStyled = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  cursor: default;
  scale: 0.9;
  @media screen and (max-width: 385px) {
    font-size: 1.4em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.41em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.43em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.44em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.445em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.45em;
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
  width: calc(100% - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  color: white;
  background-color: #db2c32;

  &:hover {
    background-color: hsla(358, 71%, 44%, 1);
  }

  ${(props) =>
    props.$voltar &&
    css`
      margin-top: 12px;
      color: black;
      background-color: #ebeff4;
      &:hover {
        background-color: hsla(213, 29%, 86%, 1);
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
