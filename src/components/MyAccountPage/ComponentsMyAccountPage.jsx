import styled, { css } from "styled-components";
import { HHeadStyled } from "../../pages/Cart/ComponentsCart";
import { PStyled } from "../ForRecruitersPage/ComponentsForRecruitersPage";
import { H2Styled } from "../ForRecruitersPage/ComponentsForRecruitersPage";

export const DivHeaderStyled = styled.div`
  width: 100%;
  height: 64px;
  margin-bottom: 16px;
  background-color: #383d6a;
  display: flex;
  align-items: center;

  @media screen and (max-width: 520px) {
    margin-bottom: 0px;
  }
`;

export const HHeaderStyled = styled(HHeadStyled)`
  color: white;
  padding: 0px;
  max-width: 520px;
  margin: auto;
  text-align: left;

  @media screen and (max-width: 520px) {
    width: max-content;
    padding-left: 20px;
    margin: 0;
  }

  @media screen and (min-width: 993px) and (max-width: 1092px) {
    width: 100%;
    box-sizing: border-box;
    padding-left: 16px;
    margin: 0;
  }
  @media screen and (min-width: 1092px) {
    max-width: 1056px;
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 993px) {
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    padding: 0px 17px;
    box-sizing: border-box;
  }
`;

export const DivMeContactStyled = styled.div`
  height: auto;
  width: 100%;
  max-width: 520px;
  margin: auto;

  @media screen and (min-width: 993px) {
    width: 50%;
    margin: 0;
  }
`;

export const DivOneStyled = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  background-color: white;
  border-radius: 12px;
`;

export const DivImgEmailStyled = styled.div`
  min-width: 100%;
  display: flex;
  gap: 12px;
`;

export const SubDivOneStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivButtonStyled = styled.div`
  min-width: 100%;
`;

export const ButtonLoginStyled = styled.div`
  height: 44px;
  width: max-content;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #ecf0f5;
  color: #292d4e;
  cursor: pointer;
  transition: background-color 0.15s ease;
  box-shadow: 0px 3px 6px -3px rgba(41, 46, 117, 0.75);
  border: none;

  &:hover {
    box-shadow: 0px 3px 6px -3px rgba(41, 46, 117, 1);
  }
`;

export const PLoginStlyed = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;

  @media screen and (max-width: 375px) {
    font-size: 1.137em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.156em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.166em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.175em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.184em;
  }
`;

export const DivImgUserStyled = styled.div`
  height: 58px;
  width: 58px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #383d6a;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const NameOfImgStyled = styled.p`
  color: white;
  font-family: "Open-sans", sans-serif;
  padding-top: 1px;

  @media screen and (max-width: 375px) {
    font-size: 1.25em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.274em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.322em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.373em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.425em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.45em;
  }
`;

export const ImgUserStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  scale: 1.02;
`;

export const DivNameEmailStyled = styled.div`
  width: max-content;
  height: 100%;
  gap: 4px;
`;

export const DivEmailUserStyled = styled.div`
  display: flex;
  gap: 4px;
`;

export const DivTwoStyled = styled(DivOneStyled)`
  padding: 0;
  padding-top: 5px;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  @media screen and (min-width: 993px) {
    margin-bottom: 0px;
  }
`;

export const DivThreeStyled = styled.div`
  height: auto;
  width: 100%;
  max-width: 520px;
  margin: auto;
  padding: 0;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  background-color: white;
  border-radius: 12px;

  @media screen and (max-width: 993px) {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 554px) {
    border-radius: 4px;
  }

  @media screen and (min-width: 993px) {
    margin: 0;
  }
`;

export const DivH2StatusStyled = styled.div`
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
  @media screen and (min-width: 520px) and (max-width: 993px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (min-width: 993px) and (max-width: 1058px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1058px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DivH2Styled = styled.div`
  height: 56px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 16px;
  margin-bottom: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 520px) {
    margin-bottom: 0px;
  }
`;

export const SpanH2Styled = styled.span`
  color: #383d6a;
  font-size: 1.65em;
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
  ${(props) => props.$variant === "call" && "scale: 0.9;"}
`;

export const DivStatusStyled = styled.div`
  width: max-content;
  padding-left: 20px;
  box-sizing: border-box;
  ${(props) => props.$user && "padding-left: 0px"};

  @media screen and (min-width: 520px) {
    height: max-content;
  }
`;

export const DivNameStatus = styled.div`
  height: 24px;
  min-width: 150px;
  width: max-content;
  padding: 0 16px;
  padding-bottom: 3px;
  padding-right: 3px;
  margin-left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  background-color: rgb(203, 0, 0);
  border-radius: 16px;
`;

export const SpanStatusStyled = styled.span`
  font-variation-settings: "FILL" 1, "wght" 600, "GRAD" 0, "opsz" 24;
  color: white;
  margin-top: 2.5px;
  padding: 2px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;

  @media screen and (max-width: 375px) {
    font-size: 1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1em;
  }
`;

export const NameStatusStyled = styled.p`
  font-family: "Noto Sans", sans-serif;
  color: white;
  ${(props) => props.$email && "color: black;"}

  @media screen and (max-width: 375px) {
    font-size: 1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1em;
  }
`;

export const H2v2Styled = styled(H2Styled)`
  margin-bottom: 0px;
  ${(props) =>
    props.$nameUser &&
    css`
      font-weight: 600;
      scale: 1.05;
      margin-left: 4px;
    `};
  @media screen and (max-width: 375px) {
    font-size: 1.137em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.156em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.166em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.175em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.184em;
  }
`;

export const DivStyled = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const Pv2Styled = styled(PStyled)`
  text-align: left;
  margin-bottom: 0px;
  scale: 1.01;
`;

export const StrongStyled = styled.strong`
  font-weight: 600;
  ${(props) => props.$pStatus && "font-weight: 400;"}
`;

export const DivPStyled = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  position: relative;

  ${(props) =>
    props.$variant === "zap" && "border: 1px solid rgb(188, 188, 188);"};
`;

export const DivAddressStyled = styled.div`
  padding: 20px;
  border-radius: 8px;
  display: flex;
  gap: 20px;
`;

export const SubDivStyled = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DivSpanStyled = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-radius: 6px;
  background-color: #ecf0f5;
  cursor: pointer;
  transition: background-color 0.15s ease;
  box-shadow: 0px 3px 6px -3px rgba(41, 46, 117, 0.5);
  color: #292d4e;

  &:hover {
    background-color: hsla(213, 31%, 90%, 1);
    box-shadow: 0px 3px 6px -3px rgba(41, 46, 117, 0.7);
  }

  ${(props) =>
    props.$address &&
    css`
      position: absolute;
      bottom: 8px;
      right: 8px;
    `}
`;

export const SpanStyled = styled.span`
  font-size: 1.78em;
  font-variation-settings: "FILL" 1, "wght" 300, "GRAD" 0, "opsz" 20;
`;

export const SpanEmailWarnStyled = styled.span`
  color: hsl(213, 11%, 45%);
  font-size: 2.5em;
  font-variation-settings: "FILL" 1, "wght" 300, "GRAD" 0, "opsz" 20;
`;
