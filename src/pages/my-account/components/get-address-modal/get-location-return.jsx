import { ReturnWrapperSc, ProgressIconSc } from '@pages/my-account/components/ui';

const GetLocationReturn = ({ getLocationStatus, opacityReturn }) => {
  return (
    <>
      {(getLocationStatus === 'inPermission' || getLocationStatus === 'bloqued') && (
        <ReturnWrapperSc $opacityReturn={opacityReturn}>
          {getLocationStatus === 'inPermission' ? (
            <p>
              <strong>Permita</strong> pegar a sua localização.
            </p>
          ) : (
            <p>
              <strong>Localização bloqueda </strong>. Permita o acesso ou tente de outro modo.
            </p>
          )}
        </ReturnWrapperSc>
      )}

      {getLocationStatus === 'pending' && (
        <ReturnWrapperSc $opacityReturn={opacityReturn}>
          <ProgressIconSc className="material-symbols-outlined" $wait={true}>
            progress_activity
          </ProgressIconSc>
          <p>Pegando sua localização</p>
        </ReturnWrapperSc>
      )}

      {getLocationStatus === 'error' && (
        <ReturnWrapperSc $opacityReturn={opacityReturn}>
          <ProgressIconSc className="material-symbols-outlined" $error={true}>
            exclamation
          </ProgressIconSc>
          <p>
            <strong>Erro: </strong>não conseguimos pegar sua localização
          </p>
        </ReturnWrapperSc>
      )}
    </>
  );
};

export default GetLocationReturn;
