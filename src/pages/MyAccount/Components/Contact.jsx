import { useState, useRef, useEffect, useContext } from "react";
import {
  DivTwoStyled,
  DivH2StatusStyled,
  HeaderH2Styled,
  SpanH2Styled,
  H2v2Styled,
  DivStatusStyled,
  DivNameStatus,
  SpanStatusStyled,
  NameStatusStyled,
  DivStyled,
  DivZapStyled,
  DivFormStyled,
  Pv2Styled,
  StrongStyled,
  InputZapStyled,
  DivSpanStyled,
  SpanEditStyled,
  DivZapAndDivPhone,
  DivZapOrPhone,
  SpanCheckStyled
} from "../StylizedTags";
import { PContinueStyled, SpanReceiptStyled} from "../../Cart/StylizedTags";
import { VisibilityContext } from "../../../contexts/VisibilityContext";

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
              <Pv2Styled $contact={true}>É whatsApp</Pv2Styled>
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
              <Pv2Styled $contact={true}>É telefone fixo</Pv2Styled>
            </DivZapOrPhone>
          </DivZapAndDivPhone>
        </div>
      </DivStyled>
    </DivTwoStyled>
  );
};

export default Contact;