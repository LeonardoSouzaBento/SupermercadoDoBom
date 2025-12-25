import styled, { css, keyframes } from 'styled-components';
import { CentralizeDiv, H1BaseStyled } from '@components/GenericStylizedTags';
import { DivToCoverStyled } from '@components/GenericStylizedTags';

export const DivBodyStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
  opacity: ${(props) => props.$opacity};

  @media screen and (max-width: 993px) {
    justify-content: ${(props) => (props.$up ? 'flex-start' : 'center')};
  }
`;

// Caixa central onde ficam os inputs
export const MainDivStyled = styled.div`
  height: auto;
  width: calc(100% - 24px);
  max-width: 40.6rem;
  margin-bottom: 0.4rem;
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  box-sizing: border-box;
  border-radius: 1.2rem;
  background-color: var(--white-foreground);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform 0.2s ease;

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 375px) and (max-width: 577px) {
    margin-bottom: 0;
  }
`;

// Título
export const DivTitleStyled = styled.div`
  height: 5.6rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 2.4rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--primary);
  position: relative;
  border-bottom: 1px solid var(--border);
  z-index: 3;
`;

export const H1Styled = styled(H1BaseStyled)`
  color: var(--primary);
`;

export const DivSpanCloseStyled = styled(CentralizeDiv)`
  height: 3.6rem;
  width: 3.6rem;
  position: absolute;
  top: 0.8rem;
  right: 2rem;
  background-color: var(--background);
  color: var(--primary);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: var(--back-hover);
  }

  ${(props) =>
    props.$moreOptions &&
    css`
      height: 4rem;
      width: 4rem;
      background-color: var(--primary);
      color: var(--white-foreground);
      &:hover {
        background-color: var(--primary-hover);
      }
    `}
  & span {
    font-weight: 500;
  }
`;

export const SpanCloseStyled = styled.span`
  font-weight: 500;
`;

// Botão de localização
export const ButtonStyled = styled.button`
  width: calc(100% - 48px);
  margin: auto;
  margin-bottom: 2rem;
  height: 4.8rem;
  padding: 0 1.6rem;
  padding-bottom: 0.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  font-family: var(--font-button);

  font-weight: 550;
  text-align: center;
  color: hsla(136, 57%, 89%, 1);
  transition: background-color 0.15s ease;

  background-color: var(--primary);
  &:hover {
    background-color: var(--primary-hover);
  }

  ${(props) =>
    props.$variant === 'digitarTudo' &&
    css`
      margin-bottom: 0;
      box-shadow: var(--shadow-sm);
    `}

  ${(props) =>
    (props.$variant === 'digitarTudo' || props.$variant === 'voltar') &&
    css`
      background-color: var(--secondary);
      &:hover {
        background-color: var(--secondary-hover);
      }
    `};
  ${(props) =>
    props.$variant === 'voltar' &&
    css`
      margin-bottom: 1.25rem;
      background-color: var(--background);
      color: var(--primary);
      &:hover {
        background-color: var(--back-hover);
      }
    `};

  &:focus {
    outline: none;
  }
`;

export const DivApiReturnStyled = styled(DivToCoverStyled)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  background-color: var(--white-foreground);
  z-index: 4;
  opacity: ${(props) => props.$opacityReturn};
  transition: opacity 0.2s ease;
  user-select: none;

  & p {
    color: var(--dark-primary);
    font-weight: 400;
    font-family: var(--font-header);
  }
`;

export const SpanApiReturnStyled = styled.span`
  user-select: none;
  font-weight: 400;

  ${(props) =>
    props.$error &&
    css`
      color: #d5343a;
      background-color: var(--pink);
      border-radius: 50%;
      padding: 0.2rem;
    `}
  ${(props) =>
    props.$wait &&
    css`
      font-weight: 500;

      color: var(--secondary);
      animation: ${rotate} 2s linear infinite;
    `}
  ${(props) =>
    props.$check &&
    css`
      background-color: var(--light-green);
      color: var(--dark-primary);

      padding: 0.6rem;
      border-radius: 50%;
    `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Estilo dos inputs
export const InputStyled = styled.input`
  width: calc(100% - 48px);
  height: 4.8rem;
  box-sizing: border-box;
  padding-left: 1.2rem;
  padding-bottom: 0.2rem;
  margin: auto;
  margin-bottom: 0.8rem;
  display: block;
  border-radius: 0.8rem;
  border: 1px solid var(--card-border);

  font-family: var(--font-body);
  font-weight: 400;
  color: var(--black-foreground);
  background-color: transparent;
  box-shadow: var(--shadow-xs);
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 375px) {
    width: calc(100% - 36px);
  }

  ${(props) =>
    props.$lastInput &&
    css`
      padding-bottom: 0.2rem;
      margin-bottom: 2rem;
    `}
`;

export const DivCepInputStyled = styled.div`
  width: calc(100% - 48px);
  height: 4.8rem;
  box-sizing: border-box;
  padding: 0 1.6rem;
  margin: auto;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: var(--white-foreground);
  border-radius: 0.8rem;
  border: 1px solid rgba(230, 230, 230, 1);
  box-shadow: var(--shadow-md);

  @media screen and (max-width: 385px) {
    width: calc(100% - 36px);
  }
`;

export const CepInputStyled = styled(InputStyled)`
  min-width: none;
  width: 15rem;
  height: 100%;
  margin: 0;
  margin-bottom: 0.2rem;
  padding-bottom: 0;
  padding-left: 0;
  background-color: var(--white-foreground);
  font-family: var(--font-button);
  font-weight: 400;
  box-shadow: none;
  border: none;

  @media screen and (max-width: 385px) {
    width: 14rem;
  }
`;

export const PWarnCepStyled = styled.p`
  min-width: max-content;
  color: red;
  font-family: var(--font-body);
  font-weight: 400;
  padding-bottom: 1px;
  letter-spacing: 0.4px;
  visibility: ${(props) => (props.$noPassed ? 'visibe' : 'hidden')};

  /* transform: scaleY(1.1);
  padding-bottom: 0.2rem; */
`;

export const DivCepErrorStyled = styled.div`
  min-height: 4.8rem;
  height: auto;
  width: calc(100% - 48px);
  box-sizing: border-box;
  padding-left: 1.6rem;
  margin: auto;
  margin-top: 1.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0 0 0.8rem 0.8rem;
  box-shadow: var(--shadow-sm);
`;

export const PCepErrorStyled = styled.p`
  font-weight: 600;
  color: #d5343a;
`;

// Botão de envio
export const RegisterButtonStyled = styled(ButtonStyled)`
  border-radius: 0.8rem;
  margin-bottom: 0;
  color: var(--white-foreground);
  transition: all 0.15 ease;
  background-color: ${(props) => (props.$enable ? 'var(--secondary)' : 'var(--disable)')};
  &:hover {
    background-color: ${(props) =>
      props.$enable ? 'var(--secondary-hover)' : 'var(--disable-hover)'};
  }
`;

export const GoBackButtonStyled = styled(ButtonStyled)`
  background-color: hsla(234, 31%, 45%, 1);
  &:hover {
    background-color: hsla(234, 31%, 40%, 1);
  }
`;
