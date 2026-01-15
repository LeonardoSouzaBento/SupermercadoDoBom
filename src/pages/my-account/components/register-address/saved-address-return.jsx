import React from 'react';

const SavedAddressReturn = ({ savedAddress, opacityReturn }) => {
  return (
    <>
      {savedAddress === 'pending' && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled className="material-symbols-outlined" $wait={true}>
            progress_activity
          </SpanApiReturnStyled>

          <p style={{ width: '80%', textAlign: 'center' }}>Salvando seu endereço...</p>
        </DivApiReturnStyled>
      )}

      {savedAddress === 'saved' && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled className="material-symbols-outlined">check</SpanApiReturnStyled>

          <p style={{ width: '80%', textAlign: 'center' }}>Endereço salvo!</p>
        </DivApiReturnStyled>
      )}

      {savedAddress === 'error' && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled className="material-symbols-outlined" $error={true}>
            exclamation
          </SpanApiReturnStyled>

          <p style={{ width: '80%', textAlign: 'center' }}>
            <strong>Erro: </strong>não conseguimos pegar sua localização
          </p>
        </DivApiReturnStyled>
      )}
    </>
  );
};

export default SavedAddressReturn;
