import styled, { css } from "styled-components";
import { H1BaseStyled } from "../GenericStylizedTags";

export const ContainerStyled = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 5;
  transition: all 0.3s ease;
  opacity: ${(props) => props.$opacity};
`;

export const DivMainStyled = styled.div`
  width: calc(100% - 24px);
  max-width: 380px;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  /* box-shadow: 0px 4px 10px -3px rgba(41, 46, 117, 0.5); */
  box-shadow: 0px 4px 10px rgba(41, 46, 117, 0.4),
    4px 0px 4px -3px rgba(41, 46, 117, 0.1),
    -4px 0px 4px -3px rgba(41, 46, 117, 0.1);
  background-color: white;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
`;

export const DivAlertStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: black;
`;

export const DivH1Styled = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
`;

export const H1LoginStyled = styled(H1BaseStyled)`
  width: 100%;
  box-sizing: border-box;
  height: max-content;
  margin-bottom: 16px;
`;

export const DivSpanCloseStyled = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  right: 20px;
  cursor: pointer;
  transition: background-color 0.05s linear;

  &:hover {
    background-color: hsla(358, 66%, 43%, 1);
  }
`;

export const SpanCloseStyled = styled.span`
  font-weight: 300;
  color: white;
  scale: 1.07;

  @media screen and (max-width: 375px) {
    font-size: 1.45em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.48em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.51em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.53em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.55em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.5em;
  }
`;

export const DivEmailStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  margin-bottom: 18px;
`;

export const PEmailStyled = styled.p`
  color: white;
  letter-spacing: 0.65px;

  ${(props) => props.$alert && "color: black;"}

  @media screen and (max-width: 375px) {
    font-size: 1.259em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.264em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.269em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.275em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.281em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.286em;
  }
`;

export const InputEmailStyled = styled.input`
  width: 100%;
  height: 44px;
  background-color: white;
  border: none;
  border-radius: 8px;
  text-indent: 10px;
  font-family: var(--p-font);
  font-size: 1.1em;
  box-shadow: 0px 4px 10px rgba(41, 46, 117, 0.12);

  &:focus {
    outline: 1px solid #b12328;
  }
  @media screen and (max-width: 375px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.11em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.117em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.135em;
  }
  @media screen and (min-width: 993px) {
    font-size: 1.139em;
  }
`;

export const DivButtonsStyled = styled.div`
  padding: 24px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  position: relative;
  background-color: white;
`;

export const ButtonLoginStyled = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: white;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.15 ease;
  background-color: white;
  border: 1px solid rgba(200, 200, 200, 1);
  color: var(--dark-purple);

  &:hover {
    background-color: var(--back-color);
  }
  ${(props) => props.$onMyAccount && "display: none;"}
`;

export const DivSpanPStyled = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivSpanStyled = styled.div`
  height: 40px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const SpanButtonStyled = styled.span`
  font-size: 1.45em;
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 22;
  color: var(--red);
  cursor: default;
  @media screen and (max-width: 375px) {
    font-size: 1.5em;
  }
`;

export const PLoginStyled = styled.p`
  width: 100%;
  padding-left: 40px;
  box-sizing: border-box;
  text-align: center;
  font-family: var(--bt-font);
  font-weight: 500;
  user-select: none;
  scale: 1.01;
  cursor: pointer;

  @media screen and (max-width: 375px) {
    font-size: 1.07em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.115em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.128em;
  }
  @media screen and (min-width: 993px) {
    font-size: 1.13em;
  }
`;

export const PContinueStyled = styled.p`
  font-family: var(--bt-font);
  font-weight: 500;
  padding-bottom: 2px;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    font-size: 1.17em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.177em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.192em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.207em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.222em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.23em;
  }
`;

export const ImgGoogleStyled = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  filter: contrast(1.3) brightness(0.99);
`;

export const ContainerEmailStyled = styled.div`
  width: 100%;
  padding: 24px;
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
`;

export const LabelStyled = styled.label`
  font-family: var(--h-font);
  font-weight: 400;
  margin-bottom: 8px;

  @media screen and (max-width: 375px) {
    font-size: 1.2em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.206em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.218em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.231em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.244em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.25em;
  }
`;

export const InputStyled = styled.input`
  height: 44px;
  width: 100%;
  margin-bottom: 12px;
  padding-left: 12px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid rgba(200, 200, 200, 1) !important;
  border-radius: 4px;
  outline: none;
  font-family: var(--p-font);
  font-weight: 400;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.185em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.193em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.208em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.225em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.242em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.25em;
  }
`;

export const ButtonDivStyled = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--back-color);
  color: var(--dark-purple);
  transition: all 0.15s ease;

  &:hover {
    background-color: var(--back-hover);
  }

  ${(props) =>
    props.$register &&
    css`
      margin-top: 12px;
      margin-bottom: 12px;
      color: white;
      background-color: var(--red);
      &:hover {
        background-color: var(--dark-red);
      }

      ${(props) =>
        !props.$enable &&
        css`
          background-color: #a8adb3ff;
          &:hover {
            background-color: #9299a0ff;
          }
        `}
    `}
`;

export const SpanEmailStyled = styled.span`
  background-color: var(--pink);
  font-size: 1.15em;
  font-weight: 600;
  color: var(--dark-red);
  box-shadow: 0px 2px 4px -3px rgba(56, 61, 106, 0.3);
  border-radius: 50%;
  ${(props) =>
    props.$check &&
    css`
      background-color: var(--light-green);
      color: var(--dark-green);
    `}
`;

export const DivForReturnStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(255, 0, 0, 0.05);
  padding: 16px;
  padding-top: 12px;
  margin-top: 12px;
  border-radius: 4px;
`;

export const DivRowStyled = styled.div`
  min-height: 32px;
  width: max-content;
  display: flex;
  align-items: center;
  gap: 8px;
  ${(props) => props.$first && "margin-bottom: 4px;"}

  @media screen and (max-width: 375px) {
    align-items: flex-start;
  }
  ${(props) =>
    props.$last &&
    css`
      @media screen and (max-width: 375px) {
        flex-direction: column;
        gap: 4px;
      }
    `}
`;
