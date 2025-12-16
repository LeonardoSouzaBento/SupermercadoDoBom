import styled, { css } from "styled-components";
import { PStyled } from "../ForRecruiters/StylizedTags";
import { H2Styled } from "../ForRecruiters/StylizedTags";
import {
  CentralizeDiv,
  H1BaseStyled,
} from "@components/GenericStylizedTags";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 60px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
`;

export const H1Styled = styled(H1BaseStyled)`
  margin: auto;
  text-align: left;

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 375px) {
    width: calc(100% - 28px);
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
`;

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 993px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    padding: 0px 17px;
    box-sizing: border-box;
  }

  &::after {
    content: "";
    width: 100%;
    height: 6px;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--primary);
    z-index: -1;
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
    width: calc(100% - 28px);
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
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 2px 4px -2px rgba(41, 46, 117, 0.5),
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
  border: 1px solid var(--border);
  border-radius: 6px;
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

export const ButtonLoginStyled = styled(CentralizeDiv)`
  height: 48px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: var(--primary);
  color: white;
  cursor: pointer;
  transition: all 0.15s ease;
  border: none;

  &:hover {
    background-color: var(--primary-hover);
  }
`;

export const PLoginStlyed = styled.p`
  font-weight: 500;

  
  
  
  
  
  
`;

export const DivImgUserStyled = styled(CentralizeDiv)`
  height: 58px;
  width: 58px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ecf0f5;
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
  position: relative;
`;

export const DivThreeButtonStyled = styled.div`
  width: 100%;
  max-width: 520px;
  margin: auto;
  
  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    width: calc(100% - 28px);
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
  margin-bottom: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 2px 4px -2px rgba(41, 46, 117, 0.5),
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
  font-variation-settings: "FILL" 1, "wght" 600, "GRAD" 0, "opsz" 22;
  cursor: default;
  color: var(--primary);
  margin-right: 8px;

  ${(props) => props.$smaller && "font-size: 21px;"}
  ${(props) => props.$bigger && "font-size: 25px;"}
  ${(props) =>
    props.$user &&
    css`
      margin-right: 0px;
      font-variation-settings: "FILL" 1, "wght" 700, "GRAD" 0, "opsz" 22;
    `};
  ${(props) =>
    props.$cart &&
    css`
      font-variation-settings: "FILL" 0, "wght" 500, "GRAD" 0, "opsz" 22;
    `}
`;

export const H2v2Styled = styled(H2Styled)`
  margin-bottom: 0px;
  font-weight: 700;
  color: var(--primary);

  ${(props) =>
    props.$nameUser &&
    css`
      scale: 1.04;
      margin-left: 4px;
      width: 100%;
    `};
  
  
  
  
  
  
`;

export const DivStatusStyled = styled.div`
  width: 100%;
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;

  ${(props) => (props.$finish || props.$user) && "padding-left: 0px;"}

  @media screen and (min-width: 520px) and (max-width: 993px) {
    width: 50%;
    padding-left: 0px;
    justify-content: flex-end;
    ${(props) => props.$user && "width: 100%;"}

    ${(props) =>
      (props.$finish || props.$contact) &&
      css`
        justify-content: flex-start;
        margin-left: 20px;
        ${(props) => props.$finish && "margin-left: 0px;"}
      `}
  }

  @media screen and (min-width: 993px) and (max-width: 1058px) {
    justify-content: flex-start;

    ${(props) =>
      props.$user &&
      css`
        justify-content: flex-start;
      `}
  }

  @media screen and (min-width: 1058px) {
    width: 50%;
    margin: 0;
    padding: 0;
    justify-content: flex-end;

    ${(props) =>
      props.$user &&
      css`
        width: 100%;
        justify-content: flex-end;
      `}
  }
`;

export const DivNameStatus = styled.div`
  height: 24px;
  width: max-content;
  padding-bottom: 3px;
  padding-left: 2px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  background-color: var(--secondary-hover);
  color: white;
  border-radius: 14px;
`;

export const SpanStatusStyled = styled.span`
  font-variation-settings: "FILL" 0, "wght" 600, "GRAD" 0, "opsz" 24;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 4px;
  margin-top: 2px;
  border-radius: 50%;
  font-size: 16px;
`;

export const NameStatusStyled = styled.p`
  margin-right: 6px;
  ${(props) => props.$email && "color: black;"}

  
  
  
  
  
  
`;

export const SpanCheckStyled = styled.span`
  position: absolute;
  top: 16px;
  right: 20px;
  padding: 4px;
  border-radius: 50%;
  background-color: var(--light-green);
  color: var(--primary);
  z-index: 2;
  font-size: 18px;
  font-weight: 700;
`;

export const DivStyled = styled.div`
  width: 100%;
  padding: 20px;
  padding-top: 0px;
  box-sizing: border-box;
`;

export const H3Styled = styled.h3`
  width: 100%;
  text-align: left;
  scale: 1.01;
  font-weight: 600;
  font-family: var(--font-body);

  
  
  
  
  
  

  ${(props) => props.$hide && "display: none;"}
  ${(props) =>
    props.$contact &&
    css`
      font-family: var(--font-button);
      text-align: center;
      padding-right: 26px;
    `}
`;

export const Pv2Styled = styled(PStyled)`
  width: 100%;
  text-align: left;
  scale: 1.01;
  margin-bottom: 0px;

  ${(props) => props.$hide && "display: none;"}
  ${(props) =>
    props.$contact &&
    css`
      font-family: var(--font-button);
      text-align: center;
      padding-right: 26px;
    `}
`;

export const DivInvalidWarnStyled = styled.div`
  width: calc(100% - 32px);
  height: auto;
  padding: 8px 20px;
  background-color: var(--secondary-hover);
  border-radius: 4px;
  margin: auto;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

export const DivZapStyled = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.$seeInput && "align-items: flex-end;"};
  position: relative;
  overflow: hidden;
