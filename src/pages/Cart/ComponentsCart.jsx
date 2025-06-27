import styled from "styled-components";

export const MainStyled = styled.div`
  margin: auto;
  position: relative;
  width: 100%;
  padding-top: 16px;

  @media screen and (max-width: 430px) {
    width: calc(100% - 12px);
  }
  @media screen and (min-width: 430px) and (max-width: 768px) {
    width: calc(100% - 36px);
  }

  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: auto 330px;
    grid-template-rows: 100vh;
    align-items: center;
    padding-top: 0px;
  }
  @media screen and (min-width: 1201px) {
    grid-template-columns: 950px 330px;
    justify-content: center;
  }
  @media screen and (max-width: 430px) {
    transition: transform 0.25s ease;
    transform: translateX(${(props) => props.$translate}%);
  }
  @media screen and (min-width: 430px) {
    opacity: ${(props) => props.$opacity};
    transition: opacity 0.5s ease;
  }
`;

export const CartSectionStyed = styled.div`
  width: 100%;
  max-width: 894px;
  height: 460px;
  margin: auto;
  border-radius: 12px;
  background-color: white;
  box-sizing: border-box;
  background-color: rgb(250, 250, 250);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3), 0px -1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow-y: hidden;

  @media screen and (max-width: 992px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
  /*Estilo da barra*/
  @media screen and (min-width: 993px) {
    &::-webkit-scrollbar-track {
      background: rgb(250, 250, 250); /* cor fundo */
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(235, 235, 235); /* cor botão */
      border-radius: 6px;
    }
    scrollbar-width: thin; /* Opções: auto | thin | none */
    scrollbar-color: hsl(0, 0%, 78%) rgb(250, 250, 250); /* botão | fundo */
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 769px) {
    width: calc(100% - 32px);
    height: calc(100vh - 48px);
    max-height: 810px;
    margin: auto;
    overflow-y: scroll;
    border-radius: 14px;
  }
`;

export const DivSpanStyled = styled.div`
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3px;
  right: 3px;
  border-radius: 4px 10px 4px 4px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 1.5px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    border-radius: 4px 12px 4px 4px;
  }
  @media screen and (min-width: 993px) {
    border-radius: 4px;
  }
`;

export const SpanStyled = styled.span`
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 22;
  color: rgb(38, 0, 0);

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.67em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.73em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.74em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.75em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.76em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.77em;
  }
`;

export const BoxConfirmCancel = styled.div`
  width: 100%;
  height: 52px;
  padding-right: 2px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 8px 8px 0px 0px;
  background-color: #e36140;
  ${(props) => props.$viewFeedback && "background-color: rgb(36, 160, 12);"};
  ${(props) => props.$viewFeedback && "padding-right: 16px;"};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`;

export const DivSpanStyled2 = styled(DivSpanStyled)`
  position: relative;
  padding-bottom: 0px;
  margin-bottom: 8px;
  ${(props) => props.$uniqueBorderRadius && "border-radius: 4px;"};
`;

export const PConfirmCancelStyled = styled.p`
  font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: 300;
  color: white;
  padding-right: 8px;

  @media screen and (max-width: 374px) {
    font-size: 1.23em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.285em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.305em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.315em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.335em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.355em;
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
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  position: relative;
  border-radius: 12px 12px 0px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.17);
`;

export const PHeadStyled = styled.p`
  width: 100%;
  font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
  color: rgb(27, 27, 27);
  text-align: center;
  font-weight: 300;

  @media screen and (max-width: 374px) {
    font-size: 1.23em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.31em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.34em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.37em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.4em;
  }
`;

export const ContainerProductList = styled.div`
  padding: 0px 12px;
  @media screen and (max-width: 400px) {
    padding: 0px;
  }
`;

export const DivSeeMoreStyled = styled.div`
  height: 42px;
  /* width: calc(100% - 16px); */
  width: 100%;
  /* margin-left: 7.5px; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgb(245, 245, 245);
  box-shadow: 0px -1.5px 3px rgba(0, 0, 0, 0.25);
  border: 1px solid rgb(191, 191, 191);
  border-top: none;
  z-index: 2;
  cursor: pointer;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const PSeeMoreStyled = styled.p`
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.9em;
  user-select: none;

  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 0.92em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 0.94em;
  }
`;

export const SpanSeeAllStyled = styled.span`
  font-weight: 300;
  font-size: 1.65em;
  padding-top: 2px;

  @media screen and (min-width: 375px) and (max-width: 576px) {
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
  padding-bottom: 40px;

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

//botão adicionar
export const DivAddStyled = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  height: 44px;
  margin-top: 26px;
  padding-bottom: 2px;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
  background-color: rgb(250, 250, 250);
  box-shadow: 0px 2.5px 4px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 769px) {
    order: 2;
    margin: 0;
    height: 44px;
  }
`;

export const PAddStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.16em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.17em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.19em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.2em;
  }
`;

export const ContainerStyled = styled.div`
  height: auto;
  width: 100%;
  max-width: 400px;
  padding: 18px 12px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  background-color: rgb(250, 250, 250);
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 769px) {
    display: block;
    margin: 0;
    padding-top: 24px;
    padding-bottom: 28px;
    border-radius: 7px;
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
  background-color: #d04f32;
`;

export const PAvisoStyled = styled.p`
  font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: white;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.09em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.115em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.16em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.165em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.17em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.17em;
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
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  cursor: default;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.08em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
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

export const DivContinueStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.08s ease;
  background-color: ${(props) => (props.$nocontinue ? " #39EDAC" : " #7DB42B")};
  &:hover {
    background-color: ${(props) => !props.$nocontinue && "rgb(23, 138, 0)"};
  }
`;

export const PContinueStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding-bottom: 2px;
  cursor: pointer;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.2em;
  }
`;

export const DivMsgVoidCart = styled.div`
  width: 340px;
  padding: 9px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: rgb(245, 245, 245);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.24);
  border-radius: 9px;
`;

export const BlurDivStyled = styled.div`
  height: 340px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 4px;
`;

export const ImgVoidCartStyled = styled.img`
  width: 290px;
  height: 290px;
  position: relative;
  z-index: 2;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.23);
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
