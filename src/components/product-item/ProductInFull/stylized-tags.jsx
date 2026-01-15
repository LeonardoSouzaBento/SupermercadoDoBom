import styled from 'styled-components';
import { CentralizeDiv } from '../../generic-stylized-tags';

export const DivSpanCloseStyled = styled(CentralizeDiv)`
  width: 4rem;
  height: 4rem;
  margin-left: calc(100% - 48px);
  margin-bottom: -4.4rem;
  position: sticky;
  top: 0.8rem;
  right: -0.4rem;
  background-color: var(--bluish-white);
  color: var(--primary);
  cursor: pointer;
  z-index: 3;
  border-radius: 50%;

  &:hover {
    background-color: var(--bluish-white-hover);
  }

  @media screen and (min-width: 578px) {
    height: 2.4rem;
    width: 4.8rem;
    padding: 0 1.2rem;
    padding-top: 1px;
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
    background-color: transparent;
    box-shadow: none;
    border-radius: 1.6rem;

    &:hover {
      box-shadow: var(--shadow-sm);
      background-color: transparent;
    }
  }

  & span:first-child {
    font-weight: 500;
    cursor: pointer;

    @media screen and (min-width: 578px) {
      display: none;
    }
  }
`;
