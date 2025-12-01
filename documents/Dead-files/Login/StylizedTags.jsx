import styled, { css } from "styled-components";
import {
  CentralizeDiv,
  DivToCoverStyled,
  H1BaseStyled,
} from "../../../src/components/GenericStylizedTags";

export const ContainerStyled = styled(CentralizeDiv)`
  height: 100vh;
  width: 100%;
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
  max-width: 406px;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(41, 46, 117, 0.4),
    4px 0px 4px -3px rgba(41, 46, 117, 0.1),
    -4px 0px 4px -3px rgba(41, 46, 117, 0.1);
  background-color: white;

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  position: relative;
`;

export const DivAlertStyled = styled(DivToCoverStyled)`
  background-color: var(--red);
  z-index: 2;
  color: black;
`;

export const DivH1Styled = styled(CentralizeDiv)`
  height: 56px;
  width: 100%;
  background-color: var(--red);
  position: relative;
`;

export const H1LoginStyled = styled(H1BaseStyled)`
  width: 100%;
  box-sizing: border-box;
  height: max-content;
  margin-bottom: 16px;
`;

export const ButtonCloseStyled = styled(CentralizeDiv)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  right: 20px;
  cursor: pointer;
  transition: background-color 0.05s linear;
  &:hover {
    background-color: hsla(358, 66%, 43%, 1);
  }

  & span {
    font-weight: 300;
    color: white;
    scale: 1.07;

    
    
    
    
    
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

  
  
  
  
  
  
`;

export const InputEmailStyled = styled.input`
  width: 100%;
  height: 44px;
  background-color: white;
  border: none;
  border-radius: 8px;
  text-indent: 10px;
  font-family: var(--p-font);
  
  box-shadow: 0px 4px 10px rgba(41, 46, 117, 0.12);

  &:focus {
    outline: 1px solid #b12328;
  }
  
  
  
  
  
`;

export const DivButtonsStyled = styled.div`
  padding: 24px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  position: relative;
  background-color: white;
  position: relative;
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

export const DivSpanStyled = styled(CentralizeDiv)`
  height: 40px;
  width: 56px;
  border-radius: 50%;
`;

export const SpanButtonStyled = styled.span`
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 22;
  color: var(--red);
  cursor: default;
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

  
  
  
  
  
`;

export const PContinueStyled = styled.p`
  font-family: var(--bt-font);
  font-weight: 500;
  padding-bottom: 2px;
  cursor: pointer;
  
  
  
  
  
  
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

  
  
  
  
  
  
`;

export const ButtonDivStyled = styled(CentralizeDiv)`
  height: 44px;
  width: 100%;
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


