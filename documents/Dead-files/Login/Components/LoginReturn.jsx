import { DivApiReturnStyled, SpanApiReturnStyled } from "@pages/MyAccount/RegisterAddress/StylizedTags";
import { PValueStyled } from "@pages/Cart/StylizedTags";

const LoginReturn = ({ loginState }) => {
  return (
    <>
      {loginState === "checking" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled className="material-symbols-outlined" $wait={true}>
            progress_activity
          </SpanApiReturnStyled>
          <PValueStyled style={{ width: "80%", textAlign: "center" }}>Consultando seu cadastro...</PValueStyled>
        </DivApiReturnStyled>
      )}

      {loginState === "pending" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled className="material-symbols-outlined" $wait={true}>
            progress_activity
          </SpanApiReturnStyled>
          <PValueStyled style={{ width: "80%", textAlign: "center" }}>Fazendo Login...</PValueStyled>
        </DivApiReturnStyled>
      )}

      {loginState === "completed" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled className="material-symbols-outlined" $wait={false}>
            check
          </SpanApiReturnStyled>
          <PValueStyled style={{ width: "80%", textAlign: "center" }}>Sucesso! Usuário logado.</PValueStyled>
        </DivApiReturnStyled>
      )}

      {loginState === "error" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled className="material-symbols-outlined" $error={true}>
            exclamation
          </SpanApiReturnStyled>
          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            <strong>Erro: </strong> o login falhou, tente novamente ou tente de outro modo.
          </PValueStyled>
        </DivApiReturnStyled>
      )}
    </>
  );
};

export default LoginReturn;