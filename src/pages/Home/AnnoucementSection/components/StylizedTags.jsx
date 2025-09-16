import styled from "styled-components";

export const ItenSectionStyled = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: var(--red);
  /* background-image: linear-gradient(to bottom, var(--purple) ,var(--red)); */
`;

export const DivTitleStyled = styled.header`
  width: 100%;
  height: 68px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--dark-red);
  /* background-image: linear-gradient(to right, var(--purple) ,var(--dark-red)); */
  & h2 {
    color: white;
    font-family: var(--h-font);
    text-transform: capitalize;
    font-weight: 700;
    width: 100%;
    text-align: left;
    @media screen and (max-width: 375px) {
      font-size: 1em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      font-size: 1.012em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      font-size: 1.036em;
    }
    @media screen and (min-width: 769px) and (max-width: 992px) {
      font-size: 1.061em;
    }
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      font-size: 1.087em;
    }
    @media screen and (min-width: 1201px) {
      font-size: 1.1em;
    }
  }
`;

export const DivImgStyled = styled.div`
  height: 140px;
  width: 140px;
  padding: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 12px;
  background-color: white;
  box-shadow: -4px -4px 10px rgba(0, 0, 0, 0.125);
  z-index: 2;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DivPrice = styled.div`
  width: 100%;
  height: 164px;
  padding-top: 16px;
  padding-left: 12px;
  padding-bottom: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  
  & p {
    font-family: var(--p-font);
    color: white;
    margin-bottom: 8px;
  }
  & p:first-child {
    text-decoration: line-through;
    font-size: 0.9em;
    font-weight: 300;
    font-size: 1em;
  }
  & p:nth-child(2) {
    font-weight: 700;
    font-family: var(--p-font);
    padding-bottom: 4px;
    font-size: 1.17em;
  }
  & p:last-child {
    width: max-content;
    color: var(--red);
    font-weight: 500;
    border-radius: 12px;
    height: 24px;
    padding: 0 8px;
    background-color: var(--bluish-white);
    font-size: 0.9em;
  }
`;
