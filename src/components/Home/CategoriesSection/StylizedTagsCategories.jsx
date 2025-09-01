import styled, { css } from "styled-components";

export const DivStyled = styled.div`
  width: calc(100% - 20px);
  padding-top: 40px;
  padding-left: 20px;
  margin-bottom: 28px;
  overflow-x: hidden;
  position: relative;
  z-index: 2;
  border-top: 1px solid hsla(231, 16%, 78%, 1.00);
  @media screen and (max-width: 375px) {
    width: calc(100% - 15px);
    padding-left: 12px;
  }
  @media screen and (min-width: 1201px) {
    width: calc(100% - 52px);
    margin: auto;
    margin-bottom: 36px;
    padding-left: 0px;
  }
`;

export const DivLabelPromosStyled = styled.div`
  width: 90%;
  max-width: 800px;
  margin: auto;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  gap: 8px;
`;

export const H2LabelStyled = styled.h2`
  font-weight: 700;
  font-family: var(--h-font);
  color: var(--purple);
  text-align: center;

  @media screen and (max-width: 375px) {
    font-size: 1.2em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.32em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.34em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.36em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.38em;
  }
`;

export const DivfStyled = styled.div`
  width: auto;
  margin: auto;
  padding: 4px;
  padding-bottom: 8px;
  padding-top: 24px;
  padding-left: 0px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  gap: 12px;
  position: relative;
  overflow-x: scroll;
  user-select: none;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 375px) {
    gap: 15px;
    padding-right: 12px;
  }
  @media screen and (min-width: 1201px) {
    padding-right: 6px;
    justify-content: space-between;
  }
  @media screen and (min-width: 375px) and (max-width: 1200px) {
    padding-right: 20px;
  }
  @media screen and (min-width: 1201px) {
    gap: 0;
  }
`;

//span para animação
export const SpanStyled = styled.span`
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

export const DivCatStyled = styled.div`
  min-width: 110px;
  max-width: 110px;
  height: 84px;
  padding-bottom: 16px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  flex: auto;
  border-radius: 12px;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.$selected &&
    css`
      background-color: white;
      box-shadow: 0px 3px 6px -4px rgba(41, 46, 117, 0.6);
    `}
  ${(props) =>
    !props.$selected &&
    css`
      &:hover {
        background-color: rgba(255, 255, 255, 0.28);
      }
    `}
`;

export const ImgStyled = styled.img`
  height: 48px;
  width: 48px;
  background-color: rgb(255, 83, 83);
  border-radius: 50%;
  transform: translateY(-24px);
  filter: contrast(1.7) saturate(1.8);
  transition: all 0.2s ease;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -20px);

  ${(props) => props.$selected && css`
    padding: 2px;
    box-shadow: 0px 4px 8px -4px rgba(41, 46, 117, 0.5);
  `}
`;

export const DivNameCatStyled = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
`;

export const PStyled = styled.p`
  font-family: "Lato", Arial, sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 1.04em;
  letter-spacing: 0.5px;
  margin: 0;
  color: var(--dark-purple);
`;
