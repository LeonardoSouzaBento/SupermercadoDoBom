import {
  DivApiReturnStyled,
  SpanApiReturnStyled,
} from "@pages/MyAccount/RegisterAddress/StylizedTags";

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
          <p>
            Consultando seu cadastro...
          </p>
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
          <p>
            Fazendo Login...
          </p>
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
          <p>
            Sucesso! Usuário logado.
          </p>
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
          <p>
            <strong>Erro: </strong> o login falhou, tente novamente ou tente de
            outro modo.
          </p>
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
          <p>
            Por favor, aguarde...
          </p>
        </DivApiReturnStyled>
      )}

      {loginState === "resetSucess" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled className="material-symbols-outlined"  $check={true}>
            check
          </SpanApiReturnStyled>
          <p>
            Verifique seu e-mail.
          </p>
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
          <p>
            Ocorreu um erro ao enviar o e-mail de recuperação.
          </p>
        </DivApiReturnStyled>
      )}
    </>
  );
};

export default LoginReturn;



