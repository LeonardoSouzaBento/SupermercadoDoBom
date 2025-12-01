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
  background-color: white;
  /* background-color: var(--red);
  background-image: linear-gradient(to right, var(--dark-red), var(--red)); */
`;

export const DivTitleStyled = styled.header`
  width: 100%;
  height: 96px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: var(--dark-red);
  & h2 {
    /* color: white; */
    font-family: var(--h-font);
    text-transform: capitalize;
    font-weight: 700;
    width: 100%;
    text-align: left;
    
    
    
    
    
    
  }
`;

export const DivImgStyled = styled.div`
  height: 140px;
  width: 100%;
  padding-bottom: 8px;
  margin: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;

  & img {
    display: block;
    width: 140px;
    height: 100%;
    box-sizing: border-box;
    padding: 6px;
    object-fit: cover;
    border-radius: 24px;
    background-color: transparent;
  }
`;

export const DivPrice = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: white;


  & div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    gap: 8px;
  }

  & p {
    font-family: var(--p-font);
    color: var(--dark-red);
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    position: relative;
    z-index: 2;
  }
  #price {
    font-weight: 700;
    font-family: var(--p-font);
    font-size: 1.17em;
  }
  #oldPrice {
    text-decoration: line-through;
    font-size: 0.9em;
    font-weight: 400;
    font-size: 1em;
  }
  #discount {
    width: max-content;
    color: var(--dark-purple);
    font-weight: 500;
    border-radius: 12px;
    height: 24px;
    padding: 0 12px;
    background-color: var(--back-color);
    font-size: 0.9em;
  }
`;

