import styled, { css } from "styled-components";
import { PStyled } from "../ForRecruitersPage/StylizedTagsForRecruitersPage";
import { H2Styled } from "../ForRecruitersPage/StylizedTagsForRecruitersPage";

export const DivHeaderStyled = styled.div`
  width: 100%;
  height: 56px;
  margin-bottom: 16px;
  background-color: var(--purple);
  display: flex;
  align-items: center;
`;

export const H1Styled = styled.h1`
  margin: auto;
  text-align: left;
  font-family: var(--p-font);
  font-weight: 500;
  color: white;

  @media screen and (max-width: 375px) {
    width: calc(100% - 24px);
  }
  @media screen and (min-width: 375px) {
    width: calc(100% - 32px);
    max-width: 520px;
  }
  @media screen and (min-width: 993px) and (max-width: 1085px) {
    width: max-content;
    margin: 0;
    margin-left: 16px;
  }
  @media screen and (min-width: 1085px) {
    max-width: 1056px;
  }

  @media screen and (max-width: 385px) {
    font-size: 1.27em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.285em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.29em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.31em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.33em;
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 993px) {
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    padding: 0px 17px;
    box-sizing: border-box;
  }
`;

export const DivOneTwoStyled = styled.div`
  height: auto;
  width: 100%;
  max-width: 520px;
  margin: auto;

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    width: calc(100% - 32px);
  }
  @media screen and (min-width: 993px) {
    width: 50%;
    margin: 0;
  }
`;

export const DivOneStyled = styled.div`
  width: 100%;
  height: max-content;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 3px 6px -3px rgba(41, 46, 117, 0.5),
    2px 0px 4px -3px rgba(41, 46, 117, 0.125),
    -2px 0px 4px -3px rgba(41, 46, 117, 0.125);
  ${(props) => props.$orders && "padding-top: 0px;"}
`;

export const UserHeaderDivStyled = styled.div`
  width: 100%;
  margin: auto;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #c5c5c5ff;
  position: relative;
`;

export const DivImgEmailStyled = styled.div`
  width: max-content;
  box-sizing: border-box;
  display: flex;
  gap: 12px;

  @media screen and (max-width: 512px) {
    flex-direction: column;
  }
`;

export const DivButtonStyled = styled.div`
  width: 100%;
`;

export const ButtonLoginStyled = styled.div`
  height: 48px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--purple);
  color: white;
  cursor: pointer;
  transition: all 0.15s ease;
  border: none;

  &:hover {
    background-color: var(--purple-hover);
  }
`;

export const PLoginStlyed = styled.p`
  font-family: var(--p-font);
  font-weight: 500;

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
  background-color: #ecf0f5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

export const DivNameEmailStyled = styled.header`
  width: max-content;
  height: auto;
`;

export const DivEmailUserStyled = styled.div`
  display: flex;
  gap: 4px;
`;

export const DivTwoStyled = styled(DivOneStyled)`
  padding: 0;
  padding-top: 0px;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  @media screen and (min-width: 993px) {
    margin-bottom: 0px;
  }
`;

export const DivThreeButtonStyled = styled.div`
  width: 100%;
  max-width: 520px;
  margin: auto;
  margin-bottom: 24px;

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    width: calc(100% - 32px);
  }
  @media screen and (min-width: 993px) {
    width: 50%;
    margin: 0;
  }
`;

export const DivThreeStyled = styled.div`
  height: max-content;
  width: 100%;
  margin: auto;
  margin-bottom: 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 3px 6px -3px rgba(41, 46, 117, 0.5),
    2px 0px 4px -3px rgba(41, 46, 117, 0.125),
    -2px 0px 4px -3px rgba(41, 46, 117, 0.125);
