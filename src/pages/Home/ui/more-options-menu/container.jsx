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
      max-width: 33rem;
    }
    @media screen and (min-width: 577px) {
      max-width: 36rem;
    }
    @media screen and (min-width: 993px) {
      max-width: 39rem;
    }
    /* header */
    & > div:first-child {
      height: 5.6rem;
      width: 100%;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      background-color: var(--primary);
      position: relative;
      user-select: none;

      & > h3 {
        width: 100%;
        text-align: left;
        padding-bottom: 0.2rem;
        padding-left: 1.8rem;
        scale: 0.91;
        color: var(--white-foreground);
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
