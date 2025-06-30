import styled from "styled-components";

export const MainStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
  filter: ${(props) => (props.$applyBlur ? "blur(2.5px)" : "blur(0px)")};

  @media screen and (min-width: 385px) and (max-width: 414px) {
    width: calc(100% - 24px);
  }

  @media screen and (max-width: 768px) {
    padding-top: 18px;
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
  margin: auto;
  border-radius: 12px 12px 20px 20px;
  background-color: white;
  box-sizing: border-box;
  background-color: #ecf1f6;
  box-shadow: 0px 6px 6px -6px rgba(41, 46, 117, 0.89),
    6px 0px 6px -6px rgba(41, 46, 117, 0.44),
    -6px 0px 6px -6px rgba(41, 46, 117, 0.44),
    0px -3px 3px -2px rgba(41, 46, 117, 0.14);
  position: relative;
  overflow: hidden;
  transition: height 0.2s ease;

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
    margin-bottom: 24px;
  }

  @media screen and (max-width: 992px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (min-width: 769px) {
    width: calc(100% - 32px);
    height: calc(100vh - 48px);
    max-height: 810px;
    margin: auto;
    overflow-y: scroll;
    border-radius: 14px;
    padding-bottom: 18px;
  }
  /*Estilo da barra*/
  @media screen and (min-width: 993px) {
    max-width: 894px;
    &::-webkit-scrollbar-track {
      background-color: #ecf1f6;
    }

    &::-webkit-scrollbar-thumb {
      background: #abafb3; /* cor botão */
      border-radius: 6px;
    }
    scrollbar-width: thin; /* Opções: auto | thin | none */
    scrollbar-color: #abafb3 #ecf1f6; /* botão | fundo */
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
  top: 6px;
  right: 9px;
  border-radius: 4px;
  background-color: hsl(207, 33%, 91%);
  color: #383d6a;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 22;

  @media screen and (max-width: 385px) {
    font-size: 1.55em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.59em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.63em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.67em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.71em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.75em;
  }
`;

export const BoxConfirmCancel = styled.div`
  width: 100%;
  height: 50px;
  padding-right: 2px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 8px 8px 0px 0px;
  background-color: #db2c32;
  ${(props) => props.$viewFeedback && "background-color: rgb(21, 128, 0);"};
  ${(props) => props.$viewFeedback && "padding-right: 16px;"};
`;

export const DivSpanStyled2 = styled(DivSpanStyled)`
  height: 35px;
  width: 35px;
  position: relative;
  padding-bottom: 0px;
  margin-bottom: 12px;
  background-color: white;
  ${(props) => props.$uniqueBorderRadius && "border-radius: 4px;"};
  color: black;
`;

export const PConfirmCancelStyled = styled.p`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: 500;
  color: white;
  padding-right: 8px;

  @media screen and (max-width: 385px) {
    font-size: 1.23em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
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
  margin-bottom: 16px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  color: #212223;
  background-color: #ecf1f6;
  z-index: 1;
  @media screen and (min-width: 769px) {
    position: sticky;
    top: 0;
    left: 0;
  }
`;

export const PHeadStyled = styled.p`
  width: 100%;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: 500;
  padding-bottom: 2px;
  color: #292e4e;

  @media screen and (max-width: 385px) {
    font-size: 1.22em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.24em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.26em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.31em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.33em;
  }
`;

export const ContainerProductList = styled.div`
  padding: 0px 12px;
  @media screen and (max-width: 414px) {
    padding: 0px;
  }
`;

export const DivSeeAllStyled = styled.div`
  height: 44px;
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
  font-weight: 500;
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
  font-weight: 300;
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
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 4px -3px rgba(41, 46, 117, 0.6);

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
  background-color: hsl(358, 71.5%, 49%);
  position: relative;
  overflow: hidden;
  scale: ${(props) => props.$scale};
  transition: scale 0.3s ease;
  will-change: transform;
`;

export const PAvisoStyled = styled.p`
  font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: white;
  z-index: 1;

  @media screen and (max-width: 385px) {
    font-size: 1.09em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
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
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.08s ease;
  background-color: ${(props) =>
    props.$nocontinue ? "hsl(158, 83.30%, 57.60%)" : "rgb(21, 128, 0)"};
  &:hover {
    background-color: ${(props) => !props.$nocontinue ? "rgb(17, 103, 0)": "hsl(158, 100.00%, 62.20%)"};
  }
`;

export const PContinueStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding-bottom: 2px;
  cursor: pointer;
  color: white;
  @media screen and (max-width: 385px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.2em;
  }
`;

//botão adicionar
export const DivAddStyled = styled.div`
  width: 100%;
  max-width: 392px;
  margin: auto;
  height: 42px;
  margin-top: 26px;
  padding-bottom: 2px;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 4px -3px rgba(41, 46, 117, 0.6);
  cursor: pointer;

  &:hover {
    outline: 1px solid rgba(0, 0, 0, 0.12);
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
  font-weight: 500;
  @media screen and (max-width: 385px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
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
  color: black;
  box-shadow: 0px 3px 6px rgba(41, 46, 117, 0.28);
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
