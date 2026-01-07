import { CentralizeDiv, H1BaseStyled } from '@components/GenericStylizedTags';
import styled, { css } from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 6rem;
  background-color: var(--primary);
  display: flex;
  align-items: center;
`;

export const H1Styled = styled(H1BaseStyled)`
  margin: auto;
  text-align: left;

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 375px) {
    width: calc(100% - 28px);
    max-width: 52rem;
  }
  @media screen and (min-width: 993px) and (max-width: 1085px) {
    width: max-content;
    margin: 0;
    margin-left: 1.6rem;
  }
  @media screen and (min-width: 1085px) {
    max-width: 105.6rem;
  }
`;

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 993px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding: 0 1.7rem;
    box-sizing: border-box;
  }

  &::after {
    content: '';
    width: 100%;
    height: 0.6rem;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--primary);
    z-index: -1;
  }
`;

export const DivOneTwoStyled = styled.div`
  height: auto;
  width: 100%;
  max-width: 52rem;
  margin: auto;

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    width: calc(100% - 28px);
  }
  @media screen and (min-width: 993px) {
    width: 50%;
    margin: 0;
  }
`;

export const DivOneStyled = styled.div`
  width: 100%;
  height: max-content;
  margin: auto;
  padding: 2rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.8rem;
  background-color: var(--white-foreground);
  border-radius: 1.2rem;
  box-shadow: var(--shadow-md);
  ${(props) => props.$orders && 'padding-top: 0;'}
`;

export const ProfileCardHeaderStyled = styled.div`
  width: 100%;
  margin: auto;
  padding: 1.6rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 0.6rem;
  position: relative;

  & > div:first-child {
    width: max-content;
    box-sizing: border-box;
    display: flex;
    gap: 1.2rem;

    @media screen and (max-width: 512px) {
      flex-direction: column;
    }

    /* wrapper da foto do usuario */
    & > div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 5.8rem;
      width: 5.8rem;
      border-radius: 50%;
      overflow: hidden;
      background-color: #ecf0f5;
      position: relative;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        scale: 1.02;
      }
    }

    /* wrapper do nome e email do usuario */
    & > div:last-child {
      width: max-content;
      height: auto;
    }
  }
`;

export const ButtonLoginStyled = styled(CentralizeDiv)`
  height: 4.8rem;
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  border-radius: 0.8rem;
  background-color: var(--primary);
  color: var(--white-foreground);
  cursor: pointer;
  transition: all 0.15s ease;
  border: none;

  &:hover {
    background-color: var(--primary-hover);
  }
`;

export const PLoginStlyed = styled.p`
  font-weight: 500;
`;

export const DivNameEmailStyled = styled.header`
  width: max-content;
  height: auto;
`;

export const DivEmailUserStyled = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const DivTwoStyled = styled(DivOneStyled)`
  padding: 0;
  padding-top: 0;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  @media screen and (min-width: 993px) {
    margin-bottom: 0;
  }
  position: relative;
`;

export const DivThreeButtonStyled = styled.div`
  width: 100%;
  max-width: 52rem;
  margin: auto;

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    width: calc(100% - 28px);
  }
  @media screen and (min-width: 993px) {
    width: 50%;
    margin: 0;
  }
`;

export const DivThreeStyled = styled.div`
  height: max-content;
  width: 100%;
  margin: auto;
  margin-bottom: 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  background-color: var(--white-foreground);
  border-radius: 1.2rem;
  box-shadow: var(--shadow-md);
`;

export const DivH2StatusStyled = styled.div`
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

export const HeaderH2Styled = styled.header`
  height: 5.6rem;
  width: 100%;
  box-sizing: border-box;
  padding-left: 1.6rem;
  margin-bottom: 0.4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${(props) => props.$cart && 'width: max-content;'};
  ${(props) => props.$orders && 'padding-left: 0;'}
  @media screen and (min-width: 520px) {
    margin-bottom: 0;
  }
`;

export const SpanH2Styled = styled.span`
  font-variation-settings: 'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 22;
  cursor: default;
  color: var(--primary);
  margin-right: 0.8rem;

  ${(props) => props.$smaller && 'font-size: 2.1rem;'}
  ${(props) => props.$bigger && 'font-size: 2.5rem;'}
  ${(props) =>
    props.$user &&
    css`
      margin-right: 0;
      font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 22;
    `};
  ${(props) =>
    props.$cart &&
    css`
      font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 22;
    `}
`;

export const H2v2Styled = styled.h3`
  margin-bottom: 0;
  font-weight: 700;
  color: var(--primary);

  ${(props) =>
    props.$nameUser &&
    css`
      scale: 1.04;
      margin-left: 0.4rem;
      width: 100%;
    `};
`;

export const StatusWrapperStyled = styled.div`
  width: 100%;
  padding-left: 2rem;
  box-sizing: border-box;
  display: flex;

  ${(props) => (props.$finish || props.$user) && 'padding-left: 0;'}

  @media screen and (min-width: 520px) and (max-width: 993px) {
    width: 50%;
    padding-left: 0;
    justify-content: flex-end;
    ${(props) => props.$user && 'width: 100%;'}

    ${(props) =>
      (props.$finish || props.$contact) &&
      css`
        justify-content: flex-start;
        margin-left: 2rem;
        ${(props) => props.$finish && 'margin-left: 0;'}
      `}
  }

  @media screen and (min-width: 993px) and (max-width: 1058px) {
    justify-content: flex-start;

    ${(props) =>
      props.$user &&
      css`
        justify-content: flex-start;
      `}
  }

  @media screen and (min-width: 1058px) {
    width: 50%;
    margin: 0;
    padding: 0;
    justify-content: flex-end;

    ${(props) =>
      props.$user &&
      css`
        width: 100%;
        justify-content: flex-end;
      `}
  }

  & > div {
    height: 2.4rem;
    width: max-content;
    padding: 2px 0;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;
    background-color: hsla(var(--warn-value), 0.2);
    color: var(--foreground);
    border-radius: 999px;

    & > p {
      margin-right: 0.6rem;
      font-size: var(--text-xs);
      font-weight: 600;
      ${(props) => props.$email && 'color: var(--black-foreground);'}
    }

    & > span {
      font-variation-settings: 'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 24;
      background-color: hsla(var(--warn-value), 0.3);
      color: var(--destructive);
      padding: 0.4rem; 
      border-radius: 50%;
      font-size: 1.6rem;
    }
  }
