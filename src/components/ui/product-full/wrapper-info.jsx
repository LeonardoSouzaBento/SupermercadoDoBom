import { flexCenter } from '@/styles/baseStyles';
import styled from 'styled-components';

export const WrapperInfoStyled = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: column;
  & div {
    width: 100%;
  }
  & p {
    max-width: max-content;
    text-align: left;
    -webkit-user-select: none; /* Safari, Chrome */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    user-select: none; /* Padrão */
  }
  & > div {
    width: 100%;
    max-width: max-content;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
    padding: 12px 0;
    margin-bottom: 16px;
    min-height: 5.6rem;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);

    & > p {
      line-height: 1.4;

      @media screen and (max-width: 577px) {
        max-width: 35rem;
      }
      @media screen and (min-width: 577px) {
        max-width: 33rem;
      }
    }
    & #price {
      font-size: var(--text-lg);
      font-weight: 600;
    }
  }
`;
