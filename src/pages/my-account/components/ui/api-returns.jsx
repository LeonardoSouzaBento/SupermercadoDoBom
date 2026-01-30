import { DivToCoverSc } from '@/components/generic-tags';
import styled, { css, keyframes } from 'styled-components';

export const ReturnWrapperSc = styled(DivToCoverSc)`
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

export const ProgressIconSc = styled.span`
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
