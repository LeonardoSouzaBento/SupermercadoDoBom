import { DivApiReturnStyled, SpanApiReturnStyled } from "../StylizedTags";
import { PValueStyled } from "../../../../pages/Cart/StylizedTagsCart";

const GetLocationReturn = ({ getLocationStatus, opacityReturn }) => {
  return (
    <>
      {(getLocationStatus === "inPermission" ||
        getLocationStatus === "bloqued") && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          {getLocationStatus === "inPermission" ? (
            <PValueStyled style={{ width: "80%", textAlign: "center" }}>
              <strong>Permita</strong> pegar a sua localização.
            </PValueStyled>
          ) : (
            <PValueStyled style={{ width: "80%", textAlign: "center" }}>
              <strong>Localização bloqueda </strong>. Permita o acesso ou tente
              de outro modo.
            </PValueStyled>
          )}
        </DivApiReturnStyled>
      )}

      {(getLocationStatus === "catching" || getLocationStatus === "error") && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          {getLocationStatus === "catching" ? (
            <>
              <SpanApiReturnStyled
                className="material-symbols-outlined"
                $wait={true}
              >
                progress_activity
              </SpanApiReturnStyled>
              <PValueStyled style={{ width: "80%", textAlign: "center" }}>
                Pegando sua localização
              </PValueStyled>
            </>
          ) : (
            <>
              <SpanApiReturnStyled
                className="material-symbols-outlined"
                $error={true}
              >
                exclamation
              </SpanApiReturnStyled>
              <PValueStyled style={{ width: "80%", textAlign: "center" }}>
                <strong>Erro: </strong>não conseguimos pegar sua localização
              </PValueStyled>
            </>
          )}
        </DivApiReturnStyled>
      )}
    </>
  );
};

export default GetLocationReturn;
