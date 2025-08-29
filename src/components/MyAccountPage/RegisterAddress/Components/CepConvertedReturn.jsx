import { DivApiReturnStyled, SpanApiReturnStyled } from "../StylizedTags";
import { PValueStyled } from "../../../../pages/Cart/StylizedTagsCart";

const CepConvertedReturn = ({ cepConvertedState, opacityReturn }) => {
  return (
    <>
      {cepConvertedState === "catching" && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled
            className="material-symbols-outlined"
            $wait={true}
          >
            progress_activity
          </SpanApiReturnStyled>

          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            Convertendo endereço...
          </PValueStyled>
        </DivApiReturnStyled>
      )}

      {cepConvertedState === "error" && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled
            className="material-symbols-outlined"
            $error={true}
          >
            exclamation
          </SpanApiReturnStyled>

          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            <strong>Erro:</strong> ao converter seu CEP!
          </PValueStyled>
        </DivApiReturnStyled>
      )}
    </>
  );
};

export default CepConvertedReturn;
