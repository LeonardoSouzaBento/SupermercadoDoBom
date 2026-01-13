import { DivToCoverStyled } from '@components/GenericStylizedTags';
import { UserDataContext } from '@contexts/UserDataContext';
import { Button } from '@ui/button';
import { Card, CardHeader, CardTitle, MuiIcon } from '@ui/index';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import {
  DivFormStyled,
  DivInvalidWarnStyled,
  DivStyled,
  DivZapAndDivPhone,
  DivZapOrPhone,
  DivZapStyled,
  H2v2Styled,
  H3Styled,
  InputZapStyled,
  Pv2Styled,
  SpanCheckStyled
} from '../StylizedTags';
import { StatusStyled } from '../ui';

function formatPhone(num, selectedPhoneType) {
  if (!num) return '';

  // Remove tudo que não é número
  let digits = num.replace(/\D/g, '');
  // Remove prefixo do Brasil (+55 ou 55)
  if (digits.startsWith('55')) {
    digits = digits.slice(2);
  }
  // Se for WhatsApp (zap) e o número tiver 10 dígitos, adiciona o 9
  if (selectedPhoneType === 'zap' && digits.length === 10) {
    digits = digits.replace(/^(\d{2})(\d{4})(\d{4})$/, '$19$2$3');
  }

  // Se for fixo (landline) e tiver 11 dígitos (com 9 extra), remove o 9
  if (selectedPhoneType === 'landline' && digits.length === 11) {
    digits = digits.replace(/^(\d{2})9(\d{4})(\d{4})$/, '$1$2$3');
  }

  // Só formata se tiver pelo menos 10 dígitos
  if (digits.length < 10) return num;
  if (digits.length === 11) {
    return digits.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  }
  if (digits.length === 10) {
    return digits.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
  }
  // Caso venha com mais de 11 dígitos, corta e formata como celular
  return digits.slice(0, 11).replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
}

function validatePhoneNumber(num, selectedPhoneType) {
  if (!num) return false;

  let digits = num.replace(/\D/g, '');

  // Remove prefixo do Brasil
  if (digits.startsWith('55')) {
    digits = digits.slice(2);
  }

  const ddd = digits.slice(0, 2);
  const prefix = digits.slice(2, 3);

  // 🔹 Restrição geral: DDD deve estar entre 11 e 99
  if (Number(ddd) < 11 || Number(ddd) > 99) return false;

  // 🔹 Restrição geral: não pode ser sequência repetida
  if (/^(\d)\1+$/.test(digits)) return false;

  if (selectedPhoneType === 'landline') {
    // Deve ter 10 dígitos
    if (digits.length !== 10) return false;

    // Não pode começar com 0,1,8,9 após o DDD
    if (['0', '1', '8', '9'].includes(prefix)) return false;

    return true;
  }

  if (selectedPhoneType === 'zap') {
    // Deve ter 11 dígitos
    if (digits.length !== 11) return false;

    // Deve começar com 9 após o DDD
    if (prefix !== '9') return false;

    return true;
  }

  // Tipo desconhecido → inválido
  return false;
}

