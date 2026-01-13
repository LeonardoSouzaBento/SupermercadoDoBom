import { CentralizeDiv } from '@components/GenericStylizedTags';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  height: 100dvh;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 6;
  /* wrapper lateral */
  & > div#side-div {
    width: 80%;
    max-width: 348px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--white-foreground);
    box-shadow: var(--shadow-md);
    transition: transform 0.4s ease;
    transform: translateX(${(props) => props.$transform});
    /* header */
    & > div#options-header {
      height: 56px;
      width: 100%;
      padding-left: 16px;
      padding-right: 8px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--primary);
      position: relative;
      user-select: none;

      & > h4 {
        width: 100%;
        text-align: left;
        color: var(--white-foreground);
        margin-top: 1px;
      }
      & > button {
        background-color: hsla(var(--primary-700), 0.66);
        border-radius: 999px;
      }
    }

    & > div#options-content {
      height: calc(100% - 56px);
      padding: 8px;
      display: flex;
      flex-direction: column;
      align-items: start;
      box-sizing: border-box;
      gap: 8px;
      position: relative;
      &  button {
        width: 100%;
        justify-content: start;
        color: var(--primary);
      }
      & > div {
        width: 100%;
        position: absolute;
        bottom: 8px;
        left: 0;
      }
    }
  }
`;

export const DivNameSpanStyled = styled.div`
  height: 4.8rem;
  width: calc(100% - 32px);
  margin: auto;
  box-sizing: border-box;
  padding-left: 1.4rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  cursor: pointer;
  border-radius: 0.4rem;
  ${(props) => props.$logout && 'margin-top: 2.5rem;'}

  & p {
    padding-right: 1.2rem;
    font-family: var(--font-button);
    font-weight: 550;
    user-select: none;
    color: #292d4e;
    scale: 1.02;
    width: 100%;
    text-align: left;
  }
`;

export const DivSpanStyled = styled(CentralizeDiv)`
  width: max-content;
  height: 5.6rem;
  border-radius: 2.8rem;
  flex: none;
  cursor: pointer;

  & span {
    font-weight: 550;
    font-size: 2.25rem;
    font-variation-settings: 'FILL' 1, 'GRAD' 12, 'opsz' 30;
    color: var(--primary);
    user-select: none;
    padding-top: 1px;
    ${(props) => props.$logout && 'font-weight: 500;'}
  }
`;
