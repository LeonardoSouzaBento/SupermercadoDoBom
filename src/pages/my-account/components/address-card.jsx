import { DivToCoverStyled } from '@components/generic-stylized-tags';
import { Button, Card, CardContent, CardHeader, CardTitle, MuiIcon } from '@ui/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { AddressWrapperStyled, CheckIconStyled, StatusStyled } from '../ui/index';

export const Address = ({ setSeeRegisterAddress, isDataComplete, userContact, userAddress }) => {
  function GetInitialsNameState() {
    const palavras = userAddress.estado.split(' ');
    const iniciais = palavras.map((palavra) => palavra.charAt(0));
    const result = iniciais.join('');
    return result;
  }
  const initialNameState = GetInitialsNameState();
  const [seeLoginWarn, setSeeLoginWarn] = useState(false);
  const navigate = useNavigate();

  function showLoginWarn() {
    setSeeLoginWarn(true);
    setTimeout(() => {
      setSeeLoginWarn(false);
      navigate('/fazer-login');
    }, 3000);
  }

  function handleRegisterAddress() {
    if (userContact.email) {
      setSeeRegisterAddress(true);
    } else {
      showLoginWarn();
    }
  }

  return (
    <Card>
      <CardHeader
        mb={1.25}
        separator
        styles={css`
          width: 100%;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        `}>
        <CardTitle>
          <MuiIcon fill={1} icon="location_home" size="4xl" />
          <h3>Endereço para entrega</h3>
        </CardTitle>

        {!isDataComplete.address ? (
          <StatusStyled $address={true}>
            <div>
              <MuiIcon icon={isDataComplete.address ? 'check' : 'priority_high'} size="xs" />
              <p>{isDataComplete.address ? 'Endereço salvo!' : 'Sem endereço!'}</p>
            </div>
          </StatusStyled>
        ) : (
          <CheckIconStyled className="material-symbols-outlined">check</CheckIconStyled>
        )}
      </CardHeader>

      <CardContent className="card-content">
        <AddressWrapperStyled>
          <div className="info-wrapper">
            <div className="title first">
              <h6>Rua:</h6>
              <p>{!userAddress.rua ? 'Não fornecido' : userAddress.rua}</p>
            </div>
            <div className="title">
              <h6>Número:</h6>
              <p>{!userAddress.numero ? 'Não fornecido' : userAddress.numero}</p>
            </div>
            <div className="title">
              <h6>Complemento:</h6>
              <p>
                {!userAddress.complemento ? 'Não fornecido (opcional)' : userAddress.complemento}
              </p>
            </div>
            <div className="title">
              <h6>Cidade (UF):</h6>
              <p>
                {!userAddress.cidade
                  ? 'Não fornecido'
                  : `${userAddress.cidade} (${
                      initialNameState ? initialNameState : userAddress.estado
                    })`}
              </p>
            </div>
          </div>

          <Button
            size="icon-sm"
            variant="secondary"
            onClick={handleRegisterAddress}
            styles={css`
              position: absolute;
              bottom: 0px;
              right: 0px;
            `}>
            <MuiIcon icon="edit" size="3xl" weight={600} />
          </Button>

          {seeLoginWarn && (
            <DivToCoverStyled>
              <p
                style={{
                  width: '100%',
                  textAlign: 'center',
                  color: 'var(--red-brand)',
                  fontWeight: 600,
                }}>
                Faça login primeiro!
              </p>
            </DivToCoverStyled>
          )}
        </AddressWrapperStyled>
      </CardContent>
    </Card>
  );
};

export default Address;
