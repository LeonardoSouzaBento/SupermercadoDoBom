import styled, { css } from 'styled-components';
import { CentralizeDiv, H1BaseStyled } from '@components/GenericStylizedTags';

export const MainStyled = styled.div`
  width: 100%;
  min-height: 100%;
  margin: auto;
  position: relative;
  opacity: ${(props) => props.$opacity};
  transition: opacity 0.5s ease;
  padding-bottom: 32px;

  &::after {
    content: '';
    width: 100%;
    height: 6px;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--primary);
    z-index: -1;
  }
`;

export const DivHeaderMainStyled = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 0;
  background-color: var(--primary);
  display: flex;
  align-items: center;
`;

export const H1Styled = styled(H1BaseStyled)`
  width: max-content;
  margin: auto;
  text-align: left;

  @media screen and (max-width: 414px) {
    margin: 0;
    padding-left: 20px;
  }
  @media screen and (min-width: 414px) and (max-width: 596px) {
    width: 400px;
  }
  @media screen and (min-width: 596px) and (max-width: 768px) {
    width: 575px;
  }
  @media screen and (min-width: 769px) {
    width: 724px;
  }

  ${(props) =>
    props.$login &&
    css`
      text-align: center;
      padding-left: 0px !important;
    `}
`;

/*container de produtos*/
export const CartSectionStyed = styled.section`
  width: calc(100% - 28px);
  height: 460px;
  padding: 20px 0;
  padding-top: 10px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: var(--shadow-md);

  position: relative;
  transition: height 0.15s ease;
  background-color: var(--white-foreground);
  overflow: hidden;
  transition: all 0.15s ease;

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  @media screen and (max-width: 596px) {
    max-width: 400px;
  }
  @media screen and (min-width: 596px) and (max-width: 768px) {
    max-width: 575px;
  }

  @media screen and (min-width: 769px) {
    height: 500px;
    width: 724px;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    margin-bottom: 16px;
  }
  @media screen and (min-width: 993px) {
    max-width: calc(100% - 64px);
  }
`;

export const HeaderCartStyled = styled.div`
  height: 44px;
  width: calc(100% - 40px);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid var(--border);
  z-index: 2;

  @media screen and (min-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;
  }
`;

export const DivSpanDeleteStyled = styled(CentralizeDiv)`
  min-width: 40px;
  height: 40px;
  margin-bottom: 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 8px;
  background-color: var(--bluish-white);
  transition: all 0.15s ease;
  color: var(--primary);

  &:hover {
    background-color: var(--bluish-white-hover);
  }

  & span {
    font-variation-settings: 'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 22;
  }
`;

// (Get-Content "src/pages/Cart/StylizedTags.jsx" -Raw) `
//     -replace '@media[^{]+{\s*font-size:\s*[^;]+em;\s*}', '' |
//     Set-Content "src/pages/Cart/StylizedTags.jsx"

export const ShadowStyled = styled.div`
  width: 100%;
  height: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0));
  background-size: 100% 100%;
  border-radius: 0px 0px 10px 10px;

  @media screen and (min-width: 769px) {
    width: calc(100% - 31px);
    margin-left: 15px;
  }
  @media screen and (min-width: 993px) {
    display: none;
  }
`;

export const DivSeeAllStyled = styled.div`
  height: 49px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  position: absolute;
  bottom: -1px;
  left: 0;
  background-color: var(--white-foreground);
  color: var(--dark-primary);
  z-index: 2;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  @media screen and (min-width: 769px) {
    display: none;
  }

  & p {
    font-weight: 600;
    font-family: var(--font-button);
    text-transform: uppercase;
    user-select: none;
  }

  & span {
    padding-top: 2px;

    @media screen and (min-width: 385px) and (max-width: 576px) {
      padding-top: 2.5px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      padding-top: 3px;
    }
  }
`;

/*div detalhes e div recebimento*/
export const ContinueSectionStyled = styled.div`
  width: 100%;
  margin: auto;

  @media screen and (min-width: 769px) {
    width: max-content;
    display: flex;
    justify-content: center;
    gap: 16px;
  }
`;

export const ContainerStyled = styled.section`
  margin: auto;
  width: max-content;
  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  @media screen and (max-width: 768px) {
    width: calc(100% - 28px);
    max-width: 400px;
  }
  @media screen and (min-width: 769px) {
    width: 50%;
    max-width: 370px;
    margin: 0;
    flex: auto;
  }
`;

