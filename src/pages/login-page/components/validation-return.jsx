import styled, { css } from 'styled-components';

const WrapperSc = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: var(--background);
  padding: 16px;
  padding-top: 12px;
  margin-bottom: 21px;
  border-radius: 9px;
`;

const RowSc = styled.div`
  min-height: 32px;
  width: max-content;
  display: flex;
  align-items: center;
  gap: 8px;

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
  & > p {
    font-size: var(--text-sm);
  }
  & span {
    background-color: transparent;

    font-weight: 500;
    color: var(--red-brand-hover);
    border-radius: 50%;
    ${(props) =>
      props.$check &&
      css`
        font-weight: 600;
        background-color: var(--light-green);
        color: var(--primary);
        padding: 1px;
        margin-left: 2px;
      `}
  }
`;

const ExampleSc = styled.p`
  background-color: var(--white-foreground);
  padding: 8px;
  font-size: var(--text-sm);
  margin-top: 8px;
  border-radius: 6px;
`;

const PasswordValidationReturn = ({ validacao }) => {
  return (
    <WrapperSc>
      <RowSc $first>
        <p>
          <strong>Sua senha deve ter:</strong>
        </p>
      </RowSc>

      <RowSc $check={validacao.tamanhoMinimo}>
        <span className="material-symbols-outlined">
          {validacao.tamanhoMinimo ? 'check' : 'exclamation'}
        </span>
        <p>8 digitos:</p>
      </RowSc>

      <RowSc $check={validacao.temMaiuscula}>
        <span className="material-symbols-outlined">
          {validacao.temMaiuscula ? 'check' : 'exclamation'}
        </span>
        <p>1 Maiúsculo(A-Z)</p>
      </RowSc>

      <RowSc $check={validacao.temMinuscula}>
        <span className="material-symbols-outlined">
          {validacao.temMinuscula ? 'check' : 'exclamation'}
        </span>
        <p>1 Minúsculo (a-z)</p>
      </RowSc>

      <RowSc $check={validacao.temNumero}>
        <span className="material-symbols-outlined">
          {validacao.temNumero ? 'check' : 'exclamation'}
        </span>
        <p>1 Número (0-9)</p>
      </RowSc>

      <RowSc $check={validacao.temSimbolo}>
        <span className="material-symbols-outlined">
          {validacao.temSimbolo ? 'check' : 'exclamation'}
        </span>
        <RowSc $last>
          <p>1 Símbolo especial</p>
          <p>(!@#$%^&*)</p>
        </RowSc>
      </RowSc>
      <ExampleSc>Exemplo: J@iro450Love</ExampleSc>
    </WrapperSc>
  );
};

export default PasswordValidationReturn;
