import { DivToCoverStyled } from '@components/GenericStylizedTags';
import { Button, MuiIcon } from '@ui/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import {
  DivAddressStyled,
  DivFormStyled,
  DivHalfAddressStyled,
  DivStyled,
  DivThreeStyled,
  H2v2Styled,
  H3Styled,
  Pv2Styled,
  SpanCheckStyled,
} from '../StylizedTags';
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
    if (userContact.email) {
      setSeeRegisterAddress(true);
    } else {
      showLoginWarn();
    }
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
        <DivAddressStyled>
          <DivHalfAddressStyled $first={true}>
            <DivFormStyled $first={true}>
              <H3Styled>Rua:</H3Styled>
              <Pv2Styled>{!userAddress.rua ? 'Não fornecido' : userAddress.rua}</Pv2Styled>
            </DivFormStyled>

            <DivFormStyled>
              <H3Styled>Número:</H3Styled>
              <Pv2Styled>{!userAddress.numero ? 'Não fornecido' : userAddress.numero}</Pv2Styled>
            </DivFormStyled>
          </DivHalfAddressStyled>

          <DivHalfAddressStyled>
            <DivFormStyled $first={true}>
              <H3Styled>Complemento:</H3Styled>
              <Pv2Styled>
                {!userAddress.complemento ? 'Não fornecido (opcional)' : userAddress.complemento}
              </Pv2Styled>
            </DivFormStyled>

            <DivFormStyled>
              <DivFormStyled>
                <H3Styled>Cidade (UF):</H3Styled>
                <Pv2Styled>
                  {!userAddress.cidade
                    ? 'Não fornecido'
                    : `${userAddress.cidade} (${
                        initialNameState ? initialNameState : userAddress.estado
                      })`}
                </Pv2Styled>
              </DivFormStyled>
            </DivFormStyled>
          </DivHalfAddressStyled>

          <Button
            size="sm-icon"
            variant="secondary"
            onClick={handleRegisterAddress}
            customStyles={css`
              position: absolute;
              top: 1.6rem;
              right: 1.6rem;
            `}>
            <MuiIcon icon="edit" size="3xl" weight={600} />
          </Button>

          {seeLoginWarn && (
            <DivToCoverStyled>
              <H2v2Styled
                $nameUser={true}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  color: 'var(--red-brand-hover)',
                  scale: 1.1,
                  fontWeight: 400,
                }}>
                Faça login primeiro!
              </H2v2Styled>
            </DivToCoverStyled>
          )}
        </DivAddressStyled>
      </DivStyled>
    </DivThreeStyled>
  );
};

export default Address;
