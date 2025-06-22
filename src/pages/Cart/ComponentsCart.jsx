import styled, {css} from "styled-components";

export const MainStyled = styled.div`
  margin: auto;
  position: relative;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    width: calc(100% - 24px);
  }
  @media screen and (min-width: 375px) and (max-width: 768px) {
    width: calc(100% - 32px);
  }
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: auto 350px;
    grid-template-rows: auto;
  }
  @media screen and (min-width: 1201px) {
    grid-template-columns: auto 420px;
  }
  transition: filter 1s ease;
  ${(props) =>
    props.$seeAdressForm &&
    css`
      filter: blur(2.5px);
      &::after {
        content: "";
        height: 100%;
        width: 100%;
        padding: 20px;
        padding-bottom: 0px;
        margin-left: -20px;
        margin-top: -20px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: rgb(240, 240, 240);
        
        @media screen and (min-width: 769px) {
          background-color: rgba(0, 0, 0, 0.28);
        }
      }
    `};
`;

export const CartSectionStyed = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 420px;
  max-height: calc(100vh - 350px);
  margin: auto;
  margin-top: 16px;
  margin-bottom: 32px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgb(220, 220, 220);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border: 1px solid rgb(208, 208, 208);
  border-top: none;
  position: relative;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 320px) and (max-width: 430px) {
    min-height: 360px;
    max-height: 360px;
  }
  @media screen and (min-width: 769px) {
    width: calc(100% - 24px);
    min-height: calc(100vh - 48px);
    max-height: calc(100vh - 48px);
    margin: 0;
    margin-top: 24px;
    margin-left: 24px;
    overflow-y: scroll;
    
  }
`;

export const DivSpanCalcelCart = styled.div`
  width: 38px;
  height: 40px;
  padding-left: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 4px;
  right: 4px;
  border-radius: 8px;
  background-color: rgb(238, 238, 238);
  box-shadow: -2px 2px 4px rgba(93, 93, 93, 0.18);
  cursor: pointer;
`;

export const SpanCalcelCart = styled.span`
  padding-bottom: 1px;
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 22;
  color: rgb(72, 72, 72);

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.7em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.75em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.76em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.77em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.78em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.79em;
  }
`;

export const BoxConfirmCalcel = styled.div`
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

export const DivSpanConfirmCancel = styled(DivSpanCalcelCart)`
  position: relative;
  padding-bottom: 0px;
  margin-bottom: 8px;
`;

export const PConfirmCancelStyled = styled.p`
  font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: 300;
  color: white;
  padding-right: 4px;

  @media screen and (min-width: 320px) and (max-width: 374px) {
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
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  max-width: 100%;
  height: 32px;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.07),
    rgba(0, 0, 0, 0)
  );
  background-size: 100% 100%;
  border-radius: 0px 0px 8px 8px;

  @media screen and (min-width: 769px) {
    width: calc(100% - 24px);
    margin-left: 24px;
  }
`;

export const DivHeadStyled = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
`;

export const PHeadStyled = styled.p`
  width: 100%;
  font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
  font-weight: 300;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.22em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.24em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.26em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.3em;
  }
`;

export const ContainerProductList = styled.div`
  padding: 0px 12px;
`;

export const DivSeeMoreStyled = styled.div`
  height: 42px;
  width: calc(100% - 10px);
  margin-left: 5.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  position: absolute;
  bottom: 5px;
  left: 0;
  background-color: rgb(238, 238, 238);
  box-shadow: 0px 2px 4px rgba(93, 93, 93, 0.2);
  border-radius: 6px 6px 9px 9px;
  border: 1px solid rgb(191, 191, 191);
  border-top: none;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const PSeeMoreStyled = styled.p`
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.9em;

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
  padding-bottom: 24px;

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
  width: 95%;
  max-width: 385px;
  margin: auto;
  height: 40px;
  margin-bottom: 26px;
  padding-bottom: 2px;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(199, 199, 199);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);

  @media screen and (min-width: 769px) {
    width: 100%;
    order: 2;
    margin: 0;
    height: 44px;
    border-radius: 22px;
  }
`;

export const PAddStyled = styled.p`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-weight: 300;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.16em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.2em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.24em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.32em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.4em;
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
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgb(207, 207, 207);
  border-top: none;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.18);

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
  border-radius: 4px;
  padding: 12px 15px;
  box-sizing: border-box;
  background-color: rgb(255, 234, 201);
  border: 1px solid rgb(255, 155, 78);

  @media screen and (min-width: 768px) {
    border-radius: 6px;
  }
`;

export const PAvisoStyled = styled.p`
  font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: rgb(188, 0, 0);

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
  margin-top: 16px;
  padding: 0px 5px;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
`;

export const DivStyled = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
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
  background-color: ${(props) =>
    props.$nocontinue ? "rgb(188, 241, 163)" : "rgb(36, 160, 12)"};
  ${(props) => props.$nocontinue && "border: 1px solid rgb(137, 255, 131);"}
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
  background-color: rgb(240, 240, 240);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.19);
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
