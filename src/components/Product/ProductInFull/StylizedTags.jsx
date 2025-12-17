import styled from "styled-components";
import {
  CentralizeDiv,
  DivToCoverStyled,
  H1BaseStyled,
  H2BaseStyled,
} from "../../GenericStylizedTags";

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
  height: 58rem;
  box-sizing: border-box;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  background-color: var(--background);
  border-radius: 1.2rem 1.2rem 0px 0px;
  transform: translateY(${(props) => props.$translate});
  transition: transform 0.3s ease;
  box-shadow: var(--shadow-sm);

  @media screen and (max-width: 577px) {
    padding-bottom: 6.2rem;
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

export const DivSpanCloseStyled = styled(CentralizeDiv)`
  width: 4rem;
  height: 4rem;
  margin-left: calc(100% - 48px);
  margin-bottom: -4.4rem;
  position: sticky;
  top: 0.8rem;
  right: -0.4rem;
  background-color: var(--bluish-white);
  color: var(--primary);
  cursor: pointer;
  z-index: 3;
  border-radius: 50%;

  &:hover {
    background-color: var(--bluish-white-hover);
  }

  @media screen and (min-width: 578px) {
    height: 2.4rem;
    width: 4.8rem;
    padding: 0 1.2rem;
    padding-top: 1px;
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
    background-color: transparent;
    box-shadow: none;
    border-radius: 1.6rem;

    &:hover {
      box-shadow: var(--shadow-sm);
      background-color: transparent;
    }
  }

  & span:first-child {
    font-weight: 500;
    cursor: pointer;

    @media screen and (min-width: 578px) {
      display: none;
    }
  }
`;

export const SpanDropDownStyled = styled.span`
  display: none;
  @media screen and (min-width: 578px) {
    display: block;
    width: 6.4rem;
    height: 0.5rem;
    border-radius: 0.3rem;
    background-color: var(--primary);
    border-bottom: 1px solid rgb(0, 0, 0);
  }
`;

export const ProductSectionStyled = styled.section`
  width: 100%;
  background-color: var(--white-foreground);
  box-sizing: border-box;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  z-index: 2;
  @media screen and (max-width: 375px) {
    padding-left: 1.4rem;
    padding-right: 1.4rem;
  }
  @media screen and (min-width: 430px) and (max-width: 577px) {
    padding: 0;
  }
  @media screen and (max-width: 577px) {
    z-index: 3;
    padding-bottom: 4rem;
    padding-top: 0.8rem;
    margin-bottom: 1.2rem;
  }
  @media screen and (min-width: 577px) {
    min-width: 32rem;
    max-width: 43rem;
    padding-bottom: 6rem;
    box-sizing: content-box;
    overflow-y: scroll;
  }
  @media screen and (min-width: 768px) {
    min-width: 41rem;
    padding: 0;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderStyled = styled.header`
  height: 5.6rem;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 1px solid var(--light-border);

  @media screen and (max-width: 576px) {
    padding-left: 2rem;
  }
`;

export const SpanHeaderStyled = styled.span`
  color: var(--primary);
  font-variation-settings: "FILL" 1, "wght" 600, "GRAD" 0, "opsz" 0;
  font-size: 2.2rem;
`;

export const H1Styled = styled(H1BaseStyled)`
  color: var(--primary);

  
  
  
  
  
  
`;

export const DivImgStyled = styled.div`
  display: block;
  margin: auto;
  width: 100%;
  height: 34rem;
  position: relative;
  padding: 1.6rem;
  margin-bottom: 0.8rem;
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
    max-width: 34rem;
  }
  @media screen and (min-width: 577px) {
    height: 32rem;
    width: 32rem;
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
  bottom: 0.4rem;
  right: 0;
  background-color: var(--secondary);
  padding: 0 1.4rem;
  padding-bottom: 0.25rem;
  color: var(--white-foreground);
  border-radius: 1.6rem;
`;

export const DivWeightStyled = styled(DivDiscountStyled)`
  position: absolute;
  bottom: 3.8rem;
  background-color: var(--background);
  color: rgb(30, 30, 30);
`;

export const PWeightStyled = styled.p`
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */
  color: #292e4e;

  
  
  
  
  
  
`;

export const DivNameProdStyled = styled(CentralizeDiv)`
  min-height: 5.6rem;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`;

export const PNameProdStyled = styled.p`
  width: 100%;
  padding: 1.6rem 0px;
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
  line-height: 1.4;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */

  @media screen and (max-width: 577px) {
    max-width: 35rem;
  }
  @media screen and (min-width: 577px) {
    max-width: 33rem;
  }

  
  
  
  
  
  
`;

export const DivPriceStyled = styled(CentralizeDiv)`
  height: 5.6rem;
  margin-bottom: 0.4rem;
`;

export const PPriceStyled = styled.p`
  font-weight: 600;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */

  
  
  
  
  
  
`;

export const ContainerQuantStyled = styled(CentralizeDiv)`
  max-width: calc(100% - 32px);
  height: auto;
  gap: 0.8rem;
  margin: auto;
`;

export const DivQuantFullStyled = styled.div`
  width: 100%;
  min-width: 20rem;
  max-width: 20rem;
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.15s ease;
  background-color: var(--secondary);
  &:hover {
    background-color: var(--secondary-hover);
  }
  border-radius: 0.8rem;
  cursor: pointer;

  @media screen and (max-width: 350px) {
    min-width: 18rem;
  }
`;

export const DivButtonsStyled = styled(CentralizeDiv)`
  width: 4.8rem;
  height: 4.8rem;

  & span {
    color: var(--white-foreground);
    padding-bottom: 0.3rem;
    -webkit-user-select: none; /* Safari, Chrome */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    user-select: none; /* Padrão */
    ${(props) => props.$add && "padding-top: 0.2rem;"}
    ${(props) => props.$add && "scale: 0.9;"}

    
    
    
    
    
    
  }
`;

export const PQuantFullStyled = styled.p`
  width: 100%;
  color: var(--white-foreground);
  text-align: center;
  font-weight: 500;
  padding-bottom: 1px;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */
  scale: 1.06;
  padding-bottom: 0.3rem;

  
  
  
  
  
  
`;

export const PAddStyled = styled(PQuantFullStyled)`
  width: max-content;
  color: var(--white-foreground);
  text-align: left;
  padding-left: 0.4rem;
  padding-bottom: 0.2rem;
  font-weight: 400;
  scale: 1.05;
`;

export const DivSubStyled = styled(CentralizeDiv)`
  height: 4.8rem;
  width: 100%;
  padding: 0 1.6rem;
  gap: 0.8rem;
  /* border: 1px solid var(--light-border); */
  background-color: var(--background);
  border-radius: 0.8rem;
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
  color: rgba(0, 0, 0, 0.9);

  
  
  
  
  
  
`;

export const DivCoverSubStyled = styled(DivToCoverStyled)`
  background-color: var(--background);
  border-radius: 0.8rem;
`;

export const SimilarSectionStyled = styled.section`
  width: 100%;
  height: max-content;
  background-color: var(--background);
  position: relative;
  pointer-events: none;
  touch-action: none;
  @media screen and (min-width: 578px) {
    order: 1;
    overflow-y: scroll;
    border-radius: 0.7rem;
    height: 100%;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DivTitleStyled = styled(CentralizeDiv)`
  width: 100%;
  min-height: 5.6rem;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--background);
  z-index: 1;
  /* border-bottom: 1px solid var(--border); */

  @media screen and (min-width: 577px) {
    margin-bottom: 1.2rem;
  }
`;

export const H2Styled = styled(H2BaseStyled)`
  width: 100%;
  color: var(--dark-primary);
  padding-bottom: 0.4rem;
  scale: 0.945;
`;

export const ContainerListStyled = styled.div`
  overflow-x: scroll;
  padding-left: 2rem;

  @media screen and (max-width: 375px) {
    padding-left: 1.5rem;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 577px) and (max-width: 720px) {
    padding-left: 0;
    max-height: 100%;
    overflow: scroll;
  }
`;

export const DivHalfList = styled.div`
  height: auto;
  width: auto;
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
  justify-items: flex-start;
  padding-right: 1.2rem;

  @media screen and (min-width: 577px) and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    padding-right: 0;
    margin: auto;
    margin-bottom: 1.2rem;
  }
`;


