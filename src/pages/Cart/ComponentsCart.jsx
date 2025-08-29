import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerDialogStyled,
  DivDialogStyled,
  DivQuestionStyled,
  PQuestionStyled,
  DivPYesNoStyled,
  PYesNoStyled,
  SpanDialogStyled,
  DivToCoverStyled,
  PAlertStyled,
  DivAlertStyled,
  BodyAlertStyled,
  ContainerStyled,
  DivStyled,
  HeaderH2Styled,
  H2Styled,
  ReceiptOptionStyled,
  PValueStyled,
  SpanReceiptStyled,
  ButtonContinueStyled,
  PContinueStyled,
  DivSpanDeleteStyled,
  SpanStyled,
  DivSeeAllStyled,
  PSeeAllStyled,
  SpanSeeAllStyled,
  DivAllValuesStyled,
  DivAvisoStyled,
  PAvisoStyled,
  DivOneValueStyled,
  DivAddStyled,
  PAddStyled,
} from "./StylizedTagsCart";
import { SpanH2Styled } from "../../components/MyAccountPage/StylizedTagsMyAccountPage.jsx";

const DataAlert = () => {
  return (
    <BodyAlertStyled>
      <DivAlertStyled>
        <PAlertStyled $warn={true} style={{ color: "white" }}>
          <strong style={{ fontWeight: 600 }}>
            Complete suas informações{" "}
          </strong>
          para continuar a compra.
        </PAlertStyled>
      </DivAlertStyled>
    </BodyAlertStyled>
  );
};

export const ReceiptAndContinue = ({
  falta,
  isDataComplete,
  setOrderInfo,
  setScaleWarnnig,
}) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("entregar");
  const [incompleteDataAlert, setIncompleteDataAlert] = useState(false);

  function handleClickContinue() {
    if (falta <= 0) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const currentTime = `${hours}:${minutes}:${seconds}`;

      if (!isDataComplete.contact || !isDataComplete.address) {
        setOrderInfo({ time: currentTime, status: "pending" });
        setIncompleteDataAlert(true);
        setTimeout(() => {
          navigate("/minha-conta");
        }, 4000);
      } else {
        setOrderInfo({ time: currentTime, status: "completed" });
        setIncompleteDataAlert(false);
        navigate("/meus-pedidos");
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
        <DivStyled>
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
        </DivStyled>

        <ButtonContinueStyled
          $nocontinue={falta > 0}
          onClick={handleClickContinue}
        >
          <PContinueStyled>
            {isDataComplete.contact && isDataComplete.address
              ? "Finalizar Compra"
              : "Continuar"}
          </PContinueStyled>
        </ButtonContinueStyled>
      </ContainerStyled>
      {incompleteDataAlert && <DataAlert />}
    </>
  );
};

export const CancelDialog = ({
  seeFeedback,
  setSeeFeedback,
  setSeeCancelDialog,
  setCartProducts,
}) => {
  const [opacityDialog, setOpacityDialog] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpacityDialog(true);
    }, 200);
  }, []);

  function handleClickClose() {
    setOpacityDialog(false);
    setTimeout(() => {
      setSeeCancelDialog(false);
    }, 400);
  }

  return (
    <>
      <DivToCoverStyled
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          height: "100%",
          overflow: "auto",
        }}
      />
      <ContainerDialogStyled
        style={{
          opacity: opacityDialog ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <DivDialogStyled $feedback={seeFeedback}>
          <DivQuestionStyled
            style={{ backgroundColor: seeFeedback ? "#488658" : "#ECF0F5" }}
          >
            <PQuestionStyled style={{ color: seeFeedback ? "white" : "black" }}>
              {seeFeedback ? "Compra Cancelada!" : "Cancelar a compra?"}
            </PQuestionStyled>
          </DivQuestionStyled>

          {/*Botoes de sim ou não*/}
          {seeFeedback === false ? (
            <>
              <DivPYesNoStyled
                onClick={() => {
                  setSeeFeedback(true);
                  setTimeout(() => {
                    setCartProducts([]);
                  }, 700);
                }}
              >
                <PYesNoStyled>Sim, cancelar</PYesNoStyled>
              </DivPYesNoStyled>

              <DivPYesNoStyled
                $voltar={true}
                onClick={() => {
                  handleClickClose();
                }}
              >
                <PYesNoStyled>Voltar</PYesNoStyled>
              </DivPYesNoStyled>
            </>
          ) : (
            <SpanDialogStyled className="material-symbols-rounded">
              check
            </SpanDialogStyled>
          )}
        </DivDialogStyled>
      </ContainerDialogStyled>
    </>
  );
};

