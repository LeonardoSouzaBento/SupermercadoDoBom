import SearchBar from "../components/Main/SearchBars/SearchBar";
import {ProductListHome} from "../components/Main/ProductSection/ProductListHome";
import Footer from '../components/Footer/Footer';
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #F0F0F0;
  /* &::after{
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('/background-pattern2.png');
    background-size: 1200px auto;
    filter: opacity(0.5) contrast(1.05);
    z-index: -1;
  } */
`;


const SearchAction = () => {
  return (
    <DivStyled>
      <SearchBar copy={true}></SearchBar>
      <ProductListHome variant={'inSearch'} categoryKey={13}></ProductListHome>
      <Footer></Footer>
    </DivStyled>
  )
}

export default SearchAction