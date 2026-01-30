import { DivToCoverStyled } from '@components/generic-stylized-tags';
import { UserDataContext } from '@contexts/UserDataContext';
import { Button } from '@ui/button';
import {
  ButtonsWrapper,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  InputWrapper,
  Label,
  MuiIcon,
} from '@ui/index';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { CheckIconStyled, StatusStyled } from '../ui';
import { validatePhoneNumber, formatPhoneNumber } from '@/utils/index';

const phoneTypes = [
  {
    name: 'É Whatsapp',
    type: 'zap',
  },
  {
    name: 'É Telefone Fixo',
    type: 'landline',
  },
];

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

  function openPhoneInput() {
    setSeeInput(true);
    setPhoneNumber('');

    setTimeout(() => {
      inputZapRef.current?.focus();
    }, 100);

    setTimeout(() => {
      inputZapRef.current?.focus();
    }, 120);
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
        const formatted = formatPhoneNumber(phoneNumber, selectedPhoneType);
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
        <CheckIconStyled className="material-symbols-rounded">check</CheckIconStyled>
      )}
      <CardHeader
        mb={0.75}
        separator
        styles={css`
          width: 100%;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
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
      <CardContent>
        {!seeInput ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <div>
              <h6>Whatsapp ou Telefone:</h6>
              {userContact.phone && <p>{userContact.phone}</p>}
            </div>
            <Button size="icon-sm" variant="secondary" onClick={openPhoneInput}>
              <MuiIcon icon="edit" size="3xl" />
            </Button>
          </div>
        ) : (
          <div style={{ marginTop: '8px' }}>
            <InputWrapper
              styles={css`
                margin-bottom: 16px;
              `}>
              <Label>{selectedPhoneType === 'zap' ? 'Whatsapp' : 'Telefone'}:</Label>
              <Input
                ref={inputZapRef}
                $hide={!seeInput}
                type="numeric"
                value={phoneNumber}
                maxLength={15}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </InputWrapper>

            {seeInvalidWarn && (
              <p style={{ color: 'white' }}>
                {phoneNumber.length !== 0 ? 'Número inválido!' : 'Digite um número.'}
              </p>
            )}

            <ButtonsWrapper>
              {phoneTypes.map((phoneType) => (
                <Button
                  key={phoneType.type}
                  size="sm"
                  optionButton
                  selected={selectedPhoneType === phoneType.type}
                  variant={selectedPhoneType === phoneType.type ? 'ghost' : 'transparent'}
                  onClick={() => {
                    setSelectedPhoneType(phoneType.type);
                  }}>
                  <MuiIcon
                    icon={
                      selectedPhoneType === phoneType.type ? 'check_box' : 'check_box_outline_blank'
                    }
                    fill={1}
                    size={'3xl'}
                    styles={css`
                      padding: 2px;
                    `}
                  />
                  {phoneType.name}
                </Button>
              ))}
            </ButtonsWrapper>
            <ButtonsWrapper style={{ marginTop: '16px' }}>
              <Button
                wFull
                variant="ghost"
                onClick={() => {
                  setSeeInput(false);
                }}>
                Voltar
              </Button>
              <Button
                flex
                variant="outline"
                disabled={!isValidNumber && seeInput}
                onClick={() => {
                  handleClickSavePhone();
                }}>
                {seeInput ? 'Salvar' : <MuiIcon icon="edit" size="3xl" weight={600} />}
              </Button>
            </ButtonsWrapper>
          </div>
        )}

        {seeLoginWarn && (
          <DivToCoverStyled>
            <p
              $nameUser={true}
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
      </CardContent>
    </Card>
  );
};

export default Contact;
