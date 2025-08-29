import { useState, useRef } from "react";
import {
  DivOneStyled,
  ButtonLoginStyled,
  DivThreeStyled,
  DivTwoStyled,
  DivH2StatusStyled,
  HeaderH2Styled,
  DivStyled,
  DivHalfAddressStyled,
  DivZapStyled,
  Pv2Styled,
  StrongStyled,
  DivFormStyled,
  DivAddressStyled,
  SpanH2Styled,
  H2v2Styled,
  DivStatusStyled,
  DivNameStatus,
  NameStatusStyled,
  SpanStatusStyled,
  DivSpanStyled,
  SpanEditStyled,
  UserHeaderDivStyled,
  DivImgEmailStyled,
  DivImgUserStyled,
  ImgUserStyled,
  DivNameEmailStyled,
  DivButtonStyled,
  InputZapStyled,
} from "../../components/MyAccountPage/StylizedTagsMyAccountPage";
import {
  ButtonContinueStyled,
  PContinueStyled,
} from "../Cart/StylizedTagsCart";

export const Contact = ({ isDataComplete }) => {
  const [phoneNumber, setPhoneNumber] = useState("Não fornecido");
  const [seeInput, setSeeInput] = useState(false);
  // const [isValidNumber, setIsValidNumber] = useState(false);
  // const [isZap, setIsZap] = useState(true);

  const inputZapRef = useRef(null);

  function handleFocusOnInput() {
    if (!seeInput) {
      setSeeInput(true);
    } else {
      setSeeInput(false);
    }
    setTimeout(() => {
      inputZapRef.current.focus();
    }, 100);
    setTimeout(() => {
      inputZapRef.current.focus();
    }, 120);
  }

//   function validateAndFormatNumber(value, isZap) {
//   // Remove todos os caracteres que não sejam dígitos
//   const cleanedValue = value.replace(/\D/g, '');

//   let regex;
//   let minLength;
//   const isCelular = cleanedValue.length === 11;
//   const isFixo = cleanedValue.length === 10;

//   if (isZap) {
//     // Padrão para WhatsApp (com ou sem 9)
//     regex = /^(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579]|8[1-9])9\d{8}$/;
//     minLength = 11;
//   } else {
//     // Padrão para telefone fixo
//     regex = /^(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579]|8[1-9])\d{8}$/;
//     minLength = 10;
//   }

//   const isValid = isZap ? isCelular && regex.test(cleanedValue) : isFixo && regex.test(cleanedValue);
//   let formattedValue = '';

//   if (isValid) {
//     if (isZap) {
//       formattedValue = `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 7)}-${cleanedValue.slice(7, 11)}`;
//     } else {
//       formattedValue = `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 6)}-${cleanedValue.slice(6, 10)}`;
//     }
//   } else {
//     formattedValue = cleanedValue;
//   }

//   // Impede a adição de mais números que o necessário
//   if (cleanedValue.length > (isZap ? 11 : 10)) {
//     return {
//       formatted: `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, isZap ? 7 : 6)}-${cleanedValue.slice(isZap ? 7 : 6, isZap ? 11 : 10)}`,
//       isValid: false
//     };
//   }

//   return {
//     formatted: formattedValue,
//     isValid: isValid,
//   };
// }

//   useEffect(() => {
//     // Quando o phoneNumber mudar, chame a função de validação e formatação
//     const { formatted, isValid: newIsValid } = validateAndFormatNumber(phoneNumber, isZap);
    
//     // Atualiza o estado para que o input mostre o número formatado
//     setPhoneNumber(formatted);
    
//     // Atualiza o estado de validação
//     setIsValid(newIsValid);
//   }, [phoneNumber, isZap]);
  
  return (
    <DivTwoStyled>
      <DivH2StatusStyled>
        <HeaderH2Styled>
          <SpanH2Styled
            className="material-symbols-outlined"
            $variant={"smaller"}
          >
            call
          </SpanH2Styled>
          <H2v2Styled style={{ marginBottom: "0px" }}>
            Informações para contato
          </H2v2Styled>
        </HeaderH2Styled>

        {/*Estado do número*/}
        {!isDataComplete.contact && (
          <DivStatusStyled>
            <DivNameStatus $hide={isDataComplete.contact}>
              <NameStatusStyled $hide={isDataComplete.contact}>
                Sem um número
              </NameStatusStyled>
              <SpanStatusStyled className="material-symbols-outlined">
                {isDataComplete.contact ? "check" : "exclamation"}
              </SpanStatusStyled>
            </DivNameStatus>
          </DivStatusStyled>
        )}
      </DivH2StatusStyled>

      {/*Whatsapp*/}
      <DivStyled>
        <DivZapStyled>
          <DivFormStyled $zap={true}>
            <Pv2Styled>
              <StrongStyled>Whatsapp ou Telefone:</StrongStyled> <br />
            </Pv2Styled>

            <Pv2Styled $hide={seeInput}>{phoneNumber}</Pv2Styled>

            <InputZapStyled
              ref={inputZapRef}
              $hide={!seeInput}
              type="numeric"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </DivFormStyled>

          <DivSpanStyled
            onClick={() => {
              handleFocusOnInput();
            }}
          >
            {seeInput ? (
              <PContinueStyled>OK</PContinueStyled>
            ) : (
              <SpanEditStyled className="material-symbols-outlined">
                edit
              </SpanEditStyled>
            )}
          </DivSpanStyled>
        </DivZapStyled>
      </DivStyled>
    </DivTwoStyled>
  );
};

