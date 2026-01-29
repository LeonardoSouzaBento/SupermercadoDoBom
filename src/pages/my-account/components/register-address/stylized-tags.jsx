import { DivToCoverStyled } from '@components/generic-stylized-tags';
import styled, { css, keyframes } from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 10px;
  box-sizing: border-box;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
  opacity: ${(props) => props.$opacity};

  @media screen and (max-width: 993px) {
    justify-content: ${(props) => (props.$up ? 'flex-start' : 'center')};
  }

  .card {
    width: 100%;
    max-width: 420px;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
`;

export const DivApiReturnStyled = styled(DivToCoverStyled)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
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
      padding: 2px;
    `}
  ${(props) =>
    props.$wait &&
    css`
      font-weight: 500;

      color: var(--red-brand);
      animation: ${rotate} 2s linear infinite;
    `}
  ${(props) =>
    props.$check &&
    css`
      background-color: var(--light-green);
      color: var(--dark-primary);

      padding: 6px;
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

export const DivCepErrorStyled = styled.div`
  min-height: 48px;
  height: auto;
  width: calc(100% - 48px);
  box-sizing: border-box;
  padding-left: 16px;
  margin: auto;
  margin-top: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0 0 8px 8px;
  box-shadow: var(--shadow-sm);
`;

