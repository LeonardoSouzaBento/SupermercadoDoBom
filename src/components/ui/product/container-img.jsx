import styled, { css } from 'styled-components';
import { weightStyles } from '@components/product-list/product-item';

export const ImageWrapperStyled = styled.div`
  height: 100%;
  width: 52%;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (min-width: 385px) and (max-width: 992px) {
    height: 54%;
    width: 100%;
  }

  ${(props) =>
    props.$variant === 'announcement' &&
    css`
      width: 100%;
      height: 100%;
      @media screen and (min-width: 385px) and (max-width: 992px) {
        width: 100%;
        height: 100%;
      }
    `}

  & > div:first-child {
    width: 100%;
    height: 100%;
    border-radius: 0.6rem;
    -webkit-user-select: none;
    user-select: none;
    position: relative;

    @media screen and (min-width: 993px) {
      display: flex;
      align-items: center;
    }

    ${(props) =>
      props.$variant === 'announcement' &&
      css`
        @media screen and (min-width: 993px) {
          display: block;
        }
      `}
    /* imagem */
    & > img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      padding: 0.8rem;
      box-sizing: border-box;
      -webkit-user-select: none;
      user-select: none;

      @media screen and (min-width: 993px) {
        height: auto;
        padding: 0.4rem;
      }

      ${(props) =>
        props.$variant === 'announcement' &&
        css`
          object-fit: cover;
          height: 100%;
          width: 100%;

          @media screen and (min-width: 993px) {
            height: 100%;
          }
        `}
    }
    /* peso */
    & > p#weight {
      ${(props) => props.$weightStyles}
      backdrop-filter: blur(3px);
      position: absolute;
      bottom: 4.5rem;
      right: 0.7rem;
      @media screen and (max-width: 385px) {
        display: none;
      }
      @media screen and (min-width: 992px) {
        display: none;
      }
    }
    /* desconto */
    & > p#discount {
      color: var(--red-brand);
      font-weight: 400;
      font-size: var(--text-xs);
      width: max-content;
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;
      padding: 0 0.6rem;
      background-color: var(--background);
      border-radius: 999rem;

      ${(props) => props.$variant === 'announcement' && 'display: none;'};
    }
  }
  & button#button-add {
    position: absolute;
    bottom: 0.8rem;
    right: 5%;
    border-radius: 999rem;

    @media screen and (min-width: 385px) and (max-width: 992px) {
      right: 1.2rem;
      bottom: 0;
    }
    ${(props) =>
      (props.$variant === 'similarList' ||
        props.$variant === 'announcement' ||
        props.$variant === 'cart' ||
        props.$displayNone) &&
      'display: none;'}
  }
  & #quantity-in-cart {
    width: 3.2rem;
    height: 3.2rem;
    position: absolute;
    bottom: 0.8rem;
    right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    cursor: pointer;

    @media screen and (min-width: 385px) and (max-width: 992px) {
      right: 1.2rem;
      bottom: 0;
    }
    & p {
      color: var(--white-foreground);
      cursor: pointer;
      -webkit-user-select: none;
      user-select: none;
    }
  }
`;
