import styled, { css } from "styled-components";

export const Div = styled.div`
  width: calc(100% - 20px);
  overflow-x: hidden;
  margin-left: 16px;
  position: relative;
  z-index: 2;
  padding-top: 40px;

  @media screen and (max-width: 374px) {
    width: calc(100% - 15px);
    margin-left: 11px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    width: calc(100% - 20px);
  }
  @media screen and (min-width: 577px) and (max-width: 1200px) {
    width: calc(100% - 20px);
  }
  @media screen and (min-width: 1201px) {
    width: calc(100% - 52px);
    margin: auto;
  }
`;

export const DivLabelPromosStyled = styled.div`
  width: 90%;
  max-width: 800px;
  margin: auto;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  gap: 8px;
`;

export const PLabelStyled = styled.p`
  font-weight: ${(props) => (props.id ? "700" : "500")};
  font-family: "Lato", sans-serif;
  color: ${(props) => (props.id ? " #221B39" : " #332854")};
  text-align: center;

  @media screen and (max-width: 374px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.25em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.27em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.31em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.33em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.35em;
  }
`;

export const Divf = styled.div`
  width: auto;
  margin: auto;
  margin-bottom: 12px;
  padding: 4px;
  padding-bottom: 8px;
  padding-right: 20px;
  padding-left: 8px;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  position: relative;
  overflow-x: scroll;
  user-select: none;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
  &:active {
    cursor: grabbing;
  }

  @media screen and (max-width: 374px) {
    gap: 15px;
  }
  @media screen and (min-width: 1201px) {
    padding-right: 6px;
    justify-content: space-between;
  }
`;

//span para animação
export const Span = styled.span`
  position: absolute;
  top: 20%;
  right: 20px;
  z-index: 2;
  border-radius: 50%;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgb(155, 139, 227);
  font-size: 1.7em;
  border: 2px solid rgb(176, 130, 232);
  color: rgb(57, 12, 119);
  background-color: rgba(209, 196, 241, 0.799);
  rotate: 15deg;
  will-change: transform;
  /*animation: 
        aparecer 500ms linear 0s, 
        rolarDedo 1.1s linear 500ms, 
        desaparecer 500ms linear 1.6s;*/
  display: none;
`;

export const DivCat = styled.div`
  min-width: 101px;
  max-width: 101px;
  height: 110px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex: auto;
  border-radius: 6px;
  padding-top: 7px;
  ${(props) =>
    props.$selected &&
    css`
      background-color: white;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.03);
    `}
`;

export const ImgStyled = styled.img`
  height: 40px;
  width: 40px;
  background-color: rgb(255, 83, 83);
  border-radius: 50%;
  filter: contrast(1.7) saturate(1.8);
  transition: all 0.32s ease;
  padding: 4px;

  @media screen and (max-width: 374px) {
    width: 39px;
    height: 39px;
    padding: 3px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    width: 41px;
    height: 41px;
    padding: 3px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 42px;
    height: 42px;
  }
  @media screen and (min-width: 768px) {
    width: 43px;
    height: 43px;
  }
`;

export const DivNameSection = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
`;

export const PStyled = styled.p`
  font-family: "Lato", Arial, sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 1em;
  letter-spacing: 0.5px;
  margin: 0;
  color: #630609;
`;
