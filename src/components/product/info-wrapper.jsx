import styled from 'styled-components';

export const InfoWrapperStyled = styled.div`
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

