import styled from "styled-components";

export const MainStyled = styled.main`
  margin: auto;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    width: calc(100% - 20px);
  }
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: auto 350px;
    grid-template-rows: auto;
  }
`;

export const CartSectionStyed = styled.div`
  width: calc(100% - 30px);
  max-width: 1000px;
  height: max-content;
  min-height: 300px;
  margin: auto;
  margin-top: 24px;
  margin-bottom: 20px;
  padding: 12px;
  padding-top: 0px;
  padding-bottom: 14px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgb(225, 225, 225);
  box-shadow: inset 0px -3px 7px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 577px) and (max-width: 768px) {
    margin-bottom: 17px;
  }
  @media screen and (min-width: 769px) {
    width: calc(100% - 24px);
    margin: 0;
    margin-top: 24px;
    margin-left: 24px;
    min-height: calc(100vh - 24px);
    box-shadow: inset 4px 0px 8px rgba(0, 0, 0, 0.06);
  }
  @media screen and (min-width: 993px) {
    min-height: calc(100vh - 48px);
  }

`;

export const DivHeadStyled = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const PHeadStyled = styled.p`
  width: 100%;
  font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
  font-weight: 300;
  font-size: 1.2em;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.16em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.21em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.23em;
  }
`;

export const ContainerProductList = styled.div``;

/*seção Finalizar*/
export const FinishSectionStyled = styled.div`
  width: calc(100% - 30px);
  margin: auto;
  padding-bottom: 24px;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    width: calc(100% - 21px);
  }
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
  }
`;

export const PAddStyled = styled.p`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-weight: 300;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.16em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.19em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.22em;
  }
`;

export const ContainerStyled = styled.div`
  height: auto;
  width: 100%;
  max-width: 460px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-radius: 7px;
  padding: 18px 12px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid rgb(173, 173, 173);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 769px) {
    display: block;
    margin: 0;
    padding-top: 24px;
    padding-bottom: 44px;
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
  background-color: rgb(255, 236, 202);
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

  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.1em;
  }
`;

export const DivContinueStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: ${(props) =>
    props.$nocontinue ? " #E1E1E1" : "rgb(36, 160, 12)"};
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
