import { useState, useRef, useEffect, useContext } from "react";
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
  DivZapAndDivPhone,
  DivZapOrPhone,
  SpanCheckStyled,
} from "./StylizedTags";
import {
  ButtonContinueStyled,
  PContinueStyled,
  SpanReceiptStyled,
} from "../Cart/StylizedTags";
import { VisibilityContext } from "../../contexts/VisibilityContext";
import { useNavigate } from "react-router-dom";

function formatPhone(num, selectedPhoneType) {
  if (!num) return "";

  // Remove tudo que não é número
  let digits = num.replace(/\D/g, "");
  // Remove prefixo do Brasil (+55 ou 55)
  if (digits.startsWith("55")) {
    digits = digits.slice(2);
  }
  // Se for WhatsApp (zap) e o número tiver 10 dígitos, adiciona o 9
  if (selectedPhoneType === "zap" && digits.length === 10) {
    digits = digits.replace(/^(\d{2})(\d{4})(\d{4})$/, "$19$2$3");
  }

  // Se for fixo (landline) e tiver 11 dígitos (com 9 extra), remove o 9
  if (selectedPhoneType === "landline" && digits.length === 11) {
    digits = digits.replace(/^(\d{2})9(\d{4})(\d{4})$/, "$1$2$3");
  }

  // Só formata se tiver pelo menos 10 dígitos
  if (digits.length < 10) return num;
  if (digits.length === 11) {
    return digits.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  }
  if (digits.length === 10) {
    return digits.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  }
  // Caso venha com mais de 11 dígitos, corta e formata como celular
  return digits.slice(0, 11).replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
}

function validatePhoneNumber(num, selectedPhoneType) {
  if (!num) return false;

  let digits = num.replace(/\D/g, "");

  // Remove prefixo do Brasil
  if (digits.startsWith("55")) {
    digits = digits.slice(2);
  }

  const ddd = digits.slice(0, 2);
  const prefix = digits.slice(2, 3);

  // 🔹 Restrição geral: DDD deve estar entre 11 e 99
  if (Number(ddd) < 11 || Number(ddd) > 99) return false;

  // 🔹 Restrição geral: não pode ser sequência repetida
  if (/^(\d)\1+$/.test(digits)) return false;

  if (selectedPhoneType === "landline") {
    // Deve ter 10 dígitos
    if (digits.length !== 10) return false;

    // Não pode começar com 0,1,8,9 após o DDD
    if (["0", "1", "8", "9"].includes(prefix)) return false;

    return true;
  }

  if (selectedPhoneType === "zap") {
    // Deve ter 11 dígitos
    if (digits.length !== 11) return false;

    // Deve começar com 9 após o DDD
    if (prefix !== "9") return false;

    return true;
  }

  // Tipo desconhecido → inválido
  return false;
}

