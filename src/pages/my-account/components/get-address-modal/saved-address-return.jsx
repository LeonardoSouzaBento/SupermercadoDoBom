import { ReturnWrapperSc, ProgressIconSc } from '@pages/my-account/components/ui';

const SavedAddressReturn = ({ savedAddress, opacityReturn }) => {
  return (
    <>
      {savedAddress === 'pending' && (
        <ReturnWrapperSc $opacityReturn={opacityReturn}>
          <ProgressIconSc className="material-symbols-outlined" $wait={true}>
            progress_activity
          </ProgressIconSc>

          <p style={{ width: '80%', textAlign: 'center' }}>Salvando seu endereço...</p>
        </ReturnWrapperSc>
      )}

      {savedAddress === 'saved' && (
        <ReturnWrapperSc $opacityReturn={opacityReturn}>
          <ProgressIconSc className="material-symbols-outlined">check</ProgressIconSc>

          <p style={{ width: '80%', textAlign: 'center' }}>Endereço salvo!</p>
        </ReturnWrapperSc>
      )}

      {savedAddress === 'error' && (
        <ReturnWrapperSc $opacityReturn={opacityReturn}>
          <ProgressIconSc className="material-symbols-outlined" $error={true}>
            exclamation
          </ProgressIconSc>

          <p style={{ width: '80%', textAlign: 'center' }}>
            <strong>Erro: </strong>não conseguimos pegar sua localização
          </p>
        </ReturnWrapperSc>
      )}
    </>
  );
};

export default SavedAddressReturn;
