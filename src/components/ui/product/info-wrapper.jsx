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
    padding: 1.1rem;
    padding-right: 0;
  }
  //retrato
  @media screen and (min-width: 385px) {
    padding: 0.8rem;
  }
  @media screen and (min-width: 385px) and (max-width: 992px) {
    height: 46%;
    width: 100%;
    order: 2;
    gap: 0.4rem;
  }
  //paisagem
  @media screen and (min-width: 993px) {
    width: 13rem;
    padding-right: 0;
  }
  ${(props) => props.$variant === 'announcement' && 'display: none !important;'};

  /* wrapper-nome */
  & > div:first-child {
    max-height: 7.6rem;
    display: flex;
    justify-items: center;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    padding-bottom: 1.2rem;

    & > p {
      text-transform: capitalize;
      margin: auto;
      padding-left: 0.4rem;
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
    gap: 0.8rem;

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
      padding: 0 0.85rem;
      border-radius: 999rem;
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
        padding-right: 0.4rem;
        box-sizing: border-box;
        order: 1;
        padding-right: 0.4rem;
      }
      & p {
        width: max-content;
        font-weight: 600;
        font-size: var(--text-lg);
      }
      & > p:last-child {
        text-indent: 0.4rem;
        padding: 0.2rem 0px;
        @media screen and (max-width: 385px) {
          letter-spacing: 1px;
        }
      }
    }
  }
`;