export const Contact = () => {
  const { userContact, setUserContact, isDataComplete, setIsDataComplete } =
    useContext(VisibilityContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [seeInput, setSeeInput] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [selectedPhoneType, setSelectedPhoneType] = useState("zap");

  const inputZapRef = useRef(null);

  function handleFocusOnInput() {
    if (!seeInput) {
      setSeeInput(true);
      setTimeout(() => {
        inputZapRef.current.focus();
      }, 100);
      setTimeout(() => {
        inputZapRef.current.focus();
      }, 120);
      setPhoneNumber("");
    } else {
      if (isValidNumber) {
        setSeeInput(false);
        setUserContact({ ...userContact, phone: phoneNumber });
        setIsDataComplete({ ...isDataComplete, contact: true });
      } else {
        setSeeInput(false);
      }
    }
  }

  useEffect(() => {
    if (phoneNumber && phoneNumber.replace(/\D/g, "").length >= 10) {
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
    <DivTwoStyled>
      {isDataComplete.contact && (
        <SpanCheckStyled className="material-symbols-outlined">
          check
        </SpanCheckStyled>
      )}
      <DivH2StatusStyled>
        <HeaderH2Styled>
          <SpanH2Styled
            className="material-symbols-outlined"
            $smaller={true}
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
            <DivNameStatus>
              <SpanStatusStyled className="material-symbols-outlined">
                {isDataComplete.contact ? "check" : "exclamation"}
              </SpanStatusStyled>
              <NameStatusStyled>
                {isDataComplete.contact ? "Número salvo" : "Sem um número"}
              </NameStatusStyled>
            </DivNameStatus>
          </DivStatusStyled>
        )}
      </DivH2StatusStyled>

      {/*Whatsapp*/}
      <DivStyled>
        <div style={{ border: "1px solid var(--border)", borderRadius: "6px" }}>
          <DivZapStyled $seeInput={seeInput}>
            <DivFormStyled $zap={true}>
              <Pv2Styled>
                <StrongStyled>Whatsapp ou Telefone:</StrongStyled> <br />
              </Pv2Styled>

              <Pv2Styled $hide={userContact.phone === ""}>
                {userContact.phone}
              </Pv2Styled>

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

            <DivSpanStyled
              $disable={!isValidNumber && seeInput}
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

          <DivZapAndDivPhone $visible={seeInput}>
            <DivZapOrPhone
              $selected={selectedPhoneType === "zap"}
              onClick={() => {
                setSelectedPhoneType("zap");
              }}
            >
              <SpanReceiptStyled
                className="material-symbols-rounded"
                $selected={selectedPhoneType == "zap"}
              >
                {selectedPhoneType === "zap"
                  ? "check_box"
                  : "check_box_outline_blank"}
              </SpanReceiptStyled>
              <Pv2Styled>É whatsApp</Pv2Styled>
            </DivZapOrPhone>

            <DivZapOrPhone
              $selected={selectedPhoneType === "landline"}
              onClick={() => {
                setSelectedPhoneType("landline");
              }}
            >
              <SpanReceiptStyled
                className="material-symbols-rounded"
                $selected={selectedPhoneType == "landline"}
              >
                {selectedPhoneType === "landline"
                  ? "check_box"
                  : "check_box_outline_blank"}
              </SpanReceiptStyled>
              <Pv2Styled>É telefone fixo</Pv2Styled>
            </DivZapOrPhone>
          </DivZapAndDivPhone>
        </div>
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
      {isDataComplete.address && (
        <SpanCheckStyled className="material-symbols-outlined">
          check
        </SpanCheckStyled>
      )}

      <DivH2StatusStyled>
        <HeaderH2Styled>
          <SpanH2Styled className="material-symbols-rounded">
            location_home
          </SpanH2Styled>
          <H2v2Styled style={{ marginBottom: "0px" }}>
            Endereço para entrega
          </H2v2Styled>
        </HeaderH2Styled>

        {!isDataComplete.address && (
          <DivStatusStyled>
            <DivNameStatus>
              <SpanStatusStyled className="material-symbols-rounded">
                {isDataComplete.address ? "check" : "exclamation"}
              </SpanStatusStyled>
              <NameStatusStyled>
                {isDataComplete.address ? "Endereço salvo" : "Sem endereço"}
              </NameStatusStyled>
            </DivNameStatus>
          </DivStatusStyled>
        )}
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

export const FinishShopping = ({ isDataComplete, orderInfo, userContact }) => {
  const enable =
    isDataComplete.contact &&
    isDataComplete.address &&
    userContact.email &&
    orderInfo.status === "pending";
  const navigate = useNavigate();

  function handleClickFinish() {
    if (!orderInfo.time) {
      navigate("/meu-carrinho")
    } else {
      navigate("/meus-pedidos")
    }
  }

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
          <DivStatusStyled $finish={true}>
            <DivNameStatus $finish={true}>
              <SpanStatusStyled className="material-symbols-rounded">
                exclamation
              </SpanStatusStyled>
              <NameStatusStyled>Compra não finalizada</NameStatusStyled>
            </DivNameStatus>
          </DivStatusStyled>
        )}
      </DivH2StatusStyled>
      {orderInfo.status === "pending" && (
        <ButtonContinueStyled $myAccount={true} $enable={enable} onClick={handleClickFinish}>
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
            <SpanStatusStyled className="material-symbols-outlined">
              {!userContact.email || !userContact.name
                ? "exclamation"
                : "check"}
            </SpanStatusStyled>
            <NameStatusStyled $hide={userContact.email && userContact.name}>
              {!userContact.email ? "Usúario anônimo" : "Sem seu nome"}
            </NameStatusStyled>
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