export const Contact = () => {
  const { userContact, setUserContact, isDataComplete, setIsDataComplete } =
    useContext(UserDataContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [seeInput, setSeeInput] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [selectedPhoneType, setSelectedPhoneType] = useState('zap');
  const [clickCount, setClickCount] = useState(0);
  const [seeLoginWarn, setSeeLoginWarn] = useState(false);
  const [seeInvalidWarn, setSeeInvalidWarn] = useState(false);

  const inputZapRef = useRef(null);

  const navigate = useNavigate();

  function showLoginWarn() {
    setSeeLoginWarn(true);
    setTimeout(() => {
      setSeeLoginWarn(false);
      navigate('/fazer-login');
    }, 3000);
  }

  function showInvalidWarn() {
    setSeeInvalidWarn(true);
    setTimeout(() => {
      setSeeInvalidWarn(false);
    }, 2000);
  }

  function handleClickSavePhone() {
    if (!userContact.email) {
      showLoginWarn();
    } else {
      if (!seeInput) {
        setSeeInput(true);
        setTimeout(() => {
          inputZapRef.current.focus();
        }, 100);
        setTimeout(() => {
          inputZapRef.current.focus();
        }, 120);
        setPhoneNumber('');
      } else {
        if (isValidNumber) {
          setSeeInput(false);
          setUserContact({ ...userContact, phone: phoneNumber });
          setIsDataComplete({ ...isDataComplete, contact: true });
        } else {
          setClickCount((prev) => prev + 1);
          if (clickCount % 2 == 0) {
            setSeeInput(false);
          } else {
            showInvalidWarn();
          }
        }
      }
    }
  }

  useEffect(() => {
    if (phoneNumber && phoneNumber.replace(/\D/g, '').length >= 10) {
      const isValid = validatePhoneNumber(phoneNumber, selectedPhoneType);
      setIsValidNumber(isValid);

      // Só formata se for válido
      if (isValid) {
        const formatted = formatPhone(phoneNumber, selectedPhoneType);
        if (formatted !== phoneNumber) {
          setPhoneNumber(formatted);
        }
      }
    } else {
      setIsValidNumber(false);
    }
  }, [phoneNumber, selectedPhoneType]);

  return (
    <Card>
      {isDataComplete.contact && (
        <SpanCheckStyled className="material-symbols-rounded">check</SpanCheckStyled>
      )}
      <CardHeader
        customStyles={css`
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 8px;
        `}>
        <CardTitle>
          <MuiIcon fill={1} icon="call" size="3xl" />
          <h3>Informações para contato</h3>
        </CardTitle>

        {/*Estado do número*/}
        {!isDataComplete.contact && (
          <StatusStyled $contact={true}>
            <div>
              <span className="material-symbols-rounded">
                {isDataComplete.contact ? 'check' : 'priority_high'}
              </span>
              <p>{isDataComplete.contact ? 'Número salvo' : 'Sem um número'}</p>
            </div>
          </StatusStyled>
        )}
      </CardHeader>

      {/*Whatsapp*/}
      <DivStyled>
        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: '8px',
          }}>
          <DivZapStyled $seeInput={seeInput}>
            <DivFormStyled $zap={true}>
              <h6>Whatsapp ou Telefone:</h6>

              <p>{userContact.phone}</p>

              <InputZapStyled
                ref={inputZapRef}
                $hide={!seeInput}
                type="numeric"
                value={phoneNumber}
                maxLength={15}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </DivFormStyled>

            <Button
              size={seeInput ? 'sm' : 'sm-icon'}
              variant="secondary"
              disabled={!isValidNumber && seeInput}
              onClick={() => {
                handleClickSavePhone();
              }}>
              {seeInput ? 'OK' : <MuiIcon icon="edit" size="3xl" weight={600} />}
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
          </DivZapStyled>
          {seeInvalidWarn && (
            <DivInvalidWarnStyled>
              <H3Styled style={{ color: 'white' }}>
                {phoneNumber.length !== 0 ? 'Número inválido!' : 'Digite um número.'}
              </H3Styled>
            </DivInvalidWarnStyled>
          )}

          <DivZapAndDivPhone $visible={seeInput}>
            <DivZapOrPhone
              $selected={selectedPhoneType === 'zap'}
              onClick={() => {
                setSelectedPhoneType('zap');
              }}>
              <span className="material-symbols-rounded">
                {selectedPhoneType === 'zap' ? 'check_box' : 'check_box_outline_blank'}
              </span>
              <Pv2Styled $contact={true}>É whatsApp</Pv2Styled>
            </DivZapOrPhone>

            <DivZapOrPhone
              $selected={selectedPhoneType === 'landline'}
              onClick={() => {
                setSelectedPhoneType('landline');
              }}>
              <span className="material-symbols-rounded">
                {selectedPhoneType === 'landline' ? 'check_box' : 'check_box_outline_blank'}
              </span>
              <Pv2Styled $contact={true}>É telefone fixo</Pv2Styled>
            </DivZapOrPhone>
          </DivZapAndDivPhone>
        </div>
      </DivStyled>
    </Card>
  );
};

export default Contact;
