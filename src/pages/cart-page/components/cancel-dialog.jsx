import { Button } from "@ui/button";
import { useEffect, useState } from "react";
import { BackgroundSc, ModalSc } from "../ui/cancel-dialog";
import { ButtonsWrapper } from "@ui/buttons-wrapper";

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

  function handleDropCart() {
    setSeeFeedback(true);
    setCartProducts([]);
    setTimeout(() => {
      setSeeCancelDialog(false);
      setSeeFeedback(false);
    }, 2000);
  }

  return (
    <>
      <BackgroundSc
        onClick={() => {
          setSeeCancelDialog(false);
          setSeeFeedback(false);
        }}
      />
      <ModalSc
        $feedback={seeFeedback}
        style={{
          opacity: opacityDialog ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div>
          <div>
            <h4
              style={{ color: seeFeedback ? "white" : "var(--dark-primary)" }}
            >
              {seeFeedback ? "Compra Cancelada!" : "Cancelar a compra?"}
            </h4>
          </div>

          {seeFeedback === false ? (
            <ButtonsWrapper>
              <Button variant="destructive" onClick={handleDropCart}>
                Sim, cancelar
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  handleClickClose();
                }}
              >
                Voltar
              </Button>
            </ButtonsWrapper>
          ) : (
            <span className="material-symbols-rounded">check</span>
          )}
        </div>
      </ModalSc>
    </>
  );
};

export default CancelDialog;
