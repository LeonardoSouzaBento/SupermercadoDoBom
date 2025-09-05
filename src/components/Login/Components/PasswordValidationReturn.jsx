import {
  DivForReturnStyled,
  DivRowStyled,
  SpanEmailStyled,
} from "../StylizedTags";
import { PValueStyled } from "../../../pages/Cart/StylizedTags";

const PasswordValidationReturn = ({ validacao }) => {
  return (
    <DivForReturnStyled>
      <DivRowStyled $first={true}>
        <PValueStyled $email={true}>
          <strong style={{ fontWeight: 500 }}>Sua senha deve ter:</strong>
        </PValueStyled>
      </DivRowStyled>

      <DivRowStyled>
        <SpanEmailStyled
          className="material-symbols-outlined"
          $check={validacao.tamanhoMinimo}
        >
          {validacao.tamanhoMinimo ? "check" : "exclamation"}
        </SpanEmailStyled>
        <PValueStyled $email={true}>8 digitos:</PValueStyled>
      </DivRowStyled>

      <DivRowStyled>
        <SpanEmailStyled
          className="material-symbols-outlined"
          $check={validacao.temMaiuscula}
        >
          {validacao.temMaiuscula ? "check" : "exclamation"}
        </SpanEmailStyled>
        <PValueStyled $email={true}>1 Maiúsculo(A-Z)</PValueStyled>
      </DivRowStyled>

      <DivRowStyled>
        <SpanEmailStyled
          className="material-symbols-outlined"
          $check={validacao.temMinuscula}
        >
          {validacao.temMinuscula ? "check" : "exclamation"}
        </SpanEmailStyled>
        <PValueStyled $email={true}>1 Minúsculo (a-z)</PValueStyled>
      </DivRowStyled>

      <DivRowStyled>
        <SpanEmailStyled
          className="material-symbols-outlined"
          $check={validacao.temNumero}
        >
          {validacao.temNumero ? "check" : "exclamation"}
        </SpanEmailStyled>
        <PValueStyled $email={true}>1 Número (0-9)</PValueStyled>
      </DivRowStyled>

      <DivRowStyled>
        <SpanEmailStyled
          className="material-symbols-outlined"
          $check={validacao.temSimbolo}
        >
          {validacao.temSimbolo ? "check" : "exclamation"}
        </SpanEmailStyled>
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