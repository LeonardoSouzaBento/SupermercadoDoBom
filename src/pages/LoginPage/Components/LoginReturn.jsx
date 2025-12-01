import {
  DivApiReturnStyled,
  SpanApiReturnStyled,
} from "@pages/MyAccount/RegisterAddress/StylizedTags";
import { PValueStyled } from "@pages/Cart/StylizedTags";

const LoginReturn = ({ loginState }) => {
  return (
    <>
      {loginState === "checking" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled
            className="material-symbols-rounded"
            $wait={true}
          >
            progress_activity
          </SpanApiReturnStyled>
          <PValueStyled
            style={{
              width: "80%",
              textAlign: "center",
              color: "var(--dark-purple)",
              fontFamily: "var(--h-font)",
              scale: 1.03,
            }}
          >
            Consultando seu cadastro...
          </PValueStyled>
        </DivApiReturnStyled>
      )}

      {loginState === "pending" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled
            className="material-symbols-rounded"
            $wait={true}
          >
            progress_activity
          </SpanApiReturnStyled>
          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            Fazendo Login...
          </PValueStyled>
        </DivApiReturnStyled>
      )}

      {loginState === "completed" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled
            className="material-symbols-outlined"
            $check={true}
          >
            check
          </SpanApiReturnStyled>
          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            Sucesso! Usuário logado.
          </PValueStyled>
        </DivApiReturnStyled>
      )}

      {loginState === "error" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled
            className="material-symbols-rounded"
            $error={true}
          >
            exclamation
          </SpanApiReturnStyled>
          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            <strong>Erro: </strong> o login falhou, tente novamente ou tente de
            outro modo.
          </PValueStyled>
        </DivApiReturnStyled>
      )}

      {/*Para reset de senha*/}
      {loginState === "resetPending" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled
            className="material-symbols-rounded"
            $wait={true}
          >
            progress_activity
          </SpanApiReturnStyled>
          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            Por favor, aguarde...
          </PValueStyled>
        </DivApiReturnStyled>
      )}

      {loginState === "resetSucess" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled className="material-symbols-outlined"  $check={true}>
            check
          </SpanApiReturnStyled>
          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            Verifique seu e-mail.
          </PValueStyled>
        </DivApiReturnStyled>
      )}

      {loginState === "resetError" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled
            className="material-symbols-rounded"
            $error={true}
          >
            error
          </SpanApiReturnStyled>
          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            Ocorreu um erro ao enviar o e-mail de recuperação.
          </PValueStyled>
        </DivApiReturnStyled>
      )}
    </>
  );
};

export default LoginReturn;


