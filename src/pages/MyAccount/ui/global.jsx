import styled, { css } from 'styled-components';

export const WrapperStyled = styled.div`
  width: 100%;
  height: max-content;
  margin: auto;
  padding: 2rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
  background-color: var(--white-foreground);
  border-radius: 1.2rem;
  box-shadow: var(--shadow-md);
  ${(props) => props.$orders && 'padding-top: 0;'}
`;

export const StatusStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  
  & > div {
    height: 2.4rem;
    width: max-content;
    padding: 2px 0;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.75ex;
    background-color: hsla(var(--warn-value), 0.12);
    color: var(--foreground);
    border-radius: 999px;
    border: 2px solid hsla(var(--destructive-value), 0.2);

    & > p {
      margin-right: 0.6rem;
      font-size: var(--text-xs);
      font-weight: 600;
      color: var(--destructive);
      ${(props) => props.$email && 'color: var(--black-foreground);'}
    }

    & > span {
      font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
      background-color: hsla(var(--warn-value), 0.3);
      color: var(--destructive);
      padding: 0.4rem;
      margin-bottom: 1px;
      border-radius: 50%;
      font-size: 1.6rem;
    }
  }
`;

export const CardHeaderStyled = styled.div`
  width: 100%;
  padding-right: 2rem;
  box-sizing: border-box;
  display: flex;
  ${(props) => props.$orders && 'padding-right: 0;'}

  @media screen and (max-width: 520px) {
    flex-direction: column;
    margin-bottom: 0.8rem;
  }
  @media screen and (min-width: 520px) and (max-width: 993px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (min-width: 993px) and (max-width: 1058px) {
    flex-direction: column;
    margin-bottom: 0.8rem;
  }
  @media screen and (min-width: 1058px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CardTitleStyled = styled.header`
  height: 5.6rem;
  width: 100%;
  box-sizing: border-box;
  padding-left: 1.6rem;
  margin-bottom: 0.4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75ex;
  ${(props) => props.$cart && 'width: max-content;'};
  ${(props) => props.$orders && 'padding-left: 0;'}
  @media screen and (min-width: 520px) {
    margin-bottom: 0;
  }
`;
