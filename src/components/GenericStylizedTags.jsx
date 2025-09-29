import styled from "styled-components";

export const H1BaseStyled = styled.h1`
  color: white;
  font-weight: 700;
  font-family: var(--h-font);
  text-align: center;
  user-select: none;

  @media screen and (max-width: 375px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.312em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.336em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.361em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.387em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.4em;
  }
`;

export const H2BaseStyled = styled.h2`
  color: var(--dark-purple);
  font-family: var(--h-font);
  text-align: center;
  user-select: none;
  font-weight: 700;

  @media screen and (max-width: 375px) {
    font-size: 1.196em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.207em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.229em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.252em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.276em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.288em;
  }
`;

export const CentralizeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CentralizeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PButtonBase = styled.p`
  font-family: var(--bt-font);
  font-weight: 550;
  cursor: pointer;
  color: white;

  @media screen and (max-width: 375px) {
    font-size: 1.125em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.136em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.159em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.183em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.207em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.219em;
  }
`;

export const DivToCoverStyled = styled(CentralizeDiv)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: white;
  border-radius: 12px;
`;