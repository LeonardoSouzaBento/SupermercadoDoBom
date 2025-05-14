import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { AllProducts } from '../../../data/AllProducts';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import { binaryPrefixSearch } from './BuscaBinaria';


const ContainerForShadow = styled.div`
  height: auto;
  width: 100%;
`;

const ContainerForFormStyled = styled.div`
  width: 100%;
  padding: 14px 0px;
  padding-bottom: 13px;
  position: relative;
`;

const FormStyled = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1180px;
  margin: auto;
  height: 39px;
  padding-bottom: 1px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.17);
  position: relative;
`;

const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  touch-action: auto;
  border-radius: 22px;
  border: none;
  text-indent: 20px;
  font-weight: 400;
  font-size: 1em;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  &:focus{
    outline: none;
    box-shadow: none;
    background-color: white;
  }
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
  /* @media screen and (min-width: 320px) and (max-width:374px){
    font-size: 1em;
  }
  @media screen and (min-width: 375px) and (max-width:576px){
    font-size: 1em;
  } */
  @media screen and (min-width: 577px) and (max-width:768px){
    font-size: 1.03em;
  }
  @media screen and (min-width: 769px){
    font-size: 1.04em;
  }
`;

const DivSpanStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  width: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  padding-bottom: 2px;
  user-select: none;
  position: absolute;
  bottom: 0px;
  right: 8px;
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

const DivMsgStyled = styled.div`
  background-color: blue;
  height: max-content;
  width: max-content;
  border-radius: 6px;
  padding: 0px 16px;
  position: absolute;
  bottom: -52px;
  left: 0px;
  z-index: 4;
`;

const PointedShapeStyed= styled.div`
  height: 12px;
  width: 12px;
  background-color: blue;
  rotate: 45deg;
  border: 4px;
  position: absolute;
  top: -6px;
  left: 16px;
`;

const PMsgStyled = styled.p`
  color: white;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  padding: 12px 0px;

  @media screen and (min-width: 320px) and (max-width:374px){
   font-size: 1.055em;
  }
  @media screen and (min-width: 375px) and (max-width:576px){
     font-size: 1.07em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
     font-size: 1.11em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px){
     font-size: 1.13em;
  }
  @media screen and (min-width: 993px){
     font-size: 1.15em;
  }
`;

function SearchBar() {
  const navigate = useNavigate();
  const [thisInput, setThisInput] = useState("");
  const [returnedProducts, setReturnedproducts] = useState([])
  const {setSearchProducts, setSearchQuantities}=useContext(CartContext);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [viewSuggestion, setviewSuggestion] = useState(false);
  const [wasSee, setWasSee] = useState(false);

  function handleClickSearch() {
    const term = thisInput.toLowerCase();
    if (!term) {
      animateInputMessage("Digite algo");
      return
    };
    const results = binaryPrefixSearch(AllProducts, term);
    setReturnedproducts(results);
    setSearchInitiated(true);
  }

  function ViewTip() {
    if(wasSee)return;
    setviewSuggestion(true);
    
    setWasSee(false)
  }
  // Função para mostrar mensagem digitada aos poucos
  function animateInputMessage(message) {
    let index = 0;

    const writeInterval = setInterval(() => {
      setThisInput((prev) => message.slice(0, index + 1));
      index++;

      if (index >= message.length) {
        clearInterval(writeInterval);

        // Depois de um pequeno delay, apaga
        setTimeout(() => {
          let eraseIndex = message.length;

          const eraseInterval = setInterval(() => {
            eraseIndex--;
            setThisInput(message.slice(0, eraseIndex));

            if (eraseIndex <= 0) {
              clearInterval(eraseInterval);
            }
          }, 40); // apagar mais rápido
        }, 800); // tempo de exibição completa
      }
    }, 80); // escrever uma letra a cada 80ms
  }

  useEffect(() => {
    if (searchInitiated) {
      setSearchProducts(returnedProducts);
      setSearchQuantities(returnedProducts.map(() => 0));
      navigate("/SearchAction");
      setSearchInitiated(false);
    }
  }, [returnedProducts]);

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
          value={thisInput}
          onChange={(e) => setThisInput(e.target.value)}
          onClick={ViewTip}
          />
          <DivSpanStyled onPointerDown={handleClickSearch}>
            <span className="material-symbols-rounded" style={{color: "rgb(150, 150, 150)"}}>search</span>
          </DivSpanStyled>

          {viewSuggestion && (
            <DivMsgStyled>
            <PointedShapeStyed/>
            <PMsgStyled>Digite "açucar", ou "pasta de dentes" para testar.</PMsgStyled>
          </DivMsgStyled>)}

        </FormStyled>

       
    </ContainerForFormStyled>
  );
}
export default SearchBar;