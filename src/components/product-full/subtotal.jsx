import { flexCenter } from '@/styles/baseStyles';
import styled from 'styled-components';

const DivSubStyled = styled.div`
  height: 4.8rem;
  width: 100%;
  padding: 0 1.6rem;
  ${flexCenter}
  gap: 0.8rem;
  background-color: var(--background);
  border-radius: 0.8rem;
  position: relative;
  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: 0;
  }
  @media screen and (min-width: 345px) and (max-width: 420px) {
    max-width: 35%;
  }
  @media screen and (min-width: 420px) and (max-width: 577px) {
    width: max-content;
  }
  @media screen and (min-width: 577px) and (max-width: 850px) {
    flex-direction: column;
    gap: 0;
  }

  & > div {
    ${flexCenter}
    background-color: var(--background);
    border-radius: 0.8rem;
    & > p {
      font-size: var(--text-sm);
      font-weight: 500;
      letter-spacing: 0.35px;
      text-transform: uppercase;
      width: max-content;
      padding: 0;
      color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export const Subtotal = ({ subtotal }) => {
  return (
    <DivSubStyled>
      {subtotal == '0,00' ? (
        <div>
          <p>Subtotal:</p>
        </div>
      ) : (
        <>
          <p>Subtotal:</p>
          <p>R$ {subtotal}</p>
        </>
      )}
    </DivSubStyled>
  );
};
