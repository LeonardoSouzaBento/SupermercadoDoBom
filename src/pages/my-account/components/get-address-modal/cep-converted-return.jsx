import { ReturnWrapperSc, ProgressIconSc } from '@pages/my-account/components/ui';

const CepConvertedReturn = ({ cepConvertedState, opacityReturn }) => {
  return (
    <>
      {cepConvertedState === 'pending' && (
        <ReturnWrapperSc $opacityReturn={opacityReturn}>
          <ProgressIconSc className="material-symbols-outlined" $wait={true}>
            progress_activity
          </ProgressIconSc>

          <p style={{ width: '80%', textAlign: 'center' }}>Convertendo endereço...</p>
        </ReturnWrapperSc>
      )}

      {cepConvertedState === 'error' && (
        <ReturnWrapperSc $opacityReturn={opacityReturn}>
          <ProgressIconSc className="material-symbols-outlined" $error={true}>
            exclamation
          </ProgressIconSc>

          <p style={{ width: '80%', textAlign: 'center' }}>
            <strong>Erro:</strong> ao converter seu CEP!
          </p>
        </ReturnWrapperSc>
      )}
    </>
  );
};

export default CepConvertedReturn;
