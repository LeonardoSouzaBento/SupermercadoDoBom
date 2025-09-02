import styled from "styled-components";
import { H1BaseStyled } from "../../GenericStylizedTags";

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
  background-color: #ebeff4;
  border-radius: 16px 16px 0px 0px;
  transform: translateY(${(props) => props.$translate});
  transition: transform 0.3s ease;
  box-shadow: 0px -4px 8px -2px rgba(41, 46, 117, 0.08);

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
  width: 44px;
  height: 44px;
  margin-left: calc(100% - 48px);
  margin-bottom: -44px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 4px;
  right: 0px;
  cursor: pointer;
  z-index: 3;
  border-radius: 4px 12px 4px 4px;

  &:hover {
    background-color: #ecf0f5;
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
      background-color: #ecf0f5;
    }

    @media screen and (min-width: 920px) {
      &:hover {
        background-color: hsla(213, 31%, 90%, 1);
      }
    }
  }
`;

export const SpanCloseStyled = styled.span`
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  /* color: #292e4e; */

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
    background-color: #292e4e;
    border-bottom: 1px solid rgb(0, 0, 0);
  }
`;

export const ProductDivStyled = styled.div`
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
  background-color: #db2c32;
  padding: 0px 14px;
  padding-bottom: 2.5px;
  color: white;
  border-radius: 16px;
`;

export const DivWeightStyled = styled(DivDiscountStyled)`
  position: absolute;
  bottom: 38px;
  background-color: #ebeff4;
  color: rgb(30, 30, 30);
`;

export const PWeightStyled = styled.p`
  font-family: var(--p-font);
  font-weight: 400;
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
  border-top: 1px solid rgba(41, 46, 117, 0.19);
  border-bottom: 1px solid rgba(41, 46, 117, 0.19);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PNameProdStyled = styled.p`
  width: 100%;
  padding: 16px 0px;
  font-family: var(--p-font);
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
  font-family: var(--p-font);
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
  background-color: #db2c32;
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
  font-family: var(--p-font);
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
    font-size: 1.15em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.16em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.165em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.167em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.168em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.17em;
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
  background-color: #ebeff4;
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
  @media screen and (min-width: 577px) and (max-width: 850px){
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

export const DivCoverSubStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebeff4;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const SimilarSectionDivStyled = styled.div`
  width: 100%;
  height: max-content;
  background-color: #ecf0f5;
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
  min-height: 54px;
  margin-bottom: 16px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #ebeff4;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media screen and (min-width: 577px) {
    margin-bottom: 12px;
  }
`;

export const H1Styled = styled(H1BaseStyled)`
  width: 100%;
  color: #292e4e;
  padding-bottom: 4px;
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
