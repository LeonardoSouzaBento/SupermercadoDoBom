import styled, { css } from 'styled-components';

export const WrapperSc = styled.div`
  padding: 4px;
  display: flex;
  justify-content: space-between;
  background-color: var(--white-foreground);
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: box-shadow 0.2s ease;
  flex-direction: row;
  height: 180px;
  min-width: 270px;
  max-width: 270px;

  //retrato
  @media screen and (min-width: 385px) and (max-width: 414px) {
    gap: 0;
  }
  @media screen and (min-width: 385px) {
    flex-direction: column;
    min-width: 170px;
    max-width: 170px;
    height: 280px;
  }
  //paisagem
  @media screen and (min-width: 992px) {
    flex-direction: row;
    min-width: 275px;
    max-width: 275px;
    height: 177px;
  }

  ${(props) =>
    props.$variant !== 'cart' &&
    css`
      &:hover {
        box-shadow: var(--shadow-sm);
      }
    `}

  ${(props) =>
    props.$variant == 'cart' &&
    css`
      border: 1px solid var(--border);
      @media screen and (max-width: 430px) {
        flex-direction: row;
        height: 180px;
        min-width: 100%;
      }
    `};

  ${(props) =>
    props.$variant === 'announcement' &&
    css`
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 2;

      @media screen and (max-width: 385px) {
        max-width: none;
        max-height: none;
      }
      @media screen and (min-width: 385px) and (max-width: 992px) {
        max-width: none;
        max-height: none;
        min-height: none;
        max-height: none;
      }
      //paisagem
      @media screen and (min-width: 993px) {
        min-width: none;
        max-width: none;
        height: 100%;
      }
    `}
`;

export const InfoWrapperSc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  //paisagem
  @media screen and (max-width: 385px) {
    height: 100%;
    width: 48%;
    padding: 1.1px;
    padding-right: 0;
  }
  //retrato
  @media screen and (min-width: 385px) {
    padding: 8px;
  }
  @media screen and (min-width: 385px) and (max-width: 992px) {
    height: 46%;
    width: 100%;
    order: 2;
    gap: 4px;
  }
  //paisagem
  @media screen and (min-width: 993px) {
    width: 130px;
    padding-right: 0;
  }
  ${(props) => props.$variant === 'announcement' && 'display: none !important;'};

  /* wrapper-nome */
  & > div:first-child {
    max-height: 76px;
    display: flex;
    justify-items: center;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    padding-bottom: 12px;

    & > p {
      text-transform: capitalize;
      margin: auto;
      padding-left: 4px;
      line-height: 1.3;
    }
  }
  /* wrapper preço e peso */
  & > div:last-child {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;

    @media screen and (min-width: 385px) and (max-width: 992px) {
      flex-direction: row;
      justify-content: center;
    }
    /* wrapper peso */
    & #weight {
      font-size: var(--text-xs);
      font-weight: 500;
      letter-spacing: 0.5px;
      background-color: hsla(var(--primary-50), 0.88);
      color: var(--muted-foreground);
      padding: 0 8.5px;
      border-radius: 999px;
      ${(props) => props.$exist === false && 'display: none;'}
      @media screen and (min-width: 385px) and (max-width: 992px) {
        display: none;
      }
    }
    /* wrapper preço */
    & #price {
      height: auto;
      display: flex;
      align-items: center;

      @media screen and (min-width: 385px) and (max-width: 992px) {
        padding-right: 4px;
        box-sizing: border-box;
        order: 1;
        padding-right: 4px;
      }
      & p {
        width: max-content;
        font-weight: 600;
        font-size: var(--text-lg);
      }
      & > p:last-child {
        text-indent: 4px;
        padding: 2px 0px;
        @media screen and (max-width: 385px) {
          letter-spacing: 1px;
        }
      }
    }
  }
`;

export const ImageWrapperSc = styled.div`
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
    border-radius: 6px;
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
      padding: 8px;
      box-sizing: border-box;
      -webkit-user-select: none;
      user-select: none;

      @media screen and (min-width: 993px) {
        height: auto;
        padding: 4px;
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
      bottom: 45px;
      right: 7px;
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
      top: 8px;
      right: 8px;
      padding: 0 6px;
      background-color: var(--background);
      border-radius: 999px;

      ${(props) => props.$variant === 'announcement' && 'display: none;'};
    }
  }
  & button#button-add {
    position: absolute;
    bottom: 8px;
    right: 5%;
    border-radius: 999px;

    @media screen and (min-width: 385px) and (max-width: 992px) {
      right: 12px;
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
    width: 32px;
    height: 32px;
    position: absolute;
    bottom: 8px;
    right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    cursor: pointer;

    @media screen and (min-width: 385px) and (max-width: 992px) {
      right: 12px;
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