export const ButtonSeeAll = ({
  applyNewHeight,
  setApplyNewHeight,
  setViewButtonsetSeeAll,
  setwasClicked,
  CartSectionRef,
  newHeight,
}) => {
  function handleClickSeeAll() {
    if (applyNewHeight) {
      setApplyNewHeight(false);
      setViewButtonsetSeeAll(false);
      setwasClicked(true);
      CartSectionRef.current.style.height = `${newHeight}px`;
      setTimeout(() => {
        CartSectionRef.current.style.height = "auto";
      }, 160);
    }
  }

  return (
    <DivSeeAllStyled onClick={handleClickSeeAll}>
      <PSeeAllStyled>Ver Tudo</PSeeAllStyled>
      <SpanSeeAllStyled className="material-symbols-rounded">
        keyboard_arrow_down
      </SpanSeeAllStyled>
    </DivSeeAllStyled>
  );
};

export const HeaderCart = ({ setSeeCancelDialog }) => {
  return (
    <>
      <HeaderH2Styled $cart={true}>
        <SpanH2Styled
          className="material-symbols-rounded"
          $variant={"smaller"}
          $cart={true}
        >
          package_2
        </SpanH2Styled>
        <H2Styled $products={true}>Produtos</H2Styled>
      </HeaderH2Styled>

      <DivSpanDeleteStyled
        onClick={() => {
          setSeeCancelDialog(true);
        }}
      >
        <SpanStyled className="material-symbols-rounded">delete</SpanStyled>
      </DivSpanDeleteStyled>
    </>
  );
};

export const DetailAndButtonAdd = (
  falta,
  totalAddedValue,
  scaleWarnnig,
  faltaFormatada,
  totalValue,
  totalFormatted
) => {
  const navigate = useNavigate();

  return (
    <ContainerStyled>
      <DivStyled>
        <HeaderH2Styled>
          <SpanH2Styled className="material-symbols-rounded" $cart={true}>
            data_info_alert
          </SpanH2Styled>
          <H2Styled>Detalhes</H2Styled>
        </HeaderH2Styled>

        <DivAllValuesStyled>
          {falta > 0 && totalAddedValue != 0 && (
            <DivAvisoStyled $scale={scaleWarnnig}>
              <PAvisoStyled>
                Faltam R$ {faltaFormatada} para o valor mínimo de R$ 40,00
              </PAvisoStyled>
            </DivAvisoStyled>
          )}
          <DivOneValueStyled $first={true}>
            <PValueStyled>Compra:</PValueStyled>
            <PValueStyled>R$ {totalValue}</PValueStyled>
          </DivOneValueStyled>

          <DivOneValueStyled>
            <PValueStyled>Taxa de Entrega:</PValueStyled>
            <PValueStyled>R$ 4,00</PValueStyled>
          </DivOneValueStyled>

          <DivOneValueStyled style={{ borderBottom: "none" }}>
            <PValueStyled>
              <strong>Total:</strong>
            </PValueStyled>
            <PValueStyled>
              <strong>R$ {totalFormatted}</strong>
            </PValueStyled>
          </DivOneValueStyled>
        </DivAllValuesStyled>
      </DivStyled>

      <DivAddStyled
        onClick={() => {
          navigate("/buscar-produtos");
        }}
      >
        <PAddStyled>Adicionar mais produtos</PAddStyled>
      </DivAddStyled>
    </ContainerStyled>
  );
};