export const SectionStyled = styled.section`
  height: auto;
  width: 100%;
  height: 230px;
  padding: 20px;
  padding-top: 10px;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
  align-items: flex-end;
  box-sizing: border-box;
  background-color: var(--white-foreground);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  overflow: hidden;
  position: relative;
  transition: all 0.15s ease;

  @media screen and (min-width: 769px) {
    margin-bottom: 16px;
  }
`;

/*cabeçalho das divs*/
export const HeaderH2Styled = styled.header`
  height: 48px;
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid var(--border);

  ${(props) =>
    props.$cart &&
    css`
      gap: 8px;
      width: calc(100% - 40px);
      margin: auto;
    `}
`;

export const H2Styled = styled.h2`
  font-weight: 700;
  color: var(--primary);
`;

export const ReceiptOptionStyled = styled.div`
  width: 100%;
  height: 44px;
  margin-bottom: 8px;
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: var(--white-foreground);
  transition: all 0.15s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--white-hover);
  }
  ${(props) =>
    props.$selected &&
    css`
      background-color: var(--bluish-white);
      &:hover {
        background-color: var(--bluish-white-hover);
      }
    `}

  ${(props) => props.$variant === 'retirar' && 'padding: 8px 16px;'};
  ${(props) => props.$variant === 'entregar' && 'margin-bottom: 0px;'}
`;

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
  padding: 8px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: var(--secondary);
  overflow: hidden;
  scale: ${(props) => props.$scale};
  transition: scale 0.3s ease;

  @media screen and (min-width: 769px) {
    margin: 0;
    margin-bottom: 12px;
  }
`;

export const DivAllValuesStyled = styled.div`
  width: 100%;
  height: 136px;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  border: 1px solid var(--border);
  position: relative;

  & div:not(#warn) {
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid var(--border);
  }
`;

export const ButtonContinueStyled = styled.div`
  width: 100%;
  height: 48px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
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

export const DivAddStyled = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
  height: 48px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
  background-color: var(--white-foreground);
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

//caixa de diálogo
export const ContainerDialogStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
`;

export const DivDialogStyled = styled.div`
  width: calc(100% - 16px);
  max-width: 300px;
  padding-bottom: 16px;
  margin-right: 12px;
  margin-top: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
  background-color: var(--white-foreground);
  overflow: hidden;
  ${(props) => props.$feedback && 'background-color: var(--dark-green);'};
  box-shadow: var(--shadow-md);
  transition: height 0.15s ease;
  position: relative;

  & span {
    font-size: 40px;
    padding: 5px;
    margin-bottom: 12px;
    color: var(--dark-primary);
    font-weight: 700;
    background-color: var(--light-green);
    border-radius: 50%;
    cursor: default;
  }
`;

export const DivToCoverStyled = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #ebeff4;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const DivQuestionStyled = styled(CentralizeDiv)`
  width: 100%;
  height: 56px;
  margin-bottom: 16px;
  background-color: var(--white-foreground);
  ${(props) => !props.$feedback && 'border-bottom: 1px solid var(--light-border);'}
  ${(props) => props.$feedback && 'background-color: var(--dark-green);'}

  & h1 {
    font-weight: 700;
    scale: 0.9;
  }
`;

export const DivSimNaoStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
`;

export const ButtonStyled = styled(CentralizeDiv)`
  height: 48px;
  width: calc(100% - 32px);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  color: var(--white-foreground);
  transition: all 0.15 ease;
  background-color: var(--secondary);

  &:hover {
    background-color: var(--secondary-hover);
  }

  ${(props) =>
    props.$voltar &&
    css`
      margin-top: 12px;
      color: var(--black-foreground);
      background-color: var(--background);
      &:hover {
        background-color: var(--back-hover);
      }
    `};

  & p {
    font-family: var(--font-button);
    font-weight: 550;
    padding-bottom: 2px;
    text-align: center;
    letter-spacing: 0.72px;
    border-radius: 4px;
  }
`;

/*Ps*/
export const PAvisoStyled = styled.p`
  color: var(--white-foreground);
`;

export const PValueStyled = styled.p`
  font-weight: 450;
  cursor: default;
  padding-bottom: 2px;
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

export const PAddStyled = styled.p`
  font-family: var(--font-button);
  font-weight: 550;
  color: var(--dark-primary);
  ${(props) =>
    props.$warn &&
    css`
      width: 86%;
    `};
`;

export const H1AlertStyled = styled.h1`
  font-weight: 500;
`;

export const BodyAlertStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: hsla(213, 29%, 94%, 1);
  transition: opacity 0.4s ease;
  opacity: ${(props) => props.$opacity};

  & div {
    height: 230px;
    width: 350px;
    padding: 20px;
    box-sizing: border-box;
    background-color: var(--secondary);
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & h1 {
    font-weight: 500;
  }
`;
