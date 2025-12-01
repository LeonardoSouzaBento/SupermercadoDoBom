import { useEffect, useState } from "react";
import {
  ContainerDialogStyled,
  DivDialogStyled,
  DivQuestionStyled,
  ButtonStyled,
  DivToCoverStyled,
} from "../StylizedTags.jsx";

const CancelDialog = ({
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
          <DivQuestionStyled $feedback={seeFeedback}>
            <h1 style={{ color: seeFeedback ? "white" : "var(--dark-purple)" }}>
              {seeFeedback ? "Compra Cancelada!" : "Cancelar a compra?"}
            </h1>
          </DivQuestionStyled>

          {/*Botoes de sim ou não*/}
          {seeFeedback === false ? (
            <>
              <ButtonStyled
                onClick={() => {
                  setSeeFeedback(true);
                  setTimeout(() => {
                    setCartProducts([]);
                  }, 700);
                }}
              >
                <p>Sim, cancelar</p>
              </ButtonStyled>

              <ButtonStyled
                $voltar={true}
                onClick={() => {
                  handleClickClose();
                }}
              >
                <p>Voltar</p>
              </ButtonStyled>
            </>
          ) : (
            <span className="material-symbols-rounded">
              check
            </span>
          )}
        </DivDialogStyled>
      </ContainerDialogStyled>
    </>
  );
};

export default CancelDialog;


