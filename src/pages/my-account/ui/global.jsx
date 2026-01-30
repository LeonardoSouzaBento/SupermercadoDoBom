import styled, { css } from 'styled-components';

export const WrapperStyled = styled.div`
  width: 100%;
  height: max-content;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
  background-color: var(--white-foreground);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  ${(props) => props.$orders && 'padding-top: 0;'}
`;

export const CardHeaderStyled = styled.div`
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  ${(props) => props.$orders && 'padding-right: 0;'}

  @media screen and (max-width: 520px) {
    flex-direction: column;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 520px) and (max-width: 993px) {
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 993px) and (max-width: 1058px) {
    flex-direction: column;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1058px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const CardTitleStyled = styled.header`
  height: 56px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 16px;
  margin-bottom: 4px;
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
