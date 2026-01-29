import { DivToCoverStyled } from '@components/generic-stylized-tags';
import { Button, MuiIcon } from '@ui/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { AddressWrapperStyled, DivStyled, DivThreeStyled, SpanCheckStyled } from '../StylizedTags';
import { CardHeaderStyled, CardTitleStyled, StatusStyled } from '../ui';

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
    setSeeRegisterAddress(true);
    // if (userContact.email) {
    //   setSeeRegisterAddress(true);
    // } else {
    //   showLoginWarn();
    // }
  }

  return (
    <DivThreeStyled>
      {isDataComplete.address && (
        <SpanCheckStyled className="material-symbols-outlined">check</SpanCheckStyled>
      )}

      <CardHeaderStyled>
        <CardTitleStyled>
          <MuiIcon fill={1} icon="location_home" size="4xl" />
          <h3 style={{ marginBottom: '0px' }}>Endereço para entrega</h3>
        </CardTitleStyled>

        {!isDataComplete.address && (
          <StatusStyled $address={true}>
            <div>
              <span className="material-symbols-rounded">
                {isDataComplete.address ? 'check' : 'priority_high'}
              </span>
              <p>{isDataComplete.address ? 'Endereço salvo!' : 'Sem endereço!'}</p>
            </div>
          </StatusStyled>
        )}
      </CardHeaderStyled>

      <DivStyled>
        <AddressWrapperStyled>
          <div className="part-address first">
            <div className="title first">
              <h6>Rua:</h6>
              <p>{!userAddress.rua ? 'Não fornecido' : userAddress.rua}</p>
            </div>

            <div className="title">
              <h6>Número:</h6>
              <p>{!userAddress.numero ? 'Não fornecido' : userAddress.numero}</p>
            </div>
          </div>

          <div className="part-address first">
            <div className="title">
              <h6>Complemento:</h6>
              <p>
                {!userAddress.complemento ? 'Não fornecido (opcional)' : userAddress.complemento}
              </p>
            </div>

            <div className="title">
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
          </div>

          <Button
            size="icon-sm"
            variant="secondary"
            onClick={handleRegisterAddress}
            styles={css`
              position: absolute;
              bottom: 16px;
              right: 16px;
            `}>
            <MuiIcon icon="edit" size="3xl" weight={600} />
          </Button>

          {seeLoginWarn && (
            <DivToCoverStyled>
              <p
                style={{
                  width: '100%',
                  textAlign: 'center',
                  color: 'var(--red-brand-hover)',
                  fontWeight: 500,
                }}>
                Faça login primeiro!
              </p>
            </DivToCoverStyled>
          )}
        </AddressWrapperStyled>
      </DivStyled>
    </DivThreeStyled>
  );
};

export default Address;

