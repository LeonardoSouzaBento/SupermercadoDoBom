const SavedAddressReturn = ({ savedAddress, opacityReturn }) => {
  return (
    <>
      {savedAddress === "pending" && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled
            className="material-symbols-outlined"
            $wait={true}
          >
            progress_activity
          </SpanApiReturnStyled>

          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            Salvando seu endereço...
          </PValueStyled>
        </DivApiReturnStyled>
      )}

      {savedAddress === "saved" && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled className="material-symbols-outlined">
            check
          </SpanApiReturnStyled>

          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            Endereço salvo!
          </PValueStyled>
        </DivApiReturnStyled>
      )}

      {savedAddress === "error" && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled
            className="material-symbols-outlined"
            $error={true}
          >
            exclamation
          </SpanApiReturnStyled>

          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            <strong>Erro: </strong>não conseguimos pegar sua localização
          </PValueStyled>
        </DivApiReturnStyled>
      )}
    </>
  );
};

export default SavedAddressReturn;

