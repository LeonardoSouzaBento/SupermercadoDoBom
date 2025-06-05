import styled from "styled-components";

export const MainStyled = styled.main`
  margin: auto;
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
`;

export const CartSectionStyed = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: calc(100vh - 350px);
  max-height: calc(100vh - 350px);
  margin: auto;
  margin-top: 24px;
  margin-bottom: 32px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgb(225, 225, 225);
  box-shadow: inset 0px -3px 7px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgb(199, 199, 199);
  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 769px) {
    width: calc(100% - 24px);
    min-height: calc(100vh - 48px);
    max-height: calc(100vh - 48px);
    margin: 0;
    margin-top: 24px;
    margin-left: 24px;
    box-shadow: inset 4px 0px 8px rgba(0, 0, 0, 0.06);
  }
`;

export const ShadowStyled = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 32px;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0)
  );
  background-size: 100% 100%;
  border-radius: 0px 0px 8px 8px;
`;

export const DivHeadStyled = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-top: 8px;
`;

export const PHeadStyled = styled.p`
  width: 100%;
  font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
  font-weight: 300;
  font-size: 1.2em;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.22em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
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
  max-width: 450px;
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
  border: 1px solid rgb(173, 173, 173);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 769px) {
    width: 100%;
    order: 2;
    margin: 0;
    border: 1px solid rgb(173, 173, 173);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
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
  @media screen and (min-width: 577px) and (max-width: 768px){
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
  max-width: 460px;
  padding: 18px 12px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgb(173, 173, 173);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 769px) {
    display: block;
    margin: 0;
    padding-top: 24px;
    padding-bottom: 44px;
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
  border: 1px solid rgb(235, 220, 152);
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

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.08em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.09em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
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
  background-color: ${(props) =>
    props.$nocontinue ? "rgb(227, 227, 227)" : "rgb(36, 160, 12)"};
  border-radius: 7px;
  ${(props) =>
    props.$nocontinue ? "color: rgb(74, 74, 74);" : "color: white;"}
`;

export const PContinueStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding-bottom: 2px;

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
