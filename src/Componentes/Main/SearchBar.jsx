import React from 'react';
import styled from 'styled-components';

const ContainerForShadow = styled.div`
  height: auto;
  width: 100%;
  /* position: sticky;
  top: 0px;
  z-index: 3;
  @media screen and (min-width: 993px){
    position: relative;
  } */
`;

const ContainerForFormStyled = styled.div`
  width: 100%;
  padding: 14px 0px;
  padding-bottom: 13px;
  background-color: #f0f0f0;
`;

const FormStyled = styled.form`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 90%;
  max-width: 1180px;
  margin: auto;
  height: 40px;
  position: relative;
  background-color:rgb(240, 240, 240);
  border-radius: 33px;
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
  /* border: 1px solid rgb(84, 84, 84); */
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.49);
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
  top: 5px;
  right: 15px;
`;

const ShadowStyled = styled.div`
  display: block;
  height: 4px;
  background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.16), rgba(240, 240, 240, 0));
  background-size: 100% 100%;

  @media screen and (min-width: 993px){
    display: none;
  }
`;

function SearchBar() {
  return (
    <ContainerForShadow>
      <ContainerForFormStyled>
          <FormStyled action="/search" method="post" id="for_search">
            <InputStyled type="search" id="search" name="query" placeholder="O que você quer? Digite aqui"></InputStyled>
            <DivSpanStyled><span className="material-symbols-rounded" style={{color: "red"}}>search</span></DivSpanStyled>
          </FormStyled>
      </ContainerForFormStyled>

      {/* <ShadowStyled></ShadowStyled> */}
    </ContainerForShadow>
    
  );
}

export default SearchBar;