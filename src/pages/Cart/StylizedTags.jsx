import styled, { css } from 'styled-components';

export const SpanReceiptStyled = styled.span`
  color: var(--primary);
  ${(props) =>
    !props.$selected &&
    css`
      color: rgba(160, 160, 160, 1);
      font-weight: 200;
    `};
  font-variation-settings: 'FILL' 1;
`;

export const DivAvisoStyled = styled.div`
  width: 100%;
  height: max-content;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.8rem 1.6rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  background-color: var(--secondary);
  overflow: hidden;
  scale: ${(props) => props.$scale};
  transition: scale 0.3s ease;

  @media screen and (min-width: 769px) {
    margin: 0;
    margin-bottom: 1.2rem;
  }
`;

export const DivAllValuesStyled = styled.div`
  width: 100%;
  height: 13.6rem;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  border: 1px solid var(--border);
  position: relative;

  & div:not(#warn) {
    width: 100%;
    height: 4.4rem;
    box-sizing: border-box;
    padding: 0 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid var(--border);
  }
`;

export const ButtonContinueStyled = styled.div`
  width: 100%;
  height: 4.8rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: background-color 0.15s ease;
  color: var(--white-foreground);
  background-color: ${(props) => (props.$nocontinue ? '#C2C6CA' : '#383d6a')};
  &:hover {
    background-color: ${(props) =>
      !props.$nocontinue ? 'hsla(234, 31%, 27%, 1)' : 'hsla(210, 7%, 68%, 1.00)'};
  }

  ${(props) =>
    props.$myAccount &&
    css`
      background-color: ${(props) => (!props.$enable ? 'var(--disable)' : 'var(--dark-green)')};
      &:hover {
        background-color: ${(props) =>
          !props.$enable ? 'var(--disable-hover)' : 'var(--dark-green)'};
      }
    `}

  @media screen and (min-width: 769px) {
    margin: 0;
  }
`;

/*Ps*/
export const PAvisoStyled = styled.p`
  color: var(--white-foreground);
`;

export const PValueStyled = styled.p`
  font-weight: 450;
  cursor: default;
  padding-bottom: 0.2rem;
  ${(props) => props.$selected && 'font-weight: 600;'}
  ${(props) =>
    props.$email &&
    css`
      width: 100%;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 400;
      scale: 0.94;
      ${(props) => props.$last && 'width: max-content;'}
    `}
  & strong {
    font-weight: 650;
  }
`;

