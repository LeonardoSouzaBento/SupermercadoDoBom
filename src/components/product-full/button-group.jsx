import Button from '@ui/button';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 100%;
  min-width: 20rem;
  max-width: 20rem;
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.15s ease;
  background-color: var(--secondary);
  &:hover {
    background-color: var(--secondary-hover);
  }
  border-radius: 0.8rem;
  cursor: pointer;

  @media screen and (max-width: 350px) {
    min-width: 18rem;
  }
`;

export const ButtonGroup = ({
  quantity,
  handlePointerDownDiv,
  handlePointerMoveDiv,
  handlePointerUpButtons,
  handlePointerUpAdd,
}) => {
  return (
    <WrapperStyled onPointerDown={handlePointerDownDiv} onPointerMove={handlePointerMoveDiv}>
      {quantity > 0 && (
        <>
          <Button
            onPointerUp={(e) => {
              handlePointerUpButtons(e, 'fewer');
            }}>
            <span className="material-symbols-rounded">remove</span>
          </Button>

          <Button>
            <PQuantFullStyled>{quantity}</PQuantFullStyled>
          </Button>

          <Button onPointerUp={handlePointerUpButtons}>
            <span className="material-symbols-rounded">add</span>
          </Button>
        </>
      )}
      {quantity == 0 && (
        <Button style={{ width: '100%' }} onPointerUp={handlePointerUpAdd}>
          Adicionar
        </Button>
      )}
    </WrapperStyled>
  );
};
