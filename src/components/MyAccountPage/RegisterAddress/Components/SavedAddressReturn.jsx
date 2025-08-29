const SavedAddressReturn = ({ savedAddress, opacityReturn }) => {
  return (
    <>
      {(savedAddress === "pending" || savedAddress === "saved") && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled
            className="material-symbols-outlined"
            $wait={savedAddress === "pending"}
          >
            {savedAddress === "pending" ? "progress_activity" : "check"}
          </SpanApiReturnStyled>

          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            {savedAddress === "pending"
              ? "Salvando seu endereço..."
              : "Endereço salvo!"}
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
