import styled from 'styled-components';

export const MainWrapperStyled = styled.div`
  width: 100%;
  min-height: 100%;
  margin: auto;
  position: relative;
  opacity: ${(props) => props.$opacity};
  transition: opacity 0.5s ease;
  padding-bottom: 3.2rem;

  &::after {
    content: '';
    width: 100%;
    height: 0.6rem;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--primary);
    z-index: -1;
  }

  & > div:last-child {
    width: 100%;
    margin: auto;

    @media screen and (min-width: 769px) {
      width: max-content;
      display: flex;
      justify-content: center;
      gap: 1.6rem;
    }
  }
`;
