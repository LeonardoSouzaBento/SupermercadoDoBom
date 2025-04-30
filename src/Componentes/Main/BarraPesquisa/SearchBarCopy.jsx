import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AllProducts } from '../../../data/AllProducts';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { binaryPrefixSearch } from './BuscaBinaria';

const ContainerForShadow = styled.div`
  height: auto;
  width: 100%;
  position: sticky;
  top: 0px;
  padding-bottom: 15px;
`;

const ContainerForFormStyled = styled.div`
  width: 100%;
  padding: 14px 0px;
  padding-bottom: 13px;
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
  border: 1px solid rgb(95, 95, 95);
  font-weight: 300;
  font-size: 0.85em;
  text-indent: 20px;
  font-size: 0.97em;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.49);
  &:focus{
    outline: 1px solid black;
    box-shadow: none;
    background-color: white;
  }
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
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
  width:30px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 12px;
  user-select: none;
  cursor: pointer;
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

export default function SearchBar({variant}) {

  const [input, setInput] = useState("");
  const {setSearchProducts, setSearchQuantities}=useContext(CartContext);

  function handleClickSearch() {
    const term = input.toLowerCase();
    const results = binaryPrefixSearch(AllProducts, term);
    setSearchProducts(results);
    setSearchQuantities(results.map(() => 0));
  }

  return (
    <ContainerForShadow>
      <ContainerForFormStyled>
          <FormStyled onSubmit={(e) => {
            e.preventDefault();
            handleClickSearch();
          }}>
            <InputStyled 
            type="text" 
            name="query" 
            placeholder="O que você quer? Digite aqui"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            >
            </InputStyled>
            <DivSpanStyled onClick={handleClickSearch}>
            <span className="material-symbols-rounded" style={{color: "red"}}>search</span></DivSpanStyled>
          </FormStyled>
      </ContainerForFormStyled>
    </ContainerForShadow>
  );
}