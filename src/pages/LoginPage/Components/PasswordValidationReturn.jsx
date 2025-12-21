import styled, { css } from "styled-components";

const DivForReturnStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(247, 249, 250);
  padding: 1.6rem;
  padding-top: 1.2rem;
  margin-bottom: 1.6rem;
  border-radius: 0.8rem;
`;

const DivRowStyled = styled.div`
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
    
  & span {
    background-color: transparent;
    
    font-weight: 500;
    color: var(--secondary-hover);
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

const PasswordValidationReturn = ({ validacao }) => {
  return (
    <DivForReturnStyled>
      <DivRowStyled $first={true}>
        <p>
          <strong style={{ fontWeight: 600 }}>Sua senha deve ter:</strong>
        </p>
      </DivRowStyled>

      <DivRowStyled $check={validacao.tamanhoMinimo}>
        <span className="material-symbols-outlined">
          {validacao.tamanhoMinimo ? "check" : "exclamation"}
        </span>
        <p>8 digitos:</p>
      </DivRowStyled>

      <DivRowStyled $check={validacao.temMaiuscula}>
        <span className="material-symbols-outlined">
          {validacao.temMaiuscula ? "check" : "exclamation"}
        </span>
        <p>1 Maiúsculo(A-Z)</p>
      </DivRowStyled>

      <DivRowStyled $check={validacao.temMinuscula}>
        <span className="material-symbols-outlined">
          {validacao.temMinuscula ? "check" : "exclamation"}
        </span>
        <p>1 Minúsculo (a-z)</p>
      </DivRowStyled>

      <DivRowStyled $check={validacao.temNumero}>
        <span className="material-symbols-outlined">
          {validacao.temNumero ? "check" : "exclamation"}
        </span>
        <p>1 Número (0-9)</p>
      </DivRowStyled>

      <DivRowStyled $check={validacao.temSimbolo}>
        <span className="material-symbols-outlined">
          {validacao.temSimbolo ? "check" : "exclamation"}
        </span>
        <DivRowStyled>
          <p>
            1 Símbolo especial
          </p>
          <p>
            (!@#$%^&*)
          </p>
        </DivRowStyled>
      </DivRowStyled>
    </DivForReturnStyled>
  );
};

export default PasswordValidationReturn;


