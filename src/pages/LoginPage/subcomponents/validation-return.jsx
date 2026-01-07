import styled, { css } from 'styled-components';

const WrapperStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: var(--background);
  padding: 1.6rem;
  padding-top: 1.2rem;
  margin-bottom: 21px;
  border-radius: 0.9rem;
`;

const RowStyled = styled.div`
  min-height: 3.2rem;
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media screen and (max-width: 375px) {
    align-items: flex-start;
  }
  ${(props) =>
    props.$last &&
    css`
      @media screen and (max-width: 375px) {
        flex-direction: column;
        gap: 0.4rem;
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
        margin-left: 0.2rem;
      `}
  }
`;

const ExampleStyled = styled.p`
  background-color: var(--white-foreground);
  padding: 8px;
  font-size: var(--text-sm);
  margin-top: 8px;
  border-radius: 6px;
`;

const PasswordValidationReturn = ({ validacao }) => {
  return (
    <WrapperStyled>
      <RowStyled $first>
        <p>
          <strong>Sua senha deve ter:</strong>
        </p>
      </RowStyled>

      <RowStyled $check={validacao.tamanhoMinimo}>
        <span className="material-symbols-outlined">
          {validacao.tamanhoMinimo ? 'check' : 'exclamation'}
        </span>
        <p>8 digitos:</p>
      </RowStyled>

      <RowStyled $check={validacao.temMaiuscula}>
        <span className="material-symbols-outlined">
          {validacao.temMaiuscula ? 'check' : 'exclamation'}
        </span>
        <p>1 Maiúsculo(A-Z)</p>
      </RowStyled>

      <RowStyled $check={validacao.temMinuscula}>
        <span className="material-symbols-outlined">
          {validacao.temMinuscula ? 'check' : 'exclamation'}
        </span>
        <p>1 Minúsculo (a-z)</p>
      </RowStyled>

      <RowStyled $check={validacao.temNumero}>
        <span className="material-symbols-outlined">
          {validacao.temNumero ? 'check' : 'exclamation'}
        </span>
        <p>1 Número (0-9)</p>
      </RowStyled>

      <RowStyled $check={validacao.temSimbolo}>
        <span className="material-symbols-outlined">
          {validacao.temSimbolo ? 'check' : 'exclamation'}
        </span>
        <RowStyled $last>
          <p>1 Símbolo especial</p>
          <p>(!@#$%^&*)</p>
        </RowStyled>
      </RowStyled>
      <ExampleStyled>
        Exemplo: J@iro450Love
      </ExampleStyled>
    </WrapperStyled>
  );
};

export default PasswordValidationReturn;
