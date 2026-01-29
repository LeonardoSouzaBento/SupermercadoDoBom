import styled from 'styled-components';

export const BackgroundStyled = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const ModalStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;

  & > div {
    width: calc(100% - 16px);
    max-width: 30rem;
    padding-bottom: 16px;
    margin-right: 12px;
    margin-top: 12px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 4;
    background-color: var(--white-foreground);
    overflow: hidden;
    ${(props) => props.$feedback && 'background-color: var(--dark-green);'};
    box-shadow: var(--shadow-md);
    transition: height 0.15s ease;
    position: relative;

    & span {
      font-size: 4rem;
      padding: 5px;
      margin-bottom: 12px;
      color: var(--dark-primary);
      font-weight: 700;
      background-color: var(--light-green);
      border-radius: 50%;
      cursor: default;
    }

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 56px;
      margin-bottom: 16px;
      background-color: var(--white-foreground);
      ${(props) => !props.$feedback && 'border-bottom: 1px solid var(--card-border);'}
      ${(props) => props.$feedback && 'background-color: var(--dark-green);'}

  & h1 {
        font-weight: 700;
        scale: 0.9;
      }
    }
  }
`;
