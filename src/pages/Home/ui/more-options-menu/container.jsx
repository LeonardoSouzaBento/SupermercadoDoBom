import { CentralizeDiv } from '@components/GenericStylizedTags';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 6;
  /* wrapper lateral */
  & > div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--white-foreground);
    box-shadow: var(--shadow-md);
    transition: transform 0.4s ease;
    transform: translateX(${(props) => props.$transform});

    @media screen and (max-width: 375px) {
      max-width: none;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      max-width: 330px;
    }
    @media screen and (min-width: 577px) {
      max-width: 360px;
    }
    @media screen and (min-width: 993px) {
      max-width: 390px;
    }
    /* header */
    & > div:first-child {
      height: 56px;
      width: 100%;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      background-color: var(--primary);
      position: relative;
      user-select: none;

      & > h3 {
        width: 100%;
        text-align: left;
        padding-bottom: 2px;
        padding-left: 18px;
        scale: 0.91;
        color: var(--white-foreground);
      }

    }
  }
`;

export const DivNameSpanStyled = styled.div`
  height: 48px;
  width: calc(100% - 32px);
  margin: auto;
  box-sizing: border-box;
  padding-left: 14px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  border-radius: 4px;
  ${(props) => props.$logout && 'margin-top: 25px;'}

  & p {
    padding-right: 12px;
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
  height: 56px;
  border-radius: 28px;
  flex: none;
  cursor: pointer;

  & span {
    font-weight: 550;
    font-size: 22.5px;
    font-variation-settings: 'FILL' 1, 'GRAD' 12, 'opsz' 30;
    color: var(--primary);
    user-select: none;
    padding-top: 1px;
    ${(props) => props.$logout && 'font-weight: 500;'}
  }
`;
