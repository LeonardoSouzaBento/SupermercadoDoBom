import styled from 'styled-components';
import { flexCenter } from '@/css/baseStyles';

export const ContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 4;

  & > div {
    width: 100%;
    height: 580px;
    box-sizing: border-box;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    border-radius: 12px 12px 0px 0px;
    transform: translateY(${(props) => props.$translate});
    transition: transform 0.3s ease;
    box-shadow: var(--shadow-sm);

    @media screen and (max-width: 577px) {
      padding-bottom: 62px;
    }

    @media screen and (min-width: 840px) {
      display: flex;
      overflow-y: hidden;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      visibility: hidden;
    }
    & > button {
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 6;
      border-radius: 999px;
    }
  }
  /* seção do produto clicado */
  & div#product-full-section {
    width: 100%;
    background-color: var(--white-foreground);
    box-sizing: border-box;
    padding-inline: 16px;
    padding-bottom: 32px;
    z-index: 2;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    & > div#subtotal-and-button {
      ${flexCenter}
      height: auto;
      max-width: 420px;
      gap: 16px;
      margin: auto;
      box-sizing: border-box;

      & > div:first-child {
        height: 48px;
        width: 100%;
        max-width: max-content;
        padding: 0 16px;
        ${flexCenter}
        gap: 8px;
        background-color: var(--background);
        border-radius: 8px;
        position: relative;
        @media screen and (max-width: 420px) {
          flex-direction: column;
          gap: 0;
        }

        & > div {
          ${flexCenter}
          background-color: var(--background);
          border-radius: 8px;
          & > p {
            font-size: var(--text-sm);
            font-weight: 500;
            letter-spacing: 0.35px;
            text-transform: uppercase;
            width: max-content;
            padding: 0;
            color: rgba(0, 0, 0, 0.9);
          }
        }
      }
    }
  }
  /* seção de produtos similares */
  & div#similar-products-section {
    width: 100%;
    height: 100%;
    background: linear-gradient(-135deg, hsl(var(--white-value)), var(--background));
    position: relative;
    pointer-events: none;
    touch-action: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    & > h3 {
      margin-top: 24px;
      margin-bottom: 16px;
      width: 100%;
      text-align: center;
      color: var(--primary);
    }

    & #warning {
      width: calc(100% - 32px);
      max-width: max-content;
      color: var(--red-brand-hover);
      margin: auto;
      text-align: center;
      font-weight: 600;
      padding: 12px;
      border-radius: 8px;
      border: 1px solid var(--border);
      box-shadow: var(--shadow-md);
    }
  }
`;

