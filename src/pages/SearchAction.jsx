import { useState, useEffect } from "react";
import SearchBar from "../components/Main/SearchBars/SearchBar";
import {ProductList} from "../components/Main/ProductSection/ProductList";
import Footer from '../components/Footer/Footer';
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 59px;
  box-sizing: border-box;
  background-color: #f5faff;
  opacity: ${props => props.$opacityState};
  transition: opacity 0.2s ease;
`;

const SearchAction = () => {
  const [opacityState, setOpacityState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacityState(1);
    }, 200);
  }, [])

  return (
    <DivStyled $opacityState={opacityState}>
      <SearchBar copy={true}></SearchBar>
      <ProductList variant={'inSearch'} categoryKey={13}/>
      <Footer setOpacityState={setOpacityState}></Footer>
    </DivStyled>
  )
}

export default SearchAction
