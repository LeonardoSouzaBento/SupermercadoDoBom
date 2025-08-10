import styled from "styled-components";

export const ContainerStyled = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 6;
`;

export const DivSideStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border-radius: 16px 0 0 16px;
  box-shadow: -4px 0px 12px -4px rgba(41, 46, 117, 0.5);
  transition: transform 0.4s ease;
  transform: translateX(${(props) => props.$transform});

  @media screen and (max-width: 375px) {
    max-width: none;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    max-width: 330px;
  }
  @media screen and (min-width: 577px) {
    max-width: 360px;
  }
  @media screen and (min-width: 993px) {
    max-width: 390px;
  }
`;

export const DivTitleStyed = styled.div`
  height: 56px;
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  background-color: #383d6a;
  position: relative;
  border-top-left-radius: 15px;
`;

export const DivNameSpanStyled = styled.div`
  height: 48px;
  width: calc(100% - 32px);
  margin: auto;
  box-sizing: border-box;
  padding-left: 14px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  border-radius: 4px;
  ${(props) => props.$login && "margin-top: 25px;"}
`;

export const DivSpanStyled = styled.div`
  width: max-content;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  flex: none;
  cursor: pointer;
`;

export const SpanOptionsStyled = styled.span`
  font-weight: 400;
  font-size: 1.4em;
  font-variation-settings: "FILL" 1, "GRAD" 12, "opsz" 30;
  color: #383d6a;
  user-select: none;
  padding-top: 1px;
  ${(props) => props.$login && "font-weight: 500;"}
`;

export const POptionStyled = styled.p`
  padding-right: 12px;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  user-select: none;
  color: #292d4e;
  scale: 1.02;
  width: 100%;
  text-align: left;

  @media screen and (max-width: 375px) {
    font-size: 1.14em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.155em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.16em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.165em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.168em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.17em;
  }
`;
