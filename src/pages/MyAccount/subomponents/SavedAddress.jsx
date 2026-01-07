import { DivToCoverStyled } from '@components/GenericStylizedTags';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DivAddressStyled,
  DivFormStyled,
  DivH2StatusStyled,
  DivHalfAddressStyled,
  DivSpanStyled,
  DivStyled,
  DivThreeStyled,
  H2v2Styled,
  H3Styled,
  HeaderH2Styled,
  Pv2Styled,
  SpanCheckStyled,
  SpanEditStyled,
  SpanH2Styled,
  StatusWrapperStyled
} from '../StylizedTags';

export const SavedAddress = ({
  setSeeRegisterAddress,
  isDataComplete,
  userContact,
  userAddress,
}) => {
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

      <DivH2StatusStyled>
        <HeaderH2Styled>
          <SpanH2Styled className="material-symbols-rounded">location_home</SpanH2Styled>
          <H2v2Styled style={{ marginBottom: '0px' }}>Endereço para entrega</H2v2Styled>
        </HeaderH2Styled>

        {!isDataComplete.address && (
          <StatusWrapperStyled $address={true}>
            <div>
              <span className="material-symbols-rounded">
                {isDataComplete.address ? 'check' : 'priority_high'}
              </span>
              <p>
                {isDataComplete.address ? 'Endereço salvo' : 'Sem endereço'}
              </p>
            </div>
          </StatusWrapperStyled>
        )}
      </DivH2StatusStyled>

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

          <DivSpanStyled $address={true} $first={true} onClick={handleRegisterAddress}>
            <SpanEditStyled className="material-symbols-rounded">edit</SpanEditStyled>
          </DivSpanStyled>

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

export default SavedAddress;
