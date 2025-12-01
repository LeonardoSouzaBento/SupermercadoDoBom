import { PValueStyled } from "@pages/Cart/StylizedTags";
import styled, { css } from "styled-components";

const DivForReturnStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(247, 249, 250);
  padding: 16px;
  padding-top: 12px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

const DivRowStyled = styled.div`
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
    
  & span {
    background-color: transparent;
    font-size: 1.4em;
    font-weight: 500;
    color: var(--dark-red);
    border-radius: 50%;
    ${(props) =>
      props.$check &&
      css`
        font-size: 1.1em;
        font-weight: 600;
        background-color: var(--light-green);
        color: var(--purple);
        padding: 1px;
        margin-left: 2px;
      `}
  }
`;

const PasswordValidationReturn = ({ validacao }) => {
  return (
    <DivForReturnStyled>
      <DivRowStyled $first={true}>
        <PValueStyled $email={true}>
          <strong style={{ fontWeight: 600 }}>Sua senha deve ter:</strong>
        </PValueStyled>
      </DivRowStyled>

      <DivRowStyled $check={validacao.tamanhoMinimo}>
        <span className="material-symbols-outlined">
          {validacao.tamanhoMinimo ? "check" : "exclamation"}
        </span>
        <PValueStyled $email={true}>8 digitos:</PValueStyled>
      </DivRowStyled>

      <DivRowStyled $check={validacao.temMaiuscula}>
        <span className="material-symbols-outlined">
          {validacao.temMaiuscula ? "check" : "exclamation"}
        </span>
        <PValueStyled $email={true}>1 Maiúsculo(A-Z)</PValueStyled>
      </DivRowStyled>

      <DivRowStyled $check={validacao.temMinuscula}>
        <span className="material-symbols-outlined">
          {validacao.temMinuscula ? "check" : "exclamation"}
        </span>
        <PValueStyled $email={true}>1 Minúsculo (a-z)</PValueStyled>
      </DivRowStyled>

      <DivRowStyled $check={validacao.temNumero}>
        <span className="material-symbols-outlined">
          {validacao.temNumero ? "check" : "exclamation"}
        </span>
        <PValueStyled $email={true}>1 Número (0-9)</PValueStyled>
      </DivRowStyled>

      <DivRowStyled $check={validacao.temSimbolo}>
        <span className="material-symbols-outlined">
          {validacao.temSimbolo ? "check" : "exclamation"}
        </span>
        <DivRowStyled $last={true}>
          <PValueStyled $email={true} $last={true}>
            1 Símbolo especial
          </PValueStyled>
          <PValueStyled $email={true} $last={true}>
            (!@#$%^&*)
          </PValueStyled>
        </DivRowStyled>
      </DivRowStyled>
    </DivForReturnStyled>
  );
};

export default PasswordValidationReturn;