`;

export const SpanCheckStyled = styled.span`
  position: absolute;
  top: 1.6rem;
  right: 2rem;
  padding: 0.4rem;
  border-radius: 50%;
  background-color: var(--light-green);
  color: var(--primary);
  z-index: 2;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const DivStyled = styled.div`
  width: 100%;
  padding: 2rem;
  padding-top: 0;
  box-sizing: border-box;
`;

export const H3Styled = styled.h3`
  width: 100%;
  text-align: left;
  scale: 1.01;
  font-weight: 600;
  font-family: var(--font-body);

  ${(props) => props.$hide && 'display: none;'}
  ${(props) =>
    props.$contact &&
    css`
      font-family: var(--font-button);
      text-align: center;
      padding-right: 2.6rem;
    `}
`;

export const Pv2Styled = styled.p`
  width: 100%;
  text-align: left;
  scale: 1.01;
  margin-bottom: 0;

  ${(props) => props.$hide && 'display: none;'}
  ${(props) =>
    props.$contact &&
    css`
      font-family: var(--font-button);
      text-align: center;
      padding-right: 2.6rem;
    `}
`;

export const DivInvalidWarnStyled = styled.div`
  width: calc(100% - 32px);
  height: auto;
  padding: 0.8rem 2rem;
  background-color: var(--red-brand-hover);
  border-radius: 0.4rem;
  margin: auto;
  margin-bottom: 0.8rem;
  box-sizing: border-box;
`;

export const DivZapStyled = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.$seeInput && 'align-items: flex-end;'};
  position: relative;
  overflow: hidden;
`;

export const DivZapAndDivPhone = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 1.6rem;
  margin-bottom: 1.6rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  ${(props) => !props.$visible && 'display: none;'}

  @media screen and (max-width: 576px) {
    flex-direction: column;
    height: 8.8rem;
    gap: 0.8rem;
  }
`;

export const DivZapOrPhone = styled(CentralizeDiv)`
  height: 100%;
  width: calc(100% - 16px);
  padding-left: 1.2rem;
  padding-right: 0.6rem;
  border-radius: 0.4rem;
  border: 1px solid var(--card-border);
  ${(props) => props.$selected && 'background-color: var(--background);'}

  @media screen and (max-width: 576px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const DivFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
  position: relative;

  @media screen and (max-width: 375px) {
    width: 100%;
  }
  ${(props) =>
    props.$first &&
    css`
      @media screen and (min-width: 375px) {
        width: 58%;
      }
    `}
  ${(props) =>
    props.$zap &&
    css`
      width: 100% !important;
      padding-right: 1.6rem;
      box-sizing: border-box;
    `}
`;

export const DivAddressStyled = styled.div`
  padding: 1.6rem;
  border: 1px solid var(--border);
  border-radius: 0.6rem;
  position: relative;
`;

export const DivHalfAddressStyled = styled.div`
  border-radius: 0.8rem;
  display: flex;
  gap: 1.6rem;
  ${(props) => props.$first && 'margin-bottom: 1.6rem;'}

  @media screen and (max-width: 385px) {
    flex-direction: column;
    gap: 0.8rem;
    ${(props) => props.$first && 'margin-bottom: 0.8rem;'}
  }
`;

export const DivSpanStyled = styled(CentralizeDiv)`
  height: 4.4rem;
  min-width: 4.4rem;
  z-index: 2;
  border-radius: 0.8rem;
  background-color: var(--primary);
  cursor: pointer;
  transition: background-color 0.15s ease;
  color: var(--white-foreground);

  &:hover {
    background-color: hsla(234, 31%, 26%, 1);
  }
  ${(props) =>
    (props.$first || props.$address) &&
    css`
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;
    `}
  ${(props) =>
    props.$disable &&
    css`
      border-radius: 0.4rem;
      background-color: var(--disable);
      &:hover {
        background-color: var(--disable-hover);
      }
    `}
  ${(props) =>
    props.$editUser &&
    css`
      @media screen and (max-width: 520px) {
        position: absolute;
        top: 1.2rem;
        right: 1.2rem;
      }
    `}
`;

export const SpanEditStyled = styled.span`
  font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 20;
`;

export const SpanEmailWarnStyled = styled.span`
  color: hsl(213, 11%, 45%);

  font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 20;
`;

export const InputZapStyled = styled.input`
  height: 4.4rem;
  width: 100%;
  padding-left: 0.8rem;
  padding-bottom: 0.3rem;
  box-sizing: border-box;
  border: none;
  background-color: var(--background);
  font-family: var(--font-body);
  font-weight: 400;
  border-radius: 0.4rem;

  &:focus {
    outline: none;
  }
  ${(props) => props.$hide && 'display: none;'}
`;
