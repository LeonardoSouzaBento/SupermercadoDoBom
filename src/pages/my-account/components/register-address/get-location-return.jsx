import { DivApiReturnStyled, SpanApiReturnStyled } from './stylized-tags';

const GetLocationReturn = ({ getLocationStatus, opacityReturn }) => {
  return (
    <>
      {(getLocationStatus === 'inPermission' || getLocationStatus === 'bloqued') && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          {getLocationStatus === 'inPermission' ? (
            <p>
              <strong>Permita</strong> pegar a sua localização.
            </p>
          ) : (
            <p>
              <strong>Localização bloqueda </strong>. Permita o acesso ou tente de outro modo.
            </p>
          )}
        </DivApiReturnStyled>
      )}

      {getLocationStatus === 'pending' && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled className="material-symbols-outlined" $wait={true}>
            progress_activity
          </SpanApiReturnStyled>
          <p>Pegando sua localização</p>
        </DivApiReturnStyled>
      )}

      {getLocationStatus === 'error' && (
        <DivApiReturnStyled $opacityReturn={opacityReturn}>
          <SpanApiReturnStyled className="material-symbols-outlined" $error={true}>
            exclamation
          </SpanApiReturnStyled>
          <p>
            <strong>Erro: </strong>não conseguimos pegar sua localização
          </p>
        </DivApiReturnStyled>
      )}
    </>
  );
};

export default GetLocationReturn;

