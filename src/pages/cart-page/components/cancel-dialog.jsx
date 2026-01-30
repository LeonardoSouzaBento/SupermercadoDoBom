import { Button } from '@ui/button';
import { useEffect, useState } from 'react';
import { BackgroundSc, ModalSc } from '../ui/cancel-dialog';

const CancelDialog = ({ seeFeedback, setSeeFeedback, setSeeCancelDialog, setCartProducts }) => {
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
      <BackgroundSc />
      <ModalSc
        $feedback={seeFeedback}
        style={{
          opacity: opacityDialog ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}>
        <div>
          <div>
            <h1 style={{ color: seeFeedback ? 'white' : 'var(--dark-primary)' }}>
              {seeFeedback ? 'Compra Cancelada!' : 'Cancelar a compra?'}
            </h1>
          </div>

          {seeFeedback === false ? (
            <div id="wrapper-buttons">
              <Button
                variant="destructive"
                onClick={() => {
                  setSeeFeedback(true);
                  setTimeout(() => {
                    setCartProducts([]);
                  }, 700);
                }}>
                Sim, cancelar
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  handleClickClose();
                }}>
                Voltar
              </Button>
            </div>
          ) : (
            <span className="material-symbols-rounded">check</span>
          )}
        </div>
      </ModalSc>
    </>
  );
};

export default CancelDialog;
