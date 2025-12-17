import styled from 'styled-components';

export const ButtonMoreOptionsStyled = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--white-foreground);
  background-color: var(--secondary);
  transition: all 100ms linear;
  cursor: pointer;
  &:hover {
    background-color: var(--secondary-hover);
  }

  @media screen and (max-width: 375px) {
    position: absolute;
    top: 44px;
    right: 4.5%;
  }
  @media screen and (min-width: 375px) and (max-width: 768px) {
    position: absolute;
    top: 44px;
    right: 5%;
  }
  @media screen and (min-width: 768px) {
    position: relative;
    min-width: 48px;
  }
  @media screen and (min-width: 1201px) {
    min-width: max-content;
    padding: 0 16px;
    gap: 4px;
    border-radius: 12px;
  }

  & span {
    cursor: pointer;
    user-select: none;

    @media screen and (min-width: 1201px) {
      padding-right: 4px;
    }
  }

  & p {
    font-family: var(--font-button);
    font-weight: 600;

    letter-spacing: 0.8px;
    margin: 0;
    padding-bottom: 2px;
    @media (max-width: 1201px) {
      display: none;
    }
    user-select: none;
    cursor: pointer;
  }
`;
