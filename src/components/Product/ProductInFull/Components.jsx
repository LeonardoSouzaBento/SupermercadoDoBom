import { flexCenter } from '@/styles/baseStyles';
import { smIcon } from '@/styles/lucideIcons';
import { X } from 'lucide-react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  ${flexCenter}
  margin-left: calc(100% - 48px);
  margin-bottom: -4.4rem;
  position: sticky;
  top: 0.8rem;
  right: -0.4rem;
  background-color: var(--background);
  color: var(--primary);
  cursor: pointer;
  z-index: 3;
  border-radius: 50%;

  &:hover {
    background-color: var(--bluish-white-hover);
  }

  @media screen and (min-width: 578px) {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  & span:first-child {
    font-weight: 500;
    cursor: pointer;

    @media screen and (min-width: 578px) {
      display: none;
    }
  }
`;

export const ButtonClose = ({ seeSpanClose, handleClickClose }) => {
  return (
    <ButtonStyled
      onPointerUp={handleClickClose}
      style={{ display: seeSpanClose ? 'flex' : 'none' }}>
      <X {...smIcon} />
    </ButtonStyled>
  );
};