`;

export const DivZapAndDivPhone = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  ${(props) => !props.$visible && "display: none;"}

  @media screen and (max-width: 576px) {
    flex-direction: column;
    height: 88px;
    gap: 8px;
  }
`;

export const DivZapOrPhone = styled(CentralizeDiv)`
  height: 100%;
  width: calc(100% - 16px);
  padding-left: 12px;
  padding-right: 6px;
  border-radius: 4px;
  border: 1px solid var(--light-border);
  ${(props) => props.$selected && "background-color: var(--back-color);"}

  @media screen and (max-width: 576px) {
    width: 100%;
    box-sizing: border-box;
  }
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
  ${(props) =>
    props.$zap &&
    css`
      width: 100% !important;
      padding-right: 16px;
      box-sizing: border-box;
    `}
`;

export const DivAddressStyled = styled.div`
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
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

export const DivSpanStyled = styled(CentralizeDiv)`
  height: 44px;
  min-width: 44px;
  z-index: 2;
  border-radius: 8px;
  background-color: var(--primary);
  cursor: pointer;
  transition: background-color 0.15s ease;
  color: white;

  &:hover {
    background-color: hsla(234, 31%, 26%, 1);
  }
  ${(props) =>
    (props.$first || props.$address) &&
    css`
      position: absolute;
      top: 16px;
      right: 16px;
    `}
  ${(props) =>
    props.$disable &&
    css`
      border-radius: 4px;
      background-color: var(--disable);
      &:hover {
        background-color: var(--disable-hover);
      }
    `}
  ${(props) =>
    props.$editUser &&
    css`
      @media screen and (max-width: 520px) {
        position: absolute;
        top: 12px;
        right: 12px;
      }
    `}
`;

export const SpanEditStyled = styled.span`
  
  font-variation-settings: "FILL" 1, "wght" 300, "GRAD" 0, "opsz" 20;
`;

export const SpanEmailWarnStyled = styled.span`
  color: hsl(213, 11%, 45%);
  
  font-variation-settings: "FILL" 1, "wght" 300, "GRAD" 0, "opsz" 20;
`;

export const InputZapStyled = styled.input`
  height: 44px;
  width: 100%;
  padding-left: 8px;
  padding-bottom: 3px;
  box-sizing: border-box;
  border: none;
  background-color: var(--back-color);
  font-family: var(--font-body);
  font-weight: 400;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
  ${(props) => props.$hide && "display: none;"}

  
  
  
  
  
  
`;


