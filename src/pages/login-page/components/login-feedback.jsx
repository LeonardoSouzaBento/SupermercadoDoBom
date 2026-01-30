import { ReturnWrapperSc, ProgressIconSc } from '@pages/my-account/components/ui';

const LoginReturn = ({ loginState }) => {
  return (
    <>
      {loginState === 'checking' && (
        <ReturnWrapperSc>
          <ProgressIconSc className="material-symbols-rounded" $wait={true}>
            progress_activity
          </ProgressIconSc>
          <p>Consultando seu cadastro...</p>
        </ReturnWrapperSc>
      )}

      {loginState === 'pending' && (
        <ReturnWrapperSc>
          <ProgressIconSc className="material-symbols-rounded" $wait={true}>
            progress_activity
          </ProgressIconSc>
          <p>Fazendo Login...</p>
        </ReturnWrapperSc>
      )}

      {loginState === 'completed' && (
        <ReturnWrapperSc>
          <ProgressIconSc className="material-symbols-outlined" $check={true}>
            check
          </ProgressIconSc>
          <p>Sucesso! Usuário logado.</p>
        </ReturnWrapperSc>
      )}

      {loginState === 'error' && (
        <ReturnWrapperSc>
          <ProgressIconSc className="material-symbols-rounded" $error={true}>
            exclamation
          </ProgressIconSc>
          <p>
            <strong>Erro: </strong> o login falhou, tente novamente ou tente de outro modo.
          </p>
        </ReturnWrapperSc>
      )}

      {/*Para reset de senha*/}
      {loginState === 'resetPending' && (
        <ReturnWrapperSc>
          <ProgressIconSc className="material-symbols-rounded" $wait={true}>
            progress_activity
          </ProgressIconSc>
          <p>Por favor, aguarde...</p>
        </ReturnWrapperSc>
      )}

      {loginState === 'resetSucess' && (
        <ReturnWrapperSc>
          <ProgressIconSc className="material-symbols-outlined" $check={true}>
            check
          </ProgressIconSc>
          <p>Verifique seu e-mail.</p>
        </ReturnWrapperSc>
      )}

      {loginState === 'resetError' && (
        <ReturnWrapperSc>
          <ProgressIconSc className="material-symbols-rounded" $error={true}>
            error
          </ProgressIconSc>
          <p>Ocorreu um erro ao enviar o e-mail de recuperação.</p>
        </ReturnWrapperSc>
      )}
    </>
  );
};

export default LoginReturn;
