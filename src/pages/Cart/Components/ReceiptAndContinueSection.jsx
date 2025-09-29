import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataAlert from "./DataAlert";
import {
  ContainerStyled,
  SectionStyled,
  HeaderH2Styled,
  H2Styled,
  ReceiptOptionStyled,
  PValueStyled,
  SpanReceiptStyled,
  ButtonContinueStyled,
} from "../StylizedTags.jsx";
import { SpanH2Styled } from "@pages/MyAccount/StylizedTags.jsx";
import { PButtonBase } from "@components/GenericStylizedTags.jsx";
import { UserDataContext } from "@contexts/UserDataContext.js";

const ReceiptAndContinueSection = ({
  setScaleWarnnig,
  setCurrentOrder,
  totalAddedValue,
}) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("entregar");
  const [incompleteDataAlert, setIncompleteDataAlert] = useState(false);
  const { userContact, isDataComplete } = useContext(UserDataContext);

  const userDataComplete =
    isDataComplete.contact && isDataComplete.address && userContact.email;

  const falta = 40 - totalAddedValue > 0 ? 40 - totalAddedValue : 0;

  function handleClickContinue() {
    if (falta <= 0) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const currentTime = `${hours}:${minutes}:${seconds}`;

      if (userDataComplete) {
        setCurrentOrder({ time: currentTime, status: "completed" });
        setIncompleteDataAlert(false);
        navigate("/meus-pedidos");
      } else {
        setCurrentOrder({ time: currentTime, status: "pending" });
        setIncompleteDataAlert(true);
        setTimeout(() => {
          navigate("/minha-conta");
        }, 4000);
      }
    } else {
      setScaleWarnnig(1.045);
      setTimeout(() => {
        setScaleWarnnig(1);
      }, 350);
    }
  }

  return (
    <>
      <ContainerStyled>
        <SectionStyled>
          <HeaderH2Styled>
            <SpanH2Styled className="material-symbols-rounded" $cart={true}>
              delivery_truck_speed
            </SpanH2Styled>
            <H2Styled>Recebimento</H2Styled>
          </HeaderH2Styled>

          <ReceiptOptionStyled
            $variant={"retirar"}
            $selected={selected == "retirar"}
            onClick={() => {
              setSelected("retirar");
            }}
          >
            <PValueStyled $selected={selected == "retirar"}>
              Retirar no estabelecimento
            </PValueStyled>
            <SpanReceiptStyled
              className="material-symbols-rounded"
              $selected={selected == "retirar"}
            >
              {selected === "retirar" ? "check_box" : "check_box_outline_blank"}
            </SpanReceiptStyled>
          </ReceiptOptionStyled>

          <ReceiptOptionStyled
            $variant={"entregar"}
            $selected={selected == "entregar"}
            onClick={() => {
              setSelected("entregar");
            }}
          >
            <PValueStyled $selected={selected == "entregar"}>
              Entregar
            </PValueStyled>
            <SpanReceiptStyled
              className="material-symbols-rounded"
              $selected={selected == "entregar"}
            >
              {selected === "entregar"
                ? "check_box"
                : "check_box_outline_blank"}
            </SpanReceiptStyled>
          </ReceiptOptionStyled>
        </SectionStyled>

        <ButtonContinueStyled
          $nocontinue={falta > 0}
          onClick={handleClickContinue}
        >
          <PButtonBase>
            {userDataComplete ? "Finalizar Compra" : "Continuar"}
          </PButtonBase>
        </ButtonContinueStyled>
      </ContainerStyled>
      {incompleteDataAlert && <DataAlert />}
    </>
  );
};

export default ReceiptAndContinueSection;