export const SavedAddress = ({
  setSeeRegisterAddress,
  isDataComplete,
  userAddress,
}) => {
  function GetInitialsNameState() {
    const palavras = userAddress.estado.split(" ");
    const iniciais = palavras.map((palavra) => palavra.charAt(0));
    const result = iniciais.join("");
    return result;
  }
  const initialNameState = GetInitialsNameState();

  return (
    <DivThreeStyled>
      <DivH2StatusStyled>
        <HeaderH2Styled>
          <SpanH2Styled className="material-symbols-rounded">
            location_home
          </SpanH2Styled>
          <H2v2Styled style={{ marginBottom: "0px" }}>
            Endereço para entrega
          </H2v2Styled>
        </HeaderH2Styled>

        <DivStatusStyled>
          <DivNameStatus $hide={isDataComplete.address}>
            <NameStatusStyled $hide={isDataComplete.address}>
              Sem endereço
            </NameStatusStyled>
            <SpanStatusStyled
              className="material-symbols-rounded"
              $check={isDataComplete.address}
            >
              {isDataComplete.address ? "check" : "exclamation"}
            </SpanStatusStyled>
          </DivNameStatus>
        </DivStatusStyled>
      </DivH2StatusStyled>

      <DivStyled>
        <DivAddressStyled>
          <DivHalfAddressStyled $first={true}>
            <DivFormStyled $first={true}>
              <Pv2Styled>
                <StrongStyled>Rua:</StrongStyled>
              </Pv2Styled>
              <Pv2Styled>
                {!userAddress.rua ? "Não fornecido" : userAddress.rua}
              </Pv2Styled>
            </DivFormStyled>

            <DivFormStyled>
              <Pv2Styled>
                <StrongStyled>Número:</StrongStyled>
              </Pv2Styled>
              <Pv2Styled>
                {!userAddress.numero ? "Não fornecido" : userAddress.numero}
              </Pv2Styled>
            </DivFormStyled>
          </DivHalfAddressStyled>

          <DivHalfAddressStyled>
            <DivFormStyled $first={true}>
              <Pv2Styled>
                <StrongStyled>Complemento:</StrongStyled>
              </Pv2Styled>
              <Pv2Styled>
                {!userAddress.complemento
                  ? "Não fornecido (opcional)"
                  : userAddress.complemento}
              </Pv2Styled>
            </DivFormStyled>

            <DivFormStyled>
              <DivFormStyled>
                <Pv2Styled>
                  <StrongStyled>Cidade (UF):</StrongStyled>
                </Pv2Styled>
                <Pv2Styled>
                  {!userAddress.cidade
                    ? "Não fornecido"
                    : `${userAddress.cidade} (${
                        initialNameState ? initialNameState : userAddress.estado
                      })`}
                </Pv2Styled>
              </DivFormStyled>
            </DivFormStyled>
          </DivHalfAddressStyled>

          <DivSpanStyled
            $address={true}
            $first={true}
            onClick={() => {
              setSeeRegisterAddress(true);
            }}
          >
            <SpanEditStyled className="material-symbols-rounded">
              edit
            </SpanEditStyled>
          </DivSpanStyled>
        </DivAddressStyled>
      </DivStyled>
    </DivThreeStyled>
  );
};

