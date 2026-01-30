import { Button } from '@ui/button';
import { Icon } from '@ui/index';
import { Minus, Plus } from 'lucide-react';
import styled from 'styled-components';

const WrapperSc = styled.div`
  width: 100%;
  min-width: 200px;
  height: max-content;
  display: flex;
  background-color: ${(props) => props.$bg};
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  & > p {
    color: hsl(var(--primary-50));
    font-size: var(--text-lg);
  }
  @media screen and (max-width: 350px) {
    min-width: 180px;
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
    <WrapperSc
      $bg={quantity > 0 ? 'var(--primary)' : 'transparent'}
      onPointerDown={handlePointerDownDiv}
      onPointerMove={handlePointerMoveDiv}>
      {quantity > 0 && (
        <>
          <Button
            size="icon-lg"
            onPointerUp={(e) => {
              handlePointerUpButtons(e, 'fewer');
            }}>
            <Icon LucideIcon={Minus} size="lg" />
          </Button>

          <p>{quantity}</p>

          <Button size="icon-lg" onPointerUp={handlePointerUpButtons}>
            <Icon LucideIcon={Plus} size="lg" />
          </Button>
        </>
      )}
      {quantity == 0 && (
        <Button onPointerUp={handlePointerUpAdd} wFull variant="secondary" size="sm">
          Adicionar
        </Button>
      )}
    </WrapperSc>
  );
};