`;

export const DivH2StatusStyled = styled.div`
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  ${(props) => props.$orders && "padding-right: 0px;"}

  @media screen and (max-width: 520px) {
    flex-direction: column;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 520px) and (max-width: 993px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (min-width: 993px) and (max-width: 1058px) {
    flex-direction: column;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1058px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderH2Styled = styled.header`
  height: 56px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 16px;
  margin-bottom: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${(props) => props.$cart && "width: max-content;"};
  ${(props) => props.$orders && "padding-left: 0px;"}
  @media screen and (min-width: 520px) {
    margin-bottom: 0px;
  }
`;

export const SpanH2Styled = styled.span`
  font-size: 1.55em;
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 22;
  cursor: default;
  margin-right: 8px;
  @media screen and (max-width: 375px) {
    font-size: 1.5em;
  }

  ${(props) => props.$variant === "smaller" && "scale: 0.9;"};
  ${(props) => props.$user && "margin-right: 0;"};
  ${(props) =>
    props.$cart &&
    css`
      font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 22;
    `}
`;

export const H2v2Styled = styled(H2Styled)`
  margin-bottom: 0px;
  font-weight: 500;

  ${(props) =>
    props.$nameUser &&
    css`
      font-weight: 600;
      scale: 1.04;
      margin-left: 4px;
      width: 100%;
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

export const DivStatusStyled = styled.div`
  width: 100%;
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;

  @media screen and (min-width: 520px) and (max-width: 1058px) {
    width: 50%;
    padding-left: 0px;
    justify-content: flex-end;
    ${(props) => props.$user && "width: 100%;"}
  }
  @media screen and (min-width: 1058px) {
    width: 50%;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
  }
  ${(props) => props.$user && "padding-left: 0;"}
  ${(props) =>
    !props.$user &&
    css`
      @media screen and (min-width: 520px) and (max-width: 1058px) {
        justify-content: flex-start !important;
        margin-left: 20px;
      }
    `}
  ${(props) =>
    props.$user &&
    css`
      @media screen and (min-width: 993px) and (max-width: 1058px) {
        justify-content: flex-start;
      }
      @media screen and (min-width: 1058px) {
        width: 100%;
        justify-content: flex-end;
      }
    `}
`;

export const DivNameStatus = styled.div`
  height: 24px;
  min-width: 150px;
  width: max-content;
  padding: 0 16px;
  padding-bottom: 3px;
  padding-right: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  background-color: rgb(203, 0, 0);
  border-radius: 14px;
  ${(props) => props.$hide && "background-color: transparent;"}
`;

export const SpanStatusStyled = styled.span`
  font-variation-settings: "FILL" 1, "wght" 600, "GRAD" 0, "opsz" 24;
  color: white;
  margin-top: 2.5px;
  padding: 2px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  ${(props) => props.$check && "background-color: var(--dark-green);"}

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
  ${(props) => props.$hide && "visibility: hidden;"}

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

export const DivStyled = styled.div`
  width: 100%;
  padding: 20px;
  padding-top: 0px;
  box-sizing: border-box;
`;

export const Pv2Styled = styled(PStyled)`
  text-align: left;
  margin-bottom: 0px;
  scale: 1.01;

  ${(props) => props.$hide && "display: none;"}
`;

export const StrongStyled = styled.strong`
  font-weight: 600;
  ${(props) => props.$pStatus && "font-weight: 400;"}
`;

export const DivZapStyled = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: 1px solid #c5c5c5ff;
`;

export const DivFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  position: relative;

  @media screen and (max-width: 375px) {
    width: 100%;
  }
  ${(props) =>
    props.$first &&
    css`
      @media screen and (min-width: 375px) {
        width: 58%;
      }
    `}
`;

export const DivAddressStyled = styled.div`
  padding: 16px;
  border: 1px solid rgba(195, 195, 195, 1);
  position: relative;
`;

export const DivHalfAddressStyled = styled.div`
  border-radius: 8px;
  display: flex;
  gap: 16px;
  ${(props) => props.$first && "margin-bottom: 16px;"}

  @media screen and (max-width: 385px) {
    flex-direction: column;
    gap: 8px;
    ${(props) => props.$first && "margin-bottom: 8px;"}
  }
`;

export const DivSpanStyled = styled.div`
  height: 44px;
  min-width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-radius: 8px;
  background-color: var(--purple);
  cursor: pointer;
  transition: background-color 0.15s ease;
  color: white;

  &:hover {
    background-color: hsla(234, 31%, 26%, 1);
  }
  ${(props) =>
    props.$first &&
    css`
      position: absolute;
      top: 16px;
      right: 16px;
    `}
  ${(props) =>
    props.$address &&
    css`
      position: absolute;
      top: 12px;
      right: 12px;
    `}
`;

export const SpanEditStyled = styled.span`
  font-size: 1.78em;
  font-variation-settings: "FILL" 1, "wght" 300, "GRAD" 0, "opsz" 20;
`;

export const SpanEmailWarnStyled = styled.span`
  color: hsl(213, 11%, 45%);
  font-size: 2.5em;
  font-variation-settings: "FILL" 1, "wght" 300, "GRAD" 0, "opsz" 20;
`;

export const InputZapStyled = styled.input`
  height: 44px;
  width: 100%;
  padding-left: 8px;
  padding-bottom: 3px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color: var(--back-color);
  font-family: var(--p-font);
  font-weight: 400;
  ${(props) => props.$hide && "display: none;"}
  
  @media screen and (max-width: 375px) {
    width: calc(100% - 36px);
    font-size: 1.15em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.163em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.165em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.17em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.175em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.18em;
  }
`;
