import { DivApiReturnStyled, SpanApiReturnStyled } from "../StylizedTags";

const CepConvertedReturn = ({ cepConvertedState, opacityReturn }) => {
  return (
    <>
      {cepConvertedState === "pending" && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled
            className="material-symbols-outlined"
            $wait={true}
          >
            progress_activity
          </SpanApiReturnStyled>

          <p style={{ width: "80%", textAlign: "center" }}>
            Convertendo endereço...
          </p>
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

          <p style={{ width: "80%", textAlign: "center" }}>
            <strong>Erro:</strong> ao converter seu CEP!
          </p>
        </DivApiReturnStyled>
      )}
    </>
  );
};

export default CepConvertedReturn;


