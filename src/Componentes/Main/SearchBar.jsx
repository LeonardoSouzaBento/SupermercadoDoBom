import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
  @media screen and (min-width: 993px){
    position: relative;
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 90%;
  max-width: 1180px;
  margin: auto;
  height: 40px;
  padding-bottom: 14px;
  padding-top: 12px;
  position: relative;
`;

const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  border: none;
  font-weight: 300;
  font-size: 0.85em;
  text-indent: 20px;
  font-size: 0.97em;
  box-shadow: 0px 0px 4px rgb(207, 207, 207);
  border: 1px solid rgb(178, 178, 178);
  &:focus{
    outline: 1px solid black;
  }
  @media screen and (min-width: 320px) and (max-width:374px){
    font-size: 0.92em;
  }
  @media screen and (min-width: 375px) and (max-width:576px){
    font-size: 0.95;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    font-size: 1em;
  }
  @media screen and (min-width: 769px){
    font-size: 1.02em;
  }
`;

const DivSpanStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width:25px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  position: absolute;
  top: 17px;
  right: 14px;
`;

const SombraStyled = styled.div`
  height: 4px;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0));
  background-size: 100% 100%;
`;

function SearchBar() {
  return (
    <ContainerStyled>
        <FormStyled action="/search" method="post" id="for_search">
          <InputStyled type="search" id="search" name="query" placeholder="O que você quer? Digite aqui"></InputStyled>
          <DivSpanStyled><span className="material-symbols-rounded" style={{color: "rgb(111, 111, 111"}}>search</span></DivSpanStyled>
        </FormStyled>
    </ContainerStyled>
  );
}

export default SearchBar;