export const FinishShopping = ({ isDataComplete, orderInfo }) => {
  return (
    <DivOneStyled $orders={true}>
      <DivH2StatusStyled $orders={true}>
        <HeaderH2Styled $orders={true}>
          <SpanH2Styled className="material-symbols-rounded">
            shopping_bag
          </SpanH2Styled>
          <H2v2Styled style={{ marginBottom: "0px" }}>
            Minhas compras
          </H2v2Styled>
        </HeaderH2Styled>

        {orderInfo.status === "pending" && (
          <DivStatusStyled>
            <DivNameStatus>
              <NameStatusStyled>Compra não finalizada</NameStatusStyled>
              <SpanStatusStyled className="material-symbols-rounded">
                exclamation
              </SpanStatusStyled>
            </DivNameStatus>
          </DivStatusStyled>
        )}
      </DivH2StatusStyled>
      {orderInfo.status === "pending" && (
        <ButtonContinueStyled
          $myAccount={true}
          $enable={isDataComplete.contact && isDataComplete.address}
        >
          <PContinueStyled>Finalizar a compra</PContinueStyled>
        </ButtonContinueStyled>
      )}
    </DivOneStyled>
  );
};

export const UserProfile = ({ userContact, setSeeLogin }) => {
  return (
    <DivOneStyled>
      <UserHeaderDivStyled>
        <DivImgEmailStyled>
          <DivImgUserStyled>
            {!userContact.photoUrl && (
              <SpanH2Styled className="material-symbols-rounded" $user={true}>
                {!userContact.name ? "person_alert" : "person"}
              </SpanH2Styled>
            )}
            <ImgUserStyled src={userContact.photoUrl || null} />
          </DivImgUserStyled>

          <DivNameEmailStyled>
            <H2v2Styled $nameUser={true}>
              {!userContact.name ? "Usuário Anônimo" : userContact.name}
            </H2v2Styled>
            <NameStatusStyled $email={true}>
              {!userContact.email
                ? "usuario_anonimo@email.com"
                : userContact.email}
            </NameStatusStyled>
          </DivNameEmailStyled>
        </DivImgEmailStyled>

        <DivSpanStyled>
          <SpanEditStyled className="material-symbols-outlined">
            edit
          </SpanEditStyled>
        </DivSpanStyled>
      </UserHeaderDivStyled>

      {(!userContact.email || !userContact.name) && (
        <DivStatusStyled $user={true}>
          <DivNameStatus
            $user={true}
            $hide={userContact.email && userContact.name}
          >
            <NameStatusStyled $hide={userContact.email && userContact.name}>
              {!userContact.email ? "Usúario anônimo" : "Sem seu nome"}
            </NameStatusStyled>
            <SpanStatusStyled
              className="material-symbols-outlined"
              $check={userContact.email && userContact.name}
            >
              {!userContact.email || !userContact.name
                ? "exclamation"
                : "check"}
            </SpanStatusStyled>
          </DivNameStatus>
        </DivStatusStyled>
      )}

      {!userContact.email && (
        <DivButtonStyled
          onClick={() => {
            setSeeLogin(true);
          }}
        >
          <ButtonLoginStyled>
            <PContinueStyled>Entrar com e-mail</PContinueStyled>
          </ButtonLoginStyled>
        </DivButtonStyled>
      )}
    </DivOneStyled>
  );
};
