import styled from "styled-components";
import { DivToCoverStyled, H1BaseStyled, H2BaseStyled } from "../../GenericStylizedTags";

export const BodyDivStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 4;
`;

export const MainDivStyled = styled.div`
  width: 100%;
  height: 580px;
  box-sizing: border-box;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  background-color: var(--back-color);
  border-radius: 12px 12px 0px 0px;
  transform: translateY(${(props) => props.$translate});
  transition: transform 0.3s ease;
  box-shadow: 0px -4px 8px -4px rgba(41, 46, 117, 0.08);

  @media screen and (max-width: 577px) {
    padding-bottom: 62px;
  }

  @media screen and (min-width: 578px) {
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
`;

export const DivSpanCloseStyled = styled.div`
  width: 40px;
  height: 40px;
  margin-left: calc(100% - 48px);
  margin-bottom: -44px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 8px;
  right: -4px;
  background-color: var(--back-color);
  color: var(--purple);
  cursor: pointer;
  z-index: 3;
  border-radius: 50%;

  &:hover {
    background-color: var(--back-hover);
  }

  @media screen and (min-width: 578px) {
    width: auto;
    height: 24px;
    padding: 0 12px;
    padding-top: 1px;
    position: absolute;
    top: 0px;
    right: 50%;
    transform: translateX(50%);
    background-color: transparent;
    box-shadow: none;
    border-radius: 16px;

    &:hover {
      box-shadow: 0px 3px 6px -3px rgba(0, 0, 0, 0.5);
      background-color: transparent;
    }
  }
`;

export const SpanCloseStyled = styled.span`
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;

  @media screen and (min-width: 578px) {
    display: none;
  }
`;

export const SpanDropDownStyled = styled.span`
  display: none;
  @media screen and (min-width: 578px) {
    display: block;
    width: 64px;
    height: 5px;
    border-radius: 3px;
    background-color: var(--purple);
    border-bottom: 1px solid rgb(0, 0, 0);
  }
`;

export const ProductSectionStyled = styled.section`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;
  z-index: 2;
  @media screen and (max-width: 375px) {
    padding-left: 14px;
    padding-right: 14px;
  }
  @media screen and (min-width: 430px) and (max-width: 577px) {
    padding: 0px;
  }
  @media screen and (max-width: 577px) {
    z-index: 3;
    padding-bottom: 40px;
    padding-top: 8px;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 577px) {
    min-width: 320px;
    max-width: 430px;
    padding-bottom: 60px;
    box-sizing: content-box;
    overflow-y: scroll;
  }
  @media screen and (min-width: 768px) {
    min-width: 410px;
    padding: 0;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderStyled = styled.header`
  height: 56px;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--light-border);

  @media screen and (max-width: 576px) {
    padding-left: 20px;
  }
`;

export const SpanHeaderStyled = styled.span`
  color: var(--purple);
  font-variation-settings: "FILL" 1, "wght" 600, "GRAD" 0, "opsz" 0;
  font-size: 22px;
`;

export const H1Styled = styled(H1BaseStyled)`
  color: var(--purple);

  @media screen and (max-width: 375px) {
    font-size: 1.196em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.207em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.229em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.252em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.276em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.288em;
  }
`;

export const DivImgStyled = styled.div`
  display: block;
  margin: auto;
  width: 100%;
  height: 340px;
  position: relative;
  padding: 16px;
  margin-bottom: 8px;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */
  @media screen and (max-width: 375px) {
    height: auto;
  }

  @media screen and (max-width: 577px) {
    max-width: 340px;
  }
  @media screen and (min-width: 577px) {
    height: 320px;
    width: 320px;
  }
`;

export const ImgStyled = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  height: auto;
  box-sizing: border-box;
`;

export const DivDiscountStyled = styled.div`
  position: absolute;
  bottom: 4px;
  right: 0px;
  background-color: var(--red);
  padding: 0px 14px;
  padding-bottom: 2.5px;
  color: white;
  border-radius: 16px;
`;

export const DivWeightStyled = styled(DivDiscountStyled)`
  position: absolute;
  bottom: 38px;
  background-color: var(--back-color);
  color: rgb(30, 30, 30);
`;

export const PWeightStyled = styled.p`
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */
  color: #292e4e;

  @media screen and (max-width: 375px) {
    font-size: 1.01em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.025em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.03em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.04em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.05em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.06em;
  }
`;

export const DivNameProdStyled = styled.div`
  min-height: 56px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PNameProdStyled = styled.p`
  width: 100%;
  padding: 16px 0px;
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
  line-height: 1.4;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */

  @media screen and (max-width: 577px) {
    max-width: 350px;
  }
  @media screen and (min-width: 577px) {
    max-width: 330px;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.02em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.035em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.04em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.045em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.055em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.06em;
  }
`;

export const DivPriceStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-bottom: 4px;
`;

export const PPriceStyled = styled.p`
  font-weight: 600;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */

  @media screen and (max-width: 375px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.13em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.135em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.14em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.145em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.15em;
  }
`;

export const ContainerQuantStyled = styled.div`
  max-width: calc(100% - 32px);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: auto;
`;

export const DivQuantFullStyled = styled.div`
  width: 100%;
  min-width: 200px;
  max-width: 200px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--red);
  border-radius: 8px;
  cursor: pointer;

  @media screen and (max-width: 350px) {
    min-width: 180px;
  }
`;

export const DivButtonsStyled = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanButtonsStyled = styled.span`
  color: white;
  font-weight: 400;
  padding-bottom: 3px;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */
  ${(props) => props.$add && "padding-top: 2px;"}
  ${(props) => props.$add && "scale: 0.9;"}

  @media screen and (max-width: 375px) {
    font-size: 1.42em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.48em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.53em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.58em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.61em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.64em;
  }
`;

export const PQuantFullStyled = styled.p`
  width: 100%;
  color: white;
  text-align: center;
  font-weight: 500;
  padding-bottom: 1px;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */
  scale: 1.06;
  padding-bottom: 3px;

  @media screen and (max-width: 375px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.289em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.307em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.327em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.346em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.356em;
  }
`;

export const PAddStyled = styled(PQuantFullStyled)`
  width: max-content;
  color: white;
  text-align: left;
  padding-left: 4px;
  padding-bottom: 2px;
  font-weight: 400;
  scale: 1.05;
`;

export const DivSubStyled = styled.div`
  height: 48px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--border);
  /* background-color: rgb(250, 250, 250); */
  border-radius: 8px;
  position: relative;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: 0;
  }
  @media screen and (min-width: 345px) and (max-width: 420px) {
    max-width: 35%;
  }
  @media screen and (min-width: 420px) and (max-width: 577px) {
    width: max-content;
  }
  @media screen and (min-width: 577px) and (max-width: 850px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const PSubStyled = styled(PNameProdStyled)`
  font-weight: 700;
  letter-spacing: 0.35px;
  text-transform: none;
  width: max-content;
  padding: 0;
  @media screen and (max-width: 375px) {
    font-size: 1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.01em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.02em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.03em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.04em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.045em;
  }
`;

export const DivCoverSubStyled = styled(DivToCoverStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
`;

export const SimilarSectionStyled = styled.section`
  width: 100%;
  height: max-content;
  background-color: var(--back-color);
  position: relative;
  pointer-events: none;
  touch-action: none;
  @media screen and (min-width: 578px) {
    order: 1;
    overflow-y: scroll;
    border-radius: 7px;
    height: 100%;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DivTitleStyled = styled.div`
  width: 100%;
  min-height: 56px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--back-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  /* border-bottom: 1px solid var(--border); */

  @media screen and (min-width: 577px) {
    margin-bottom: 12px;
  }
`;

export const H2Styled = styled(H2BaseStyled)`
  width: 100%;
  color: var(--dark-purple);
  padding-bottom: 4px;
  scale: 0.945;
`;

export const ContainerListStyled = styled.div`
  overflow-x: scroll;
  padding-left: 20px;

  @media screen and (max-width: 375px) {
    padding-left: 15px;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 577px) and (max-width: 720px) {
    padding-left: 0px;
    max-height: 100%;
    overflow: scroll;
  }
`;

export const DivHalfList = styled.div`
  height: auto;
  width: auto;
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  justify-items: flex-start;
  padding-right: 12px;

  @media screen and (min-width: 577px) and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    padding-right: 0px;
    margin: auto;
    margin-bottom: 12px;
  }
`;
