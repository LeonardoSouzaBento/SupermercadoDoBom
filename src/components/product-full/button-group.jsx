import { Button } from '@ui/button';
import { Icon } from '@ui/index';
import { Minus, Plus } from 'lucide-react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 100%;
  min-width: 20rem;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.15s ease;
  background-color: var(--primary);
  &:hover {
    background-color: var(--primary-hover);
  }
  border-radius: 8px;
  cursor: pointer;

  @media screen and (max-width: 350px) {
    min-width: 18rem;
  }

  & > button {
    min-width: none;
    width: 48px;
    height: 100%;
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
            <Icon LucideIcon={Minus} />
          </Button>

          <Button>
            <p>{quantity}</p>
          </Button>

          <Button onPointerUp={handlePointerUpButtons}>
            <Icon LucideIcon={Plus} />
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
