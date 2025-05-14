import { useState } from 'react';
import styled from 'styled-components';
import { AllProducts } from '../../../data/AllProducts';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { binaryPrefixSearch } from './BuscaBinaria';

const ContainerForFormStyled = styled.div`
  width: 100%;
  padding: 12px 0px;
  padding-bottom: 14px;
  margin-bottom: 16px;
  background-color: #D74545;
`;

const FormStyled = styled.form`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 90%;
  max-width: 792px;
  margin: auto;
  height: 40px;
  position: relative;

  @media screen and (min-width: 993px){
    margin: 0px;
    margin-left: 32px;
  }
`;

const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  font-weight: 300;
  font-size: 0.85em;
  text-indent: 20px;
  font-size: 0.97em;
  border: 1px solid rgba(0, 0, 0, 0.29);
  border: none;
  &:focus{
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.56);
    box-shadow: none;
    background-color: white !important;
  }
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
    background-color: white;
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
  @media screen and (min-width: 993px){
   border-radius: 20px;
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

export default function SearchBarCopy() {

  const [input, setInput] = useState("");
  const {setSearchProducts, setSearchQuantities}=useContext(CartContext);

  function handleClickSearch() {
    const term = input.toLowerCase();
    const results = binaryPrefixSearch(AllProducts, term);
    setSearchProducts(results);
    setSearchQuantities(results.map(() => 0));
  }

  return (
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
          <span className="material-symbols-rounded" style={{color: "grey"}}>search</span>
        </DivSpanStyled>
      </FormStyled>
    </ContainerForFormStyled>
  );